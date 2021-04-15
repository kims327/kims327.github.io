console.log("airtable demo");

var Airtable = require('airtable');
console.log(Airtable);
var base = new Airtable({
	apiKey: 'key9H7DTqrYaav7cD'
}).base('appqaRl162WxLJLsA');


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
// furnitureImage.style.filter = "drop-shadow(10px 15px 10px red)"
//


function showModerns() {
  console.log("showModerns()");
  moderns.forEach((modern, i) => {

    // var container = document.createElement("div");

    var furnitureImage = document.createElement("img");
    furnitureImage.classList.add("furniture-image");
    furnitureImage.src = modern.fields.images[0].url;



//hover
// furnitureImage.addEventListener("mouseover", function(){
//   furnitureImage.style.filter = "drop-shadow(30px 10px 4px #4444dd);"
// })


//code from Janine
    // // add each fruit as a grid-item to the grid-container
    // var fruitContainer = document.createElement("div");
    // fruitContainer.classList.add("grid-item");
    // document.querySelector(".grid-container").append(fruitContainer);
    //
    // // add fruit name to grid-container
    // var fruitName = document.createElement("h1");
    // fruitName.classList.add("fruit-name");
    // fruitName.innerText = fruit.fields.fruit_name;
    // fruitContainer.append(fruitName);
    //
    // // add fruit image to grid-container
    // var fruitImage = document.createElement("img");
    // fruitName.classList.add("fruit-image");
    // fruitImage.src = fruit.fields.fruit_image[0].url;
    // fruitContainer.append(fruitImage);

    //I want these information to show up once you click on the images
    // var furnitureName = document.createElement("div");
    // furnitureName.classList.add("furniture-name");
    // furnitureName.innerText = modern.fields.name;
    // document.body.appendChild(furnitureName);
    // furnitureName.style.display = "none"



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
    furnitureImage.style.top = "26vh";
    furnitureImage.style.left = "3vw";
  }else if (i === 19) {
    furnitureImage.style.top = "40vh";
    furnitureImage.style.left = "15vw";
  }else if (i === 20) {
    furnitureImage.style.top = "10vh";
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
    furnitureImage.style.top = "74vh";
    furnitureImage.style.left = "86vw";
  }else if (i === 27) {
    furnitureImage.style.top = "42vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 28) {
    furnitureImage.style.top = "37vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 29) {
    furnitureImage.style.top = "78vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 30) {
    furnitureImage.style.top = "27vh";
    furnitureImage.style.left = "30vw";
  }else if (i === 31) {
    furnitureImage.style.top = "47vh";
    furnitureImage.style.left = "20vw";
  }else if (i === 32) {
    furnitureImage.style.top = "75vh";
    furnitureImage.style.left = "50vw";
  }else if (i === 33) {
    furnitureImage.style.top = "43vh";
    furnitureImage.style.left = "56vw";
  }else if (i === 34) {
    furnitureImage.style.top = "70vh";
    furnitureImage.style.left = "80vw";
  }else if (i === 35) {
    furnitureImage.style.top = "59vh";
    furnitureImage.style.left = "59vw";
  }else if (i === 36) {
    furnitureImage.style.top = "75vh";
    furnitureImage.style.left = "65vw";
  }else if (i === 37) {
    furnitureImage.style.top = "78vh";
    furnitureImage.style.left = "74vw";
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
    furnitureImage.style.top = "10vh";
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
    furnitureImage.style.top = "77vh";
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
    furnitureImage.style.left = "75vw";
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
    furnitureImage.style.left = "50vw";
  }else if (i === 59) {
    furnitureImage.style.top = "32vh";
    furnitureImage.style.left = "4vw";
  }else if (i === 60) {
    furnitureImage.style.top = "72vh";
    furnitureImage.style.left = "4vw";
  }else if (i === 61) {
    furnitureImage.style.top = "22vh";
    furnitureImage.style.left = "13vw";
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
    furnitureImage.style.left = "63vw";
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
    furnitureImage.style.top = "8vh";
    furnitureImage.style.left = "18vw";
  }else if (i === 86) {
    furnitureImage.style.top = "25vh";
    furnitureImage.style.left = "68vw";
  }


makeDraggable(furnitureImage);



  furnitureImage.addEventListener("dblclick", () => {
    backgroundLayer({
      image: modern.fields.images[0].url,
      name: modern.fields.name,
      designer: modern.fields.company,
      info: modern.fields.all_materials
    });
  });

var furnitureMaterial = modern.fields.material;
furnitureMaterial.forEach(function(material){
  furnitureImage.classList.add(material)

})

//add event listener to filter

var filterAluminium = document.querySelector('.aluminium');
filterAluminium.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Aluminium")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterCotton = document.querySelector('.cotton');
filterCotton.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Cotton")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterFabric = document.querySelector('.fabric');
filterFabric.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Fabric")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterGlass = document.querySelector('.glass');
filterGlass.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Glass")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterLeather = document.querySelector('.leather');
filterLeather.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Leather")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterMetal = document.querySelector('.metal');
filterMetal.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Metal")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterPlastic = document.querySelector('.plastic');
filterPlastic.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Plastic")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterSteel = document.querySelector('.steel');
filterSteel.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Steel")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)";

  }
})

