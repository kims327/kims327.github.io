document.addEventListener("keydown", function(event){

  // Print out the event details to the console
  console.log(event);
  // Print out what key we just pressed
  console.log("what did we just press:")
  console.log(event.key)

  // Check if the key we pressed is the Enter key
  // If so, turn our page blue
  if (event.key == "k"){
    document.getElementById("result").innerHTML = "ㅏ";
  }
	if (event.key == "k"){
		document.getElementById("pronunciation").innerHTML = "a";
	}
	if (event.key == "a"){
		document.getElementById("result").innerHTML = "ㅁ";
	}
	if (event.key == "a"){
		document.getElementById("pronunciation").innerHTML = "m";
	}
	if (event.key == "s"){
    document.getElementById("result").innerHTML = "ㅁ";
  }
})

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 83) {
		document.getElementById('ㄴ').play();
	}
	});
