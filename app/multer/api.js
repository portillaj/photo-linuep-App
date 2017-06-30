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
