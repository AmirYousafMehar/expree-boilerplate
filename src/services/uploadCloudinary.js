// services/uploadDocument.js
const cloudinary = require('./cloudniarySettings');

const path = require('path');

const getResourceType = (mimetype) => {
  if (mimetype.startsWith('image/')) return 'image';
  if (mimetype.startsWith('video/')) return 'video';
  return 'raw'; // fallback for PDFs, docs, etc.
};


const uploadDocument = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
    //   resource_type: 'image', // Important for non-image files
      resource_type: getResourceType(file.mimetype),
      folder: 'documents',  // Optional: folder in your Cloudinary account
    });
    return result;
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw error;
  }
};

module.exports = uploadDocument;
