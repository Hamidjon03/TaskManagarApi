
const express = require("express");
const app = express();
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("Task manager is began")
})

app.use('/api/v1/taks', tasks)

const port = 3000;
app.listen(port, console.log(`Server is running on port ${port}`))