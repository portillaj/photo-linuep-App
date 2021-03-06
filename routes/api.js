var request = require('request');
var fs = require('fs');
var formData = require("form-data");
var express = require('express');
var router = express.Router();
module.exports = function() {
var formData = {
  // Pass a simple key-value pair
  subject_id: "image1",
  gallery_name: "Mugshots",
  image: fs.createReadStream('./routes/apiInfo/image1.jpg')

};

request({
  method: 'POST',
  url: 'https://api.kairos.com/enroll',
  headers: {
    'Content-Type': 'image/jpeg',
    'app_id': '21f63e25',
    'app_key': 'eecbe1e91b02670c513ba71c70b42716'
  },
  formData: formData
}, function (error, response, body) {
  if(error){
    console.log(error);
    return;
  }
  console.log('Headers:', JSON.stringify(response.headers, null, 2));
  console.log(typeof body);
  console.log('Response:', JSON.stringify(JSON.parse(body),null,2));
});


console.log("====================");
console.log("====================");

request({
  method: 'GET',
  url: 'https://api.kairos.com/gallery/view',
  headers: {
    'Content-Type': 'application/json',
    'app_id': '21f63e25',
    'app_key': 'eecbe1e91b02670c513ba71c70b42716'
  },
  body: "{  \"gallery_name\": \"Mugshots\"}"
}, function (error, res, body) {
  console.log('Headers:', JSON.stringify(res.headers));
  console.log('Response:', body);

});

};
