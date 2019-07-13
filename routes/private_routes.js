const express = require('express');
const app = express();

const router = express.Router();


router.get('/test',(req,res)=>{
    console.log("test");
    res.send("test");
})

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(3000,()=>{
    console.log("server started")
})
