console.log("airtable demo");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key9H7DTqrYaav7cD'}).base('appqaRl162WxLJLsA');


base("modern_furniture").select({}).eachPage(gotPageOfSongs, gotAllSongs);

var songs = [];

function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our books array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllSongs(err) {
  console.log("gotAllSongs()");

  if (err) {
  console.log("error loading data");
  console.error(err);
  return;
}

consoleLogSongs();
showSongs();
}

function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("song:", song);
  });
}

function showSongs() {
  console.log("showSongs()");
  songs.forEach((song) => {

    var songTitle = document.createElement("h1");
    songTitle.innerText = song.fields.album_title;
    document.body.append(songTitle);

    var nameOfArtist = document.createElement("p");
    nameOfArtist.innerText = song.fields.artist;
    document.body.append(nameOfArtist);

    var coverImage = document.createElement("img");
    coverImage.src = song.fields.album_artwork[0].url;
    document.querySelector(".container").append(coverImage);
  });
}