var filterStone = document.querySelector('.stone');
filterStone.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Stone")){
    furnitureImage.style.filter = "brightness(0%)";
    // furnitureImage.style.filter = "drop-shadow(10px 15px 10px red)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

var filterWood = document.querySelector('.wood');
filterWood.addEventListener("click", function(){

  if (furnitureImage.classList.contains("Wood")){
    furnitureImage.style.filter = "brightness(0%)"
  } else {
    furnitureImage.style.filter = "brightness(100%)"
  }
})

document.querySelector(".wrapper").appendChild(furnitureImage);


  });
}


function makeDraggable(dragItem) {
  const container = document.body;
  let active = false;
  let initialX;
  let initialY;
  let currentX;
  let currentY;
  let xOffset = 0;
  let yOffset = 0;
  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);
  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }
    if (event.target === dragItem) {
      active = true;
      dragItem.style.zIndex = zIndex++;
    }
  }
  function dragEnd(event) {
    initialX = currentX;
    initialY = currentY;
    active = false;
  }
  function drag(event) {
  if (active && !expanded){
      event.preventDefault();
      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }
      xOffset = currentX;
      yOffset = currentY;
      dragItem.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
  }
}
let zIndex = 0;

//clickable
let expanded = false;

// function backgroundLayer(filteredImage){
//   filteredImage.addEventListener("dblclick", (event) => {
//     expanded = true;
//     var layer = document.createElement("div");
//     var left = event.target.style.left;
//     var filter = event.target.style.filter;
//     var top = event.target.style.top;
//
//     layer.addEventListener("click", (event) => {
//       expanded = false;
//       event.target.remove();
//       filteredImage.style.left = left;
//       filteredImage.style.top = top;
//       filteredImage.style.transform = "";
//       filteredImage.style.filter = filter;
//     })
//     layer.classList.add("layer");
//     layer.style.zIndex = zIndex++;
//
// event.target.style.left = "";
// event.target.style.top = "";
// event.target.style.transform = "translate(calc(50vw - 50%), calc(50vh - 180%))";
//     event.target.style.filter = "";
//     event.target.style.zIndex = zIndex++;
//
//     document.body.append(layer);
//
//   })
// }

