const express = require('express') 

const app = express()

//index
app.get('/',(req,res) =>{
    res.send('99 bottles of beer on the wall')
})

app.get('/98',(req,res) =>{
    res.send('take one down and pass it around')
})

app.get('/:number_of_bottles',(req,res) =>{
    const count = req.params.number_of_bottles
    if(count>0){
        res.send(`
        ${req.params.number_of_bottles} Bottles of beer on the wall 
        <a href="${(req.params.number_of_bottles-1)}">Take one down, pass it around</a>
    `)
    } else {
        res.send(`
        ${count} Bottles of beer on the wall 
        <a href="${'/'}">Start Over</a>
    `)
    }
   
})

// 
// if(count > 0){
// <a href="count">Take one down, pass it around</a>
// } if else{
//     (count)
// }

app.listen(3000, () => {
    console.log('listening')
})