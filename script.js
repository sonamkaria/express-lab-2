const express = require('express')
const app = express()


app.get("/magic", (req, res)=>{
    res.send("Hello Magic!")
})

// //add route

 app.get("/magic/:question",(req, res)=>{
    response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
   res.send(`${req.params.question} <h1>${response[Math.floor(Math.random() * response.length)]}</h1>`)
 })

app.listen(3000, ()=>{
    console.log("we are listening on port 3000...")
})