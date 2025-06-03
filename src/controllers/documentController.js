const uploadDocument = require('../services/uploadCloudinary');

const handleDocumentUpload = async (req, res) => {
  try {
    const filePath = req.file.path;
    const mimetype = req.file.mimetype;

    const uploadResult = await uploadDocument(filePath, mimetype);

    res.status(200).json({
      message: 'File uploaded successfully',
      data: uploadResult,
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed', details: error.message });
  }
};

module.exports = {
  handleDocumentUpload,
};
