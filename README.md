# liri-node-app

<h2>Technologies used</h2>

  Javascript, Node.js, Moment.js, Bandsintown API, Spotify API, OMDb API
  
<h2>Possible commands</h2>

  'concert-this', 'spotify-this-song', 'movie-this','do-what-it-says'

<h2>What Each Command Should Do</h2>

<h6>node liri.js concert-this "artist/band name here" </h6>
  
- This will search the Bands in Town Artist Events for an artist and render the following information about each event to the terminal:

  Name of the venue
  Venue location
  Date of the Event (use moment to format this as "MM/DD/YYYY")

    

<h6>node liri.js spotify-this-song 'song name here'</h6>
  
- This will show the following information about the song in your terminal/bash window
  
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
spotify
<h6>node liri.js movie-this 'movie name here'</h6>
  
- This will output the following information to your terminal/bash window:
 
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
 
 <h6>node liri.js do-what-it-says</h6>
 
  It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

  
