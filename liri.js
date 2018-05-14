var keys = require("./keys.js")
var Twitter = require("twitter");
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
}