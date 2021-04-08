console.log("airtable demo");

var Airtable = require('airtable');
console.log(Airtable);
var base = new Airtable({apiKey: 'key9H7DTqrYaav7cD'}).base('appqaRl162WxLJLsA');


base("modern_furniture").select({}).eachPage(gotPageOfModerns, gotAllModerns);

var moderns = [];

function gotPageOfModerns(records, fetchNextPage) {
  console.log("gotPageOfModerns()");
  // add the records from this page to our books array
  moderns.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllModerns(err) {
  console.log("gotAllModerns()");

  if (err) {
  console.log("error loading data");
  console.error(err);
  return;
}

consoleLogModerns();
showModerns();
}

function consoleLogModerns() {
  console.log("consoleLogModerns()");
  moderns.forEach((modern) => {
    console.log("Modern:", modern);
  });
}

function showModerns() {
  console.log("showModerns()");
  moderns.forEach((modern, i) => {

    var furnitureImage = document.createElement("img");
    furnitureImage.classList.add("furniture-image");
    furnitureImage.src = modern.fields.images[0].url;

    if (i === 0) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "3vw";
    } else if (i === 1) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "70vw";
    } else if (i === 2) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "60vw";
    }else if (i === 3) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "40vw";
    }else if (i === 4) {
    furnitureImage.style.top = "60vh";
    furnitureImage.style.left = "30vw";
    }else if (i === 5) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "80vw";
    }else if (i === 6) {
    furnitureImage.style.top = "45vh";
    furnitureImage.style.left = "30vw";
    }else if (i === 7) {
    furnitureImage.style.top = "36vh";
    furnitureImage.style.left = "70vw";
    }else if (i === 8) {
    furnitureImage.style.top = "72vh";
    furnitureImage.style.left = "10vw";
    }else if (i === 9) {
    furnitureImage.style.top = "63vh";
    furnitureImage.style.left = "48vw";
    }else if (i === 10) {
    furnitureImage.style.top = "46vh";
    furnitureImage.style.left = "52vw";
  }else if (i === 11) {
    furnitureImage.style.top = "50vh";
    furnitureImage.style.left = "24vw";
  }else if (i === 12) {
    furnitureImage.style.top = "8vh";
    furnitureImage.style.left = "35vw";
  }else if (i === 13) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "70vw";
  }else if (i === 14) {
    furnitureImage.style.top = "70vh";
    furnitureImage.style.left = "20vw";
  }else if (i === 15) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "8vw";
  }else if (i === 16) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "6vw";
  }else if (i === 17) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "20vw";
  }else if (i === 18) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "3vw";
  }else if (i === 19) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "15vw";
  }else if (i === 20) {
    furnitureImage.style.top = "15vh";
    furnitureImage.style.left = "5vw";
  }else if (i === 21) {
    furnitureImage.style.top = "75vh";
    furnitureImage.style.left = "15vw";
  }else if (i === 22) {
    furnitureImage.style.top = "70vh";
    furnitureImage.style.left = "35vw";
  }else if (i === 23) {
    furnitureImage.style.top = "47vh";
    furnitureImage.style.left = "65vw";
  }else if (i === 24) {
    furnitureImage.style.top = "20vh";
    furnitureImage.style.left = "39vw";
  }else if (i === 25) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "48vw";
  }else if (i === 26) {
    furnitureImage.style.top = "80vh";
    furnitureImage.style.left = "90vw";
  }else if (i === 27) {
    furnitureImage.style.top = "42vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 28) {
    furnitureImage.style.top = "37vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 29) {
    furnitureImage.style.top = "81vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 30) {
    furnitureImage.style.top = "27vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 31) {
    furnitureImage.style.top = "47vh";
    furnitureImage.style.left = "20vw";
  }else if (i === 32) {
    furnitureImage.style.top = "80vh";
    furnitureImage.style.left = "50vw";
  }else if (i === 33) {
    furnitureImage.style.top = "43vh";
    furnitureImage.style.left = "56vw";
  }else if (i === 34) {
    furnitureImage.style.top = "70vh";
    furnitureImage.style.left = "86vw";
  }else if (i === 35) {
    furnitureImage.style.top = "59vh";
    furnitureImage.style.left = "59vw";
  }else if (i === 36) {
    furnitureImage.style.top = "80vh";
    furnitureImage.style.left = "65vw";
  }else if (i === 37) {
    furnitureImage.style.top = "78vh";
    furnitureImage.style.left = "79vw";
  }else if (i === 38) {
    furnitureImage.style.top = "27vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 39) {
    furnitureImage.style.top = "60vh";
    furnitureImage.style.left = "10vw";
  }else if (i === 40) {
    furnitureImage.style.top = "63vh";
    furnitureImage.style.left = "0vw";
  }else if (i === 41) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "70vw";
  }else if (i === 42) {
    furnitureImage.style.top = "20vh";
    furnitureImage.style.left = "3vw";
  }else if (i === 43) {
    furnitureImage.style.top = "46vh";
    furnitureImage.style.left = "7vw";
  }else if (i === 44) {
    furnitureImage.style.top = "16vh";
    furnitureImage.style.left = "39vw";
  }else if (i === 45) {
    furnitureImage.style.top = "49vh";
    furnitureImage.style.left = "9vw";
  }else if (i === 46) {
    furnitureImage.style.top = "19vh";
    furnitureImage.style.left = "59vw";
  }else if (i === 47) {
    furnitureImage.style.top = "9vh";
    furnitureImage.style.left = "79vw";
  }else if (i === 48) {
    furnitureImage.style.top = "73vh";
    furnitureImage.style.left = "2vw";
  }else if (i === 49) {
    furnitureImage.style.top = "79vh";
    furnitureImage.style.left = "5vw";
  }else if (i === 50) {
    furnitureImage.style.top = "60vh";
    furnitureImage.style.left = "12vw";
  }else if (i === 51) {
    furnitureImage.style.top = "49vh";
    furnitureImage.style.left = "62w";
  }else if (i === 52) {
    furnitureImage.style.top = "28vh";
    furnitureImage.style.left = "64vw";
  }else if (i === 53) {
    furnitureImage.style.top = "50vh";
    furnitureImage.style.left = "80vw";
  }else if (i === 54) {
    furnitureImage.style.top = "23vh";
    furnitureImage.style.left = "39vw";
  }else if (i === 55) {
    furnitureImage.style.top = "43vh";
    furnitureImage.style.left = "46vw";
  }else if (i === 56) {
    furnitureImage.style.top = "33vh";
    furnitureImage.style.left = "39vw";
  }else if (i === 57) {
    furnitureImage.style.top = "17vh";
    furnitureImage.style.left = "83vw";
  }else if (i === 58) {
    furnitureImage.style.top = "63vh";
    furnitureImage.style.left = "54vw";
  }else if (i === 59) {
    furnitureImage.style.top = "32vh";
    furnitureImage.style.left = "4vw";
  }else if (i === 60) {
    furnitureImage.style.top = "72vh";
    furnitureImage.style.left = "4vw";
  }else if (i === 61) {
    furnitureImage.style.top = "22vh";
    furnitureImage.style.left = "9vw";
  }else if (i === 62) {
    furnitureImage.style.top = "78vh";
    furnitureImage.style.left = "3vw";
  }else if (i === 63) {
    furnitureImage.style.top = "16vh";
    furnitureImage.style.left = "28vw";
  }else if (i === 64) {
    furnitureImage.style.top = "54vh";
    furnitureImage.style.left = "90vw";
  }else if (i === 65) {
    furnitureImage.style.top = "22vh";
    furnitureImage.style.left = "52vw";
  }else if (i === 66) {
    furnitureImage.style.top = "44vh";
    furnitureImage.style.left = "26vw";
  }else if (i === 67) {
    furnitureImage.style.top = "70vh";
    furnitureImage.style.left = "16vw";
  }else if (i === 68) {
    furnitureImage.style.top = "66vh";
    furnitureImage.style.left = "38vw";
  }else if (i === 69) {
    furnitureImage.style.top = "35vh";
    furnitureImage.style.left = "47vw";
  }else if (i === 70) {
    furnitureImage.style.top = "26vh";
    furnitureImage.style.left = "82vw";
  }else if (i === 71) {
    furnitureImage.style.top = "46vh";
    furnitureImage.style.left = "17vw";
  }else if (i === 72) {
    furnitureImage.style.top = "63vh";
    furnitureImage.style.left = "27vw";
  }else if (i === 73) {
    furnitureImage.style.top = "65vh";
    furnitureImage.style.left = "27vw";
  }else if (i === 74) {
    furnitureImage.style.top = "73vh";
    furnitureImage.style.left = "67vw";
  }else if (i === 75) {
    furnitureImage.style.top = "19vh";
    furnitureImage.style.left = "37vw";
  }else if (i === 76) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "27vw";
  }else if (i === 77) {
    furnitureImage.style.top = "61vh";
    furnitureImage.style.left = "62vw";
  }else if (i === 78) {
    furnitureImage.style.top = "41vh";
    furnitureImage.style.left = "67vw";
  }else if (i === 79) {
    furnitureImage.style.top = "62vh";
    furnitureImage.style.left = "47vw";
  }else if (i === 80) {
    furnitureImage.style.top = "37vh";
    furnitureImage.style.left = "68vw";
  }else if (i === 81) {
    furnitureImage.style.top = "28vh";
    furnitureImage.style.left = "49vw";
  }else if (i === 82) {
    furnitureImage.style.top = "78vh";
    furnitureImage.style.left = "48vw";
  }else if (i === 83) {
    furnitureImage.style.top = "52vh";
    furnitureImage.style.left = "68vw";
  }else if (i === 84) {
    furnitureImage.style.top = "57vh";
    furnitureImage.style.left = "68vw";
  }else if (i === 85) {
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "18vw";
  }else if (i === 86) {
    furnitureImage.style.top = "25vh";
    furnitureImage.style.left = "68vw";
  }


