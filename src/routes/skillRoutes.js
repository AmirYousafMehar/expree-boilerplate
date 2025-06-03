const express = require('express');
const router = express.Router();
const authenticateToken = require('../middelware/authMiddleware');
const {
    createSkill,
     getSkill,
    getSingleSkill,
    updateSkill,
    deleteSkill
} = require('../controllers/skillController');

// router.post('/',authenticateToken(['admin', 'user']), createProfile); profileId

router.get('/', getSkill);
router.post('/create', createSkill);
router.patch('/update/:skillId', updateSkill);
router.delete('/delete/:skillId', deleteSkill);
router.get('/:skillId', getSingleSkill);

module.exports = router; 