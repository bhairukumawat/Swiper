var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer')
const Connectiondb =require("./db/connection")
 
var app = express();
var port = process.env.PORT || 4000;
 
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// serving static files
app.use('/uploads', express.static('uploads'));
 

// handle storage using multer
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
});
var upload = multer({ storage: storage });




const wiki = require('./routes/web.js');
app.use('/a', wiki);


app.listen(4000);
















// app.use(express.json());


// const multer =require("multer")
// const upload =multer({
//     dest:'./upload/images'
// })


