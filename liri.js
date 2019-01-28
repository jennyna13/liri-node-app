require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");
var request = require('request');

var moment = require("moment");
moment().format();

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

function commands (command, input){
    switch(command){
        case "concert-this":
            concertThis(input);
            break;
        case "movie-this":
            if (input){
                movieThis(input);  
            }else {
                movieThis("Mr. Nobody");
            }
            break;
        case 'spotify-this-song':
            if (input){
                spotifyThis(input);
            }else {
                spotifyThis("The Sign")
            }
            break;
        case 'do-what-it-says':
            doThis();
            break;
        default:
        console.log( "Please enter one of the following commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'" );
    }
};

function concertThis(concertQuery){

    var queryUrl = "https://rest.bandsintown.com/artists/" + concertQuery + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {
        // if ( !error && response.statusCode === 200 ) {
        //     var concertInfo = JSON.parse( body );
        // }

        if ( !error && response.statusCode === 200 ) {
            var concertInfo = JSON.parse( body );
            for ( let i = 0; i < concertInfo.length; i++ ) {
              var artistResults = concertInfo[ i ];
              console.log( "\n-------------------------" +
                "\nVenue: " + artistResults.venue.name +
                "\nVenue Location: " + artistResults.venue.city + ", " + artistResults.venue.country +
                "\nEvent Date: " + moment( artistResults.datetime ).format( "MM/DD/YYYY" ) +
                "\n---------------------------" );
        
    };

}
});
}

// concertThis();

function movieThis(movieQuery){

    // if ( !movieName ) {
    //     movieName = "mr nobody";
    //   }
      var queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";
      
      console.log( queryUrl );
     
      request( queryUrl, function ( error, response, body ) {
        
        if ( !error && response.statusCode === 200 ) {
          var movieInfo = JSON.parse( body );
          
          console.log(movieInfo);

          var movieResults =
            "\n------------------------" +
            "\nTitle: " + movieInfo.Title +
            "\nYear: " + movieInfo.Year +
            "\nImdb Rating: " + movieInfo.imdbRating +
            "\nRotten Tomatoes Rating: " + movieInfo.tomatoRating +
            "\nCountry: " + movieInfo.Country +
            "\nLanguage: " + movieInfo.Language +
            "\nPlot: " + movieInfo.Plot +
            "\nActors: " + movieInfo.Actors +
            "\n----------------------------\n";
          console.log( movieResults );
   
            // * Title of the movie.
            // * Year the movie came out.
            // * IMDB Rating of the movie.
            // * Rotten Tomatoes Rating of the movie.
            // * Country where the movie was produced.
            // * Language of the movie.
            // * Plot of the movie.
            // * Actors in the movie.
        }
    });
}
// movieThis();

function spotifyThis(spotifyQuery){
    if (spotifyQuery == undefined || null) {
        spotifyQuery = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: spotifyQuery }, function (err, data) {
        if(err){
            return console.log('Error occurred: ' + err);
        }
                    
        else {
            for (i = 0; i < data.tracks.items.length && i < 5; i++){
            
                var musicQuery = data.tracks.items[i];
             
                
                console.log(
                "Artist: " + musicQuery.artists[0].name +
              
                "\nSong Name: " + musicQuery.name +
              
                "\nLink to Song: " + musicQuery.preview_url +
                
                "\nAlbum Name: " + musicQuery.album.name +
                "\n===============================");
            }
        }  
    });
}
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

function doThis(){ 
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            console.log("Error" + err);
            return;
        }else {
            console.log(data);

            var whatever = data.split(",");
            commands(whatever[0], whatever[1]);
        }
    });
}
commands (command,input);