document.body.appendChild(furnitureImage);
  });
}


// moderns.forEach((modern, i) => {
// // existing code in which you assign class name and src of the img
// var furnitureImage = document.createElement("img");
// furnitureImage.classList.add("furniture-image");
// furnitureImage.src = modern.fields.images[0].url;
// // set position of each image based on index value
// if (i === 0) {
// furnitureImage.style.top = 10px;
// furnitureImage.style.left = 0;
// } else if (i === 1) {
// furnitureImage.style.top = 10px;
// furnitureImage.style.left = 40px;
// } else if (i === 2) {
// // insanity
// }
// document.body.appendChild(furnitureImage);
// });




document.getElementById("aluminium").addEventListener("click", function() {
  alert("Aluminium!");
});

document.getElementById("cotton").addEventListener("click", function() {
  alert("cotton!");
});
document.getElementById("fabric").addEventListener("click", function() {
  alert("There are many types of fabric, including Polyester, Silk, Suede, Velvet, and etc,. Depending on the type of fabric, it takes from minumum 2 weeks to maximum 200 years to decompose. ");
});




//DRAGGABLE
// var draggable;
//
// function move(id){
//   var element = document.getElementById("circle");
//   element.style.position = "absolute"
//   element.onmousedown = function(){
//     draggable = element;
//   }
// }
//
// document.onmouseup = function(e){
//   draggable = null;
// }
// document.onmousemove = function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//
//   draggable.style.left = x + "px"
//   draggable.style.top = y + "px"
// }
//ENDS HERE
