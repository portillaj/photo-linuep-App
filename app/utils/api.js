var request = require('request');
console.log(request);

request({
  method: 'POST',
  url: 'https://api.kairos.com/detect',
  headers: {
    'Content-Type': 'application/json',
    'app_id': '21f63e25',
    'app_key': 'eecbe1e91b02670c513ba71c70b42716'
  },
  body: "{  \"image\": \"../uploads/image1.jpg\",  \"selector\": \"ROLL\"}"
}, function (error, response, body) {
  if(error){
    console.log(error);
  }else {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  }
});
/*
//app.get("/populate/:id", function(req, res){
  //get id of image uploaded
  //store image in variable var badGuy = req.params.id
  //import array of test images (hardcoded)
  //var matchesArray = [];
  //loop through array foreach img in array
  //for(var i = 0; i < testImages.length && matchesArray.length < 6; i++){
    //api call to face++ with badGuy variable as the image to match against from
    axios.get('url', {
      params: {
        api_key: dajfldjflajdf,
        secret_key: aldjfladjsfljda,
      }
  } ).then(function(response){

});
    var confidence = face++.match(userImg, testImages[i]);
      if(confidence > 60%){
        matchesArray.push(testImages[i]); a new empty array
    }
  }end for loop
    res.json({matches: matchesArray});
});
*/
