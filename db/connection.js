const mongoose = require('mongoose');
const Connectiondb=mongoose.connect('mongodb://localhost:27017/Swipe');
console.log("ded")
    module.exports=Connectiondb;