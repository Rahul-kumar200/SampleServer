const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Getting request')
})

app.post('/signin',(req,res)=>{
    res.send("Posting the data")
})

app.listen(9000,()=>{
    console.log('listening to port 9000...')
})