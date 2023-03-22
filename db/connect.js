const mongoose = require('mongoose')
const connectStr = "mongodb://localhost:27017"

const connectDB = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true }).then(() => console.log('meow'.cyan))
}


module.exports = connectDB