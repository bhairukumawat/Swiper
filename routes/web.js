var express = require('express');
const fs = require('fs');

const multer =require("multer")
const upload =multer({
    dest:'./upload/images'
})




var router = express.Router();
 const {StudentController}= require('../controller/index.js');


 router.get('/',StudentController.getAllDoc);


router.post('/',upload.single('imgname') , StudentController.createDoc);


module.exports = router;

