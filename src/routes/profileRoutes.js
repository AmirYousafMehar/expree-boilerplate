const express = require('express');
const router = express.Router();
const authenticateToken = require('../middelware/authMiddleware');
const {
    createProfile,
    updateProfile,
    deleteProfile,
    getProfile,
    getSingleProfile
} = require('../controllers/profileController');

// router.post('/',authenticateToken(['admin', 'user']), createProfile); profileId

router.get('/', getProfile);
router.post('/create', createProfile);
router.patch('/update', updateProfile);
router.delete('/delete/:profileId', deleteProfile);
router.get('/:profileId', getSingleProfile);

module.exports = router; 