// ./libs/DBConnector.js
function DBConnection(mongoose, uri) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports = { DBConnection };
