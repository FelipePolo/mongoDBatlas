const express = require('express')
const mongodb = require('mongodb').MongoClient
require('dotenv').config()
const app = express()


app.get("/",(req,res) => {
  try {
    
  } catch (error) {
    res.send(error)
  }
})


app.listen(4000,() => {
  console.log("server start on http://localhost:4000")
})