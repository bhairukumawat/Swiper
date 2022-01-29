const res = require("express/lib/response")
const StudentModel = require("../model/student.js")
const fs = require('fs');

var exportFuns = {}
exportFuns.getAllDoc = async (req, res) => {
    try {
        let result = await StudentModel.find({})
         result= res.json(result)
          // console.log(result)
        
        //    res.contentType('json');
           res.send(result.img);

    } catch (error) {
    
      console.log(error)
    }
}
exportFuns.createDoc = (req,res)=>{
    // console.log(req.file);
    const newimg = new StudentModel();
     newimg.img.data = fs.readFileSync(req.file.path);
     newimg.img.contentType = "image/jpg",
    // const objimg = {
    //   usrImage: {
    //     data: new Buffer.from(img_enc, 'base64'),
    //     contentType: "image/jpg",
    //   },
    // };
    // console.log(objimg);
    
    newimg.save();
    res.json({ message: 'New image added to the db!' });
    
}
// exportFuns.editDoc = async (req, res) => {
//     try {
//         const result = await StudentModel.findById(req.params.id)
//         res.render("edit", { data: result })

//     } catch (error) {
//         req.flash('signupMessage', error.message);
//         req.flash('ErrData',JSON.stringify(req.body));
//         console.log(req.body)
//     }




// }
// exportFuns.updateByIdDoc = async (req, res) => {
//     try {
//         const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
//         // console.log(req.body)

//     } catch (error) {
//         req.flash('signupMessage', error.message);
//         req.flash('ErrData',JSON.stringify(req.body));
//         console.log(req.body)
//     }



//     res.redirect("/student")
// }
// exportFuns.deleteByIdDoc = async (req, res) => {
//     try { 
//         await StudentModel.findByIdAndDelete(req.params.id)
//         res.redirect("/student")

//     } catch (error) {
//         req.flash('signupMessage', error.message);
//         req.flash('ErrData',JSON.stringify(req.body));
//         console.log(req.body)
//     }


//     // console.log(req.params.id)

//  }








module.exports = exportFuns;
