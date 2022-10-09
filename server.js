const express = require('express')
const app = express()


app.get("/greeting", (req, res)=>{
    res.send("Hello Stranger!")
})

//add route

app.get("/greeting/:name",(req, res)=>{
    res.send(`Hello, ${req.params.name}`)
})

app.listen(3000, ()=>{
    console.log("we are listening on port 3000...")
})