console.log('hi')
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){



    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";

    //Clear the reading result from last time
    result.innerHTML = "";

    // Loop through 4 times
    for (let i = 0; i < 1000; i++){

      // Print the number we're at in the loop
      console.log(i);

      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);

      // Create a new HTML image element for the card
      let selectedCard = document.createElement("div");

      // If letter is any of these, use the devil card
      if (["r"].includes(letter)){
        selectedCard.innerHTML = "ㄱ";
      }
      // if (["R"].includes(letter)){
      //   selectedCard.innerHTML = "ㄲ";
      // }
      if (["s"].includes(letter)){
        selectedCard.innerHTML = "ㄴ";
      }

      if (["e"].includes(letter)){
        selectedCard.innerHTML = "ㄷ";
      }
      // if (["E"].includes(letter)){
      //   selectedCard.innerHTML = "ㄸ";
      // }
      if (["f"].includes(letter)){
        selectedCard.innerHTML = "ㄹ";
      }
      if (["a"].includes(letter)){
        selectedCard.innerHTML = "ㅁ";
      }
      if (["q"].includes(letter)){
        selectedCard.innerHTML = "ㅂ";
      }
      // if (["Q"].includes(letter)){
      //   selectedCard.innerHTML = "ㅃ";
      // }
      if (["t"].includes(letter)){
        selectedCard.innerHTML = "ㅅ";
      }
      // if (["T"].includes(letter)){
      //   selectedCard.innerHTML = "ㅆ";
      // }
      if (["d"].includes(letter)){
        selectedCard.innerHTML = "ㅇ";
      }
      if (["w"].includes(letter)){
        selectedCard.innerHTML = "ㅈ";
      }
      // if (["W"].includes(letter)){
      //   selectedCard.innerHTML = "ㅉ";
      // }
      if (["c"].includes(letter)){
        selectedCard.innerHTML = "ㅊ";
      }

      if (["z"].includes(letter)){
        selectedCard.innerHTML = "ㅋ";
      }
      if (["x"].includes(letter)){
        selectedCard.innerHTML = "ㅌ";
      }
      if (["v"].includes(letter)){
        selectedCard.innerHTML = "ㅍ";
      }
      if (["g"].includes(letter)){
        selectedCard.innerHTML = "ㅎ";
      }
      if (["k"].includes(letter)){
        selectedCard.innerHTML = "ㅏ";
      }
      if (["i"].includes(letter)){
        selectedCard.innerHTML = "ㅑ";
      }
      if (["j"].includes(letter)){
        selectedCard.innerHTML = "ㅓ";
      }
      if (["u"].includes(letter)){
        selectedCard.innerHTML = "ㅕ";
      }
      if (["h"].includes(letter)){
        selectedCard.innerHTML = "ㅗ";
      }
      if (["y"].includes(letter)){
        selectedCard.innerHTML = "ㅛ";
      }
      if (["n"].includes(letter)){
        selectedCard.innerHTML = "ㅜ";
      }
      if (["b"].includes(letter)){
        selectedCard.innerHTML = "ㅠ";
      }
      if (["m"].includes(letter)){
        selectedCard.innerHTML = "ㅡ";
      }
      if (["l"].includes(letter)){
        selectedCard.innerHTML = "ㅣ";
      }
      if (["o"].includes(letter)){
        selectedCard.innerHTML = "ㅐ";
      }
      if (["O"].includes(letter)){
        selectedCard.innerHTML = "ㅒ";
      }
      if (["p"].includes(letter)){
        selectedCard.innerHTML = "ㅔ";
      }
      if (["P"].includes(letter)){
        selectedCard.innerHTML = "ㅖ";
      }


      result.appendChild(selectedCard);

    }

  }
})

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 82) {
    document.getElementById('ㄱ').play();
  }
  if (e.keyCode == 76) {
    document.getElementById('ㄲ').play();
  }
  if (e.keyCode == 83) {
    document.getElementById('ㄴ').play();
  }
  if (e.keyCode == 69) {
    document.getElementById('ㄷ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㄸ').play();
  // }
  if (e.keyCode == 70) {
    document.getElementById('ㄹ').play();
  }
  if (e.keyCode == 65) {
    document.getElementById('ㅁ').play();
  }
  if (e.keyCode == 81) {
    document.getElementById('ㅂ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㅃ').play();
  // }
  if (e.keyCode == 84) {
    document.getElementById('ㅅ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㅆ').play();
  // }
  if (e.keyCode == 68) {
    document.getElementById('ㅇ').play();
  }
  if (e.keyCode == 87) {
    document.getElementById('ㅈ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㅉ').play();
  // }
  if (e.keyCode == 67) {
    document.getElementById('ㅊ').play();
  }
  if (e.keyCode == 90) {
    document.getElementById('ㅋ').play();
  }
  if (e.keyCode == 88) {
    document.getElementById('ㅌ').play();
  }
  if (e.keyCode == 86) {
    document.getElementById('ㅍ').play();
  }
  if (e.keyCode == 71) {
    document.getElementById('ㅎ').play();
  }
  if (e.keyCode == 75) {
    document.getElementById('ㅏ').play();
  }
  if (e.keyCode == 73) {
    document.getElementById('ㅑ').play();
  }
  if (e.keyCode == 74) {
    document.getElementById('ㅓ').play();
  }
  if (e.keyCode == 85) {
    document.getElementById('ㅕ').play();
  }
  if (e.keyCode == 72) {
    document.getElementById('ㅗ').play();
  }
  if (e.keyCode == 89) {
    document.getElementById('ㅛ').play();
  }
  if (e.keyCode == 78) {
    document.getElementById('ㅜ').play();
  }
  if (e.keyCode == 66) {
    document.getElementById('ㅠ').play();
  }
  if (e.keyCode == 77) {
    document.getElementById('ㅡ').play();
  }
  if (e.keyCode == 79) {
    document.getElementById('ㅐ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㅒ').play();
  // }
  if (e.keyCode == 80) {
    document.getElementById('ㅔ').play();
  }
  // if (e.keyCode == 76) {
  //   document.getElementById('ㅖ').play();
  // }
  if (e.keyCode == 76) {
    document.getElementById('ㅣ').play();
  }
});


// $(document).keydown(function(e){
//     if (e.keyCode == 37) {
//        document.getElementById('sound1').play();
//        return false;
//     }
// });


$( ".header1" ).click(function() {
  $( ".info1" ).toggle( "slow" );
});

$( ".header2" ).click(function() {
  $( ".info2" ).toggle( "slow" );
});
