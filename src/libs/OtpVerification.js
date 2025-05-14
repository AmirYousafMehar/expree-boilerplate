const jwt = require('jsonwebtoken');

async function verifyOTPToken(payload) {

  try {
    const decoded = jwt.verify(payload?.token, process.env.JWT_SECRET);
    
    if (decoded.otp == payload?.otp) {
      return { valid: true, decoded };
    }
    return { valid: false, reason: 'Invalid OTP' };
  } catch (err) {
    return { valid: false, reason: 'Expired or Invalid Otp' };
  }
}

module.exports = {
  verifyOTPToken
}