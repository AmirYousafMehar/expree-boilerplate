const Profile = require('../models/profileModel');


const createProfile = async (req, res) => {

    try {

        let payload = { ...req.body };
        const profile = new Profile(payload);
        const profileInfo = await profile.save();
        res.status(201).json({ message: 'Profile created successfully', profileInfo });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getProfile = async (req, res) => {

    try {

        let allProfile = await Profile.find({ isActive: true })
        res.status(201).json({ data: allProfile });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const getSingleProfile = async (req, res) => {

    try {

        let { profileId } = req.params;
        let profile = await Profile.findOne({ _id: profileId })
        res.status(201).json({ data: profile });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const updateProfile = async (req, res) => {

    try {
        let payload = { ...req.body };
        let updatedInfo = await Profile.updateOne(
            { _id: payload?.profileId },  // Filter
            { $set: payload }  // Update
        )
        res.status(201).json({ message: 'Profile created successfully', updatedInfo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const deleteProfile = async (req, res) => {

    try {
        const { profileId } = req.params;
        await Profile.deleteOne({ _id: profileId })
        res.status(201).json({ message: 'Profile delete successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = {
    createProfile,
    updateProfile,
    deleteProfile,
    getProfile,
    getSingleProfile
}