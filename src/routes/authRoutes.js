const express = require('express');
const router = express.Router();

const {login,signUp,otpVerirfication} = require('../controllers/authController');


/**
 * @swagger
 * /api/auth:
 *   get:
 *     summary: user login
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.post('/login', login);
router.post('/signUp', signUp);
router.post('/otp/verify',otpVerirfication)
module.exports = router; 