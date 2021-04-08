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
    furnitureImage.style.top = "20vh";
    furnitureImage.style.left = "10vw";
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
    furnitureImage.style.top = "10vh";
    furnitureImage.style.left = "40vw";
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
    furnitureImage.style.left = "10vw";
  }else if (i === 17) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "20vw";
  }else if (i === 18) {
    furnitureImage.style.top = "30vh";
    furnitureImage.style.left = "3vw";
  }else if (i === 19) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "15vw";
  }else if (i === 21) {
    furnitureImage.style.top = "75vh";
    furnitureImage.style.left = "5vw";
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
    furnitureImage.style.top = "70vh";
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
    furnitureImage.style.left = "59vw";
  }else if (i === 45) {
    furnitureImage.style.top = "79vh";
    furnitureImage.style.left = "29vw";
  }

    // var furnitureName = document.createElement("h1");
    // furnitureName.innerText = modern.fields.company;
    // document.body.append(furnitureName);
    //
    // var designer = document.createElement("p");
    // designer.innerText = modern.fields.name;
    // document.body.append(designer);
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
