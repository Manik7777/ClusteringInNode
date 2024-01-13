const express = require('express');

const app=express();
const PORT=7777;

app.get('/manik',(req,res)=>{
    res.send({
        data :{
            isSuccess : true,
            processId : process.pid
        }
    })
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})