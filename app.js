
const express = require("express");
const colors = require('colors')
const connectDB = require('./db/connect')
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()



// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("Task manager is began")
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is running on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
