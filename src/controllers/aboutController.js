const About = require('../models/aboutModel');


const createAbout = async(req,res)=>{

    try {
    
            let payload = { ...req.body };
            const about = new About(payload);
            const aboutInfo = await about.save();
            res.status(201).json({ message: 'created successfully', aboutInfo });
    
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}


module.exports={
    createAbout
}