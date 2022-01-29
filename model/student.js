const mongoose = require('mongoose')



const studentSchema = new mongoose.Schema({
    // name: String,
  
    img:
    {
        data: Buffer,
        contentType: String
    }
})

console.log("dsddd")
const StudentModel = mongoose.model("images", studentSchema)
module.exports = StudentModel;