const cluster = require('node:cluster');
const os = require('os')
const express = require('express')

const noOfCpus=os.cpus().length;

// fork workers
// the assignment works in round-robin way
if(cluster.isPrimary){
    for(let i=0;i<noOfCpus;i++){
        cluster.fork();
    }
}
else{
    const app=express();
    const PORT=7777;
    app.get('/manik',(req,res)=>{
        res.status(200).send({
            data : {
                isSuccess : true,
                processId : process.pid
            }
        })
    });
    
    app.listen(PORT,()=>{
        console.log('Server running at port 7777');
    })
}