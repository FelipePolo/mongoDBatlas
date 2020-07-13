const express = require('express')
const app = express()

app.get("/",(req,res) => {
  res.status(200).send({
    msg:"todo salio correcto "
  })
})



app.listen(4000,() => {
  console.log("server start on http://localhost:4000")
})