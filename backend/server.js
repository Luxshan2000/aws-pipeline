const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const connectMongoDb = require("./config/database")
const getRoutes = require('./src/routes/getRoutes')
const addRoutes = require('./src/routes/addRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  //51.20.93.112
  origin:["*", "http://51.20.93.112:3000"],//"exp://192.168.8.182:8081"
  methods:["GET","POST"],
  credentials:true
}))  

app.use(bodyParser.json())


// app.use('/api/add', addRoutes); 
app.use('/api/get', getRoutes); 
app.use('/api/add', addRoutes); 


connectMongoDb()








app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});