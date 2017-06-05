var express = require('express');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
var axios = require('axios');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

var URL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=dc4e439249124bd3890d8f2d925d6a15';
app.get('/', function(req, res){
  axios.get(URL).then(function (results){
    res.send(results.data.articles[0].urlToImage);
  }).catch(function (e){
    res.send('We Got an error');
  });

});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
