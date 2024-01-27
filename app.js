
require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/task')


// middleware : to have data in req.body 
app.use(express.json())


// routes
app.get('/hello',(req,res)=>{
  res.send("Task Manager App ")
})


// tasks is the router 
app.use('/api/v1/tasks',tasks)


const port = 3000
app.listen(port,console.log(`Server is Listening at port ${port}`))