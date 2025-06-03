const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { emailSender } = require('../libs/emailSender.js');
const { jwtGenerator } = require('../libs/JwToken.js');
const { verifyOTPToken } = require('../libs/OtpVerification.js');

// user login
const login = async (req, res) => {

  const { username, password } = req.body;

  try {
    // Find user in the DB
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Payload to encode in JWT
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        isActive:user.isActive
      };

      // check user isActive or not 

      if (user.isActive) {
        // Sign JWT
        const token = jwtGenerator(payload, process.env.JWT_SECRET, '1h');
        res.json({ token });
      } else {
          let to = user.email;
          let subject = 'Your One-Time Password (OTP)';
          let otp = Math.floor(10000 + Math.random() * 90000);
          const response = await emailSender({ to, subject, otp });
          
      if (response?.messageId) {
          const plainUser = user.toObject();
          plainUser.otp = otp;
          const token = jwtGenerator(plainUser, process.env.JWT_SECRET, '5m');
          res.status(201).json({ message: 'User is not active , One-Time password shared at your register email for activation', token });
    } else {
      res.status(201).json({ message: 'email not sent . Internal server error' });
    }}

    } else {
      return res.status(401).json({ message: 'Wrong password' });
    }

  } catch (err) {
    res.status(500).json({ message: 'Server error during login' });
  }
};

// user login
const signUp = async (req, res) => {

  try {

    const saltRounds = 10;
    let payload = { ...req.body };
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
    payload.password = hashedPassword;
    let to = payload.email;
    let subject = 'Your One-Time Password (OTP)';
    let otp = Math.floor(10000 + Math.random() * 90000);
    const response = await emailSender({ to, subject, otp });

    if (response?.messageId) {

      const user = new User(payload);
      const userInfo = await user.save();
      const plainUser = userInfo.toObject();
      plainUser.otp = otp;
      const token = jwtGenerator(plainUser, process.env.JWT_SECRET, '5m');
      res.status(201).json({ message: 'One-Time password shared at your register email', token });

    } else {
      res.status(201).json({ message: 'User created but email not send' });
    }

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// user will store if otp is verified
const otpVerirfication = async (req, res) => {

  try {

    const { otp, token } = req.body;
    const data = await verifyOTPToken({ otp, token });
    
      let userId = data?.decoded?._id;
      if (data?.valid) {
        await User.updateOne({ _id: userId }, { $set: { isActive: true } });
        res.status(201).json({ message: 'Otp is verified you can login now' });
      } else {
        res.status(403).json({ message: data?.reason });
      }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  login,
  signUp,
  otpVerirfication
}; 