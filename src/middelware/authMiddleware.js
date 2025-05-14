const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateToken = (allowedRoles = []) => {
  return async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log(allowedRoles,'allowedRoles')
    if (!token) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret-key');

      // Fetch user from DB
      const user = await User.findOne({ username: decoded.username });

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      req.user = user;

      if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied. Insufficient role.' });
      }

      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
  };
};

module.exports = authenticateToken;
