const Skill = require('../models/skillModel');



const createSkill = async (req, res) => {

    try {

        let payload = { ...req.body };
        const skill = new Skill(payload);
        const skillInfo = await skill.save();
        res.status(201).json({ message: 'Skill created successfully', skillInfo });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getSkill = async (req, res) => {

    try {

        let skills = await Skill?.find()
        res.status(201).json({ data: skills });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}


const getSingleSkill = async (req, res) => {

    try {

        let { skillId } = req.params;
        let skill = await Skill.findOne({ _id: skillId })
        res.status(201).json({ data: skill });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const updateSkill = async (req, res) => {

    let {skillId} = req.params;
    try {
        let payload = { ...req.body };
        let SkillInfo = await Skill.updateOne(
            { _id:skillId},  // Filter
            { $set: payload }  // Update
        )
        res.status(201).json({ message: 'Skill Updated successfully', SkillInfo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const deleteSkill = async (req, res) => {

    try {
        const { skillId } = req.params;
        await Skill.deleteOne({ _id: skillId })
        res.status(201).json({ message: 'Skill delete successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}
module.exports={
    createSkill,
    getSkill,
    getSingleSkill,
    updateSkill,
    deleteSkill
}