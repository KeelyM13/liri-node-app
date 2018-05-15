var keys = require("./keys.js")
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var food = process.argv
console.log(food[3]);

if (food[2] === "my-tweets") {
    var client = new Twitter(keys.twitter);
    var params = {screen_name: 'hackberries12'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if(!error) {
           
            console.log(response); 
        }
      
      });
} else if (food[2] === "spotify-this-song") {

 
var spotify = new Spotify({
  id: "dbb7d0f3402d4a5da336696d00135680",
  secret: "13228f41ce554efc807c8ae4d884865c"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
};