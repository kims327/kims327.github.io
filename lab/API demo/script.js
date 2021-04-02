console.log("airtable demo");

//load airtable library

var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key9H7DTqrYaav7cD'}).base('appqaRl162WxLJLsA');
//
// base('Music').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('album_title'));
//     });
//
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();
//
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('album_artwork'));
//     });
//
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();
//
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('artist'));
//     });
//
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();
//
// }, function done(err) {
//     if (err) { console.error(err); return; }
// });


// base("Music").select({
//
// }).eachPage(gotPageOfSongs, gotAllSongs);
//
// var songs = [];
//
// function gotPageOfSongs(records, fetchNextPage) {
//   console.log("gotPageOfSongs()");
//   songs.push(...records);
//   fetchNextPage();
// }
//
// function gotAllSongs(err) {
//   console.log("gotAllSongs()");
//
//   if (err) {
//     console.log("error loading songs");
//     console.error(err);
//     return;
//   }
//   consoleLogSongs();
//   showSongs();
// }
//
// function consoleLogSongs() {
//   console.log("consoleLogSongs()");
//   songs.forEach(song) => {
//     console.log("Song:", song);
//   });
// }

// function consoleLogSongs(){
//   console.log("consoleLogSongs()");
//   songs.forEach(song) => {
//     console.log("Song:" song);
//   });
// }

// function showSongs() {
//   console.log("showSongs()");
//   songs.forEach(song) => {
//
//     var songTitle = document.createElement("h1")
//     songTitle.innerText = song.fields.album_title;
//     document.body.append(songTitle);
//   });
// }


base("music").select({}).eachPage(gotPageOfSongs, gotAllSongs);

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

    var nameOfArtist = document.createElement("h2");
    nameOfArtist.innerText = song.fields.artist;
    document.body.appendChild(nameOfArtist);

    var coverImage = document.createElement("img");
    coverImage.src = song.fields.album_artwork[0].url;
    document.body.append(coverImage);
  });
}
