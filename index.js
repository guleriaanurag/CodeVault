const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})