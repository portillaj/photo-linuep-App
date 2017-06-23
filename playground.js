//our npm packages
var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var mime = require('mime');
var PORT = 3000;
var app = express();


//route of profile section
router.get("/profile", function(req, res) {

        res.sendFile(__dirname + "/public/index.html");

  });

//store multer diskstorage in storage variable where you want the files to be uploaded to
//in this case we want all of the files uploaded into uploads folder
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    //grabs the file name and mime package will update the extension for us to whatever file it is
    cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
  }
});

//store the mullter storeage into upload variable
var upload = multer({ storage: storage });

//our post where we would upload our photo and video
router.post('/upload', upload.single('photos'), function(req,res){
  console.log(req.body); //form fields
  /* example output:
  { title: 'abc' }
   */
  console.log(req.file); //form files
  /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
   */
   var getPath = req.file.path;
   db.User.update({
    picture: getPath,
    }, {
    where: {
      id: 1
  }
   }).then(function(results){
       res.redirect("/profile");
   });

});

//export our router to the app.js file to run the app
module.exports = router;




// var express = require('express');
// var bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;
// var axios = require('axios');
//
// var app = express();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//
// app.use(express.static("./public"));

// var API_KEY = 'kXi_1a3tU3CnIrR0yi1fUdaMcTuSTrPs';
// var API_SECRET = 'BhODR2SNmpSjGTfL_3-xfcoiSmu4EyBP';
// var URL = `https://api-us.faceplusplus.com/facepp/v3/search?api_key=${API_KEY}&api_secret=${API_SECRET}
// &image_file=c2fc0ad7c8da3af5a34b9c70ff764da0`;
// app.get('/face', function(req, res){
//   axios.get(URL).then(function (results){
//     res.json(results);
//   }).catch(function (e){
//     res.send('We Got an error');
//   });
//
// });
//
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
