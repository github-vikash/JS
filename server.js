const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const dbconfig = require("./config/dbconfig.js");


const app = express();
mongoose.set('useNewUrlParser', true);
app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

require("./routes/student.routes")(app)



mongoose.Promise = global.Promise;


// data base connection

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log("coonected to database");
}).catch(err=>{
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

app.post('/student1',(req,res)=>{

    console.log(req.body)
    res.send("Hello in in nodejs application");
   

});

app.listen(2000,()=>{
    console.log("server started");
})