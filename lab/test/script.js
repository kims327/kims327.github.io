//
// function makeSandwich(ham, lettuce, bread){
//     let sandwich = ham+lettuce+bread;
//
//     return ;
// }
    console.log('hi')

    new fullpage('#fullpage', {
      sectionsColor: ['white']
    });

// let meat1 = "ham";
// let veg1 = "lettuce";
// let bread1 = "wheat";
//
// function makeSandwich(meat, vegetable, bread){
//     let sandwich = meat + vegetable + bread;
//     return sandwich;
// }
// let hamSandwich = makeSandwich(meat1, veg1, bread1);
//
// document.getElementById("one").innerHTML = makeSandwich(meat1, veg1, bread1);
//
//     console.log('hi')


// yogurt smoothie
    let yogurt1 = "1 cup";
    let berry1 = "1 cup";
    let banana1 = "1";
    let juice1 = "1/4 cup";

    function makeSmoothie(yogurt, strawberries, banana, orangeJuice){
        let smoothie = yogurt + strawberries + banana + orangeJuice;
        return smoothie;
    }
    let fruitSmoothie = makeSmoothie(yogurt1, berry1, banana1, juice1);

    document.getElementById("yogurt").innerHTML = yogurt1;
    document.getElementById("berry").innerHTML = berry1;
    document.getElementById("banana").innerHTML = banana1;
    document.getElementById("juice").innerHTML = juice1;

// banana Chips
let bananaSlice1 = "1/8-inch-thick";
let heat1 = "200";
let hour1 = "2 to 3";

function makeBananaChips(banana, oven, hour){
    let bananaChips = banana + oven + hour;
    return bananaChips;
}
let bananaChips2 = makeBananaChips(bananaSlice1, heat1, hour1);

document.getElementById("banana_slice").innerHTML = bananaSlice1;
document.getElementById("heat").innerHTML = heat1;
document.getElementById("time").innerHTML = hour1;


// caramel popcorn
let butter1 = "1/3 cup";
let honey1 = "1 tablespoon";
let salt1 = "a pinch";
let popcorn1 = "12 cups";
let pecan1 = "1 cup";
let min1 = "15 minutes";
let heat2 = "325";


function makePopcorn(butter, honey, salt, popcorn, pecan, minute, heat){
    let cPopcorn = butter + honey + salt + popcorn + pecan + minute + heat;
    return cPopcorn;
}
let caramelPopcorn = makePopcorn(butter1, honey1, salt1, popcorn1, pecan1, min1, heat2);

document.getElementById("butter").innerHTML = butter1;
document.getElementById("honey").innerHTML = honey1;
// document.getElementById("honey").style.color = "red";
document.getElementById("salt").innerHTML = salt1;
document.getElementById("popcorn").innerHTML = popcorn1;
document.getElementById("pecan").innerHTML = pecan1;
document.getElementById("min").innerHTML = min1;
document.getElementById("heat2").innerHTML = heat2;


$(document).ready(function(){
  $("span").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
  });
});