function backgroundLayer({ image, name, designer, info }) {
  expanded = true;

  // create elements
  var paragraph = document.createElement("p");
  paragraph.append(info);

  var subheading = document.createElement("h2");
  subheading.append(designer);

  var heading = document.createElement("h1");
   heading.append(name);

   var textContainer = document.createElement("div");
   textContainer.classList.add("information-text");
   textContainer.append(heading, subheading, paragraph);

   var img = document.createElement("img");
   img.src = image;
   img.alt = "";

   var imageContainer = document.createElement("div");
   imageContainer.classList.add("information-image");
   imageContainer.append(img);

   var information = document.createElement("article");
   information.classList.add("information");

   var layer = document.createElement("div");
   layer.classList.add("layer");

   layer.style.zIndex = zIndex++;

   layer.addEventListener("click", (event) => {
     if (event.target === textContainer || event.target.parentNode === textContainer) {
       return;
     }

     expanded = false;
     layer.remove();
   });

   information.append(imageContainer, textContainer);
   layer.appendChild(information);
   document.body.appendChild(layer);
 }




document.getElementsByClassName('aluminium')[0].onclick = function(){
  alert("Aluminum is one of the most widely recycled materials. The aluminum can be recycled and reused in the creation of another product. This cycle allows the aluminum and steel to remain a permanently accessible material through recycling.");
}
document.getElementsByClassName('cotton')[0].onclick = function(){
  alert("Cotton can be recycled. However, when we choose to recycle cotton, it will put the material through a less than perfect process. Unlike paper, which can be recycled into equal to or less than quality products, cotton will always lose its quality when recycled.");
}
document.getElementsByClassName('fabric')[0].onclick = function(){
  alert("There are many types of fabrics, including Polyester, Silk, Suede, Velvet, and etc,. Depending on the type of fabric, it takes from minumum 2 weeks to maximum 200 years to decompose.");
}
document.getElementsByClassName('glass')[0].onclick = function(){
  alert("Glass is a sustainable, fully recyclable material which provides great environmental benefits such as contributing to mitigating climate change and saving precious natural resources.");
}
document.getElementsByClassName('metal')[0].onclick = function(){
  alert("Metals originate from the naturally occurring solid material, ore. And luckily, almost all metals can be recycled. ");
}
document.getElementsByClassName('leather')[0].onclick = function(){
  alert("Conventional leather is heavily criticized for the environmental impact of the tanning process.  But leather can also be eco-friendly. However, leather could never be an animal-friendly product.");
}
document.getElementsByClassName('plastic')[0].onclick = function(){
  alert("All plastics are made from polymers, which are long chains of carbon or hydrogen atoms which originate from petroleum or natural gases. These are not renewable energy sources, which means plastic is not a sustainable material. It can take hundreds or even thousands of years for plastic to break down so the environmental damage is long-lasting.");
}
document.getElementsByClassName('steel')[0].onclick = function(){
  alert("Steel is not only environmentally conscious but economically strategic in its inherent longevity and durability. Steel is the most recycled material in the world. Steel can be recycled and reused in the creation of another product. This cycle allows the aluminum and steel to remain a permanently accessible material through recycling.");
}
document.getElementsByClassName('stone')[0].onclick = function(){
  alert("Stone is recyclable and has the potential to serve many different uses and purposes over its lifetime.  Environmentally, utilizing recycled stone can eliminate the energy, water, and other resources needed to generate new products from virgin or raw material sources, ultimately reducing or avoiding impacts to ecosystems and resource supplies.");
}
document.getElementsByClassName('wood')[0].onclick = function(){
  alert("Wood such as clean timber, dimensional lumber, stumps and limbs are readily recyclable. Wood that has been treated (with creosote, for example), painted, stained or contaminated is not appropriate for recycling and should be properly disposed of. Reusing and recycling wood reduces the need to cut down trees.");
}

// document.getElementById("aluminium").addEventListener("click", function() {
//   alert("Aluminium!");
// });
//
// document.getElementById("cotton").addEventListener("click", function() {
//   alert("cotton!");
// });
// document.getElementById("fabric").addEventListener("click", function() {
//   alert("There are many types of fabric, including Polyester, Silk, Suede, Velvet, and etc,. Depending on the type of fabric, it takes from minumum 2 weeks to maximum 200 years to decompose. ");
// });
