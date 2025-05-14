const jwt = require('jsonwebtoken');

const jwtGenerator = (payload, JwtSecret, expiryTime) => {
    const token = jwt.sign(payload, JwtSecret || 'secret-key', {
        expiresIn: expiryTime ? expiryTime : '1h',
    });
    return token;
}

module.exports = {
    jwtGenerator
}