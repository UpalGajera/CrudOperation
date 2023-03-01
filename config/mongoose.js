const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/crud");

const db = mongoose.connection;

db.on('err',console.error.bind(console,"DB connected nathi thayu"));

db.once('open',(err)=>{
    if(err){
        console.log("DB strat nathi thayu");
        return false;
    }
    console.log("DB start thay gyu");
})

module.exports = db;