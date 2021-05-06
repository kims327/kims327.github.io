const HANGUL_MAP = [
  {
    match: "a",
    character: "ㅏ",
    pronunciation: "ah"
  },
  // {
  //   match: "",
  //   character: "ㄲ",
  //   pronunciation: "kk"
  // },
  {
    match: "b",
    character: "ㅂ",
    pronunciation: "b"
  },

  {
    match: "c",
    character: "ㅊ",
    pronunciation: "ch"
  },
  {
    match: "d",
    character: "ㄷ",
    pronunciation: "d"
  },
  {
    match: "e",
    character: "ㅡ, ㅓ, ㅔ",
    pronunciation: "eu, eo, e"
  },
  {
    match: "f",
    character: "",
    pronunciation: ""
  },
	{
		match: "g",
		character: "ㄱ",
		pronunciation: "g"
	},
  {
    match: "h",
    character: "ㅎ",
    pronunciation: "h"
  },
  {
    match: "i",
    character: "ㅣ",
    pronunciation: "i"
  },
  {
		match: "j",
		character: "ㅈ, ㅉ",
		pronunciation: "j, jj"
	},
  {
    match: "k",
    character: "ㅋ, ㄲ",
    pronunciation: "k, kk"
  },
  {
    match: "l",
    character: "ㄹ",
    pronunciation: "l"
  },
  {
    match: "m",
    character: "ㅁ",
    pronunciation: "m"
  },
  {
    match: "n",
    character: "ㄴ, ㅇ",
    pronunciation: "n, ng"
  },
  {
    match: "o",
    character: "ㅗ, ㅚ",
    pronunciation: "o, oe"
  },
  {
    match: "p",
    character: "ㅍ, ㅃ",
    pronunciation: "p, pp"
  },
  {
    match: "q",
    character: "",
    pronunciation: ""
  },
  {
    match: "r",
    character: "ㄹ",
    pronunciation: "r"
  },
  {
		match: "s",
		character: "ㅅ, ㅆ",
		pronunciation: "s, ss"
	},
  {
		match: "t",
		character: "ㅌ, ㄸ",
		pronunciation: "t, tt"
	},
  {
		match: "u",
		character: "ㅜ",
		pronunciation: "u"
	},
  {
		match: "v",
		character: "",
		pronunciation: ""
	},
  {
		match: "w",
		character: "ㅘ, ㅙ, ㅝ, ㅞ, ㅟ",
		pronunciation: "wa, wae, wo, we, wi"
	},
  {
		match: "x",
		character: "",
		pronunciation: ""
	},
	{
		match: "y",
		character: "ㅑ, ㅕ, ㅛ, ㅠ, ㅒ, ㅖ",
		pronunciation: "ya, yeo, yo, yu, yae, ye"
	},
  {
    match: "z",
    character: "",
    pronunciation: ""
  }
];

const cache = {
  lastMatchedLetter: null,
  typedLetters: [],
  blocks: []
};

for (let i = 96; i <= 122; i++) {
  window.addEventListener("keydown", handleAlphaKey(i));
}
window.addEventListener("keydown", handleSpacebar);
window.addEventListener("keydown", handleDelete);
window.addEventListener("keydown", handleBackspace);

function handleAlphaKey(keyCode) {
  return function(event) {
    if (event.key === String.fromCharCode(keyCode)) {
      cache.typedLetters.push(event.key);
      if (!HANGUL_MAP.map(i => i.match).includes(cache.typedLetters.join(""))) {
        clearArray(cache.typedLetters);
        cache.lastMatchedLetter = null;
        cache.typedLetters.push(event.key);
      }
      appendCharacterBlock();
    }
  };
}

function handleSpacebar(event) {
  if (event.key === " ") {
    clearArray(cache.typedLetters);
    cache.lastMatchedLetter = null;
    appendCharacterBlock();
  }
}

function handleDelete(event) {
  if (event.key === "Delete") {
    clearArray(cache.typedLetters);
    cache.lastMatchedLetter = null;
    try {
      cache.blocks.pop().remove();
    } catch (e) {
      return;
    }
  }
}

function handleBackspace(event) {
  if (event.key === "Backspace") {
    cache.typedLetters.pop();
    try {
      cache.blocks.pop().remove();
    } catch (e) {
      return;
    }

    if (cache.lastMatchedLetter?.slice(0, -2).length > 0) {
      cache.lastMatchedLetter = cache.lastMatchedLetter.slice(0, -2);
    } else {
      cache.lastMatchedLetter = null;
    }

    if (cache.typedLetters.length > 0) appendCharacterBlock();
  }
}

function appendCharacterBlock(target = document.getElementById("root")) {
  const char = findMatchingChar(cache.typedLetters.join(""), HANGUL_MAP);
  console.log(char);
  cache.lastMatchedLetter = char.match;
  const block = createCharacterBlock(char.character, char.pronunciation);

  if (typeof char.character !== "string" || !"tagName" in block) {
    return;
  }

  if (
    cache.blocks.length > 0 &&
    cache.typedLetters.length > 1 &&
    cache.typedLetters.join("") === cache.lastMatchedLetter
  ) {
    cache.blocks[cache.blocks.length - 1] = block;
  } else {
    cache.blocks.push(block);
  }

  clear(target);
  target.append(...cache.blocks);
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function findMatchingChar(input, dictionary) {
  if (input.length === 0 || typeof input !== "string") {
    // return a blank string if last input is blank (i.e. spacebar)
    return {
      match: null,
      character: "",
      pronunciation: ""
    };
  }

  for (let i = 0; i < dictionary.length; i++) {
    if (
      input === dictionary[i].match &&
      !cache.lastMatchedLetter?.includes(dictionary[i].match)
    ) {
      return {
        match: dictionary[i].match,
        character: dictionary[i].character,
        pronunciation: dictionary[i].pronunciation
      };
    }
  }

  return {
    match: null,
    character: null,
    pronunciation: null
  };
}

function clearArray(array) {
  while (array.length > 0) {
    array.pop();
  }
}

function clear(target = document.getElementById("root")) {
  while (target.childNodes.length > 0) {
    target.removeChild(target.firstChild);
  }
}

function createCharacterBlock(character, pronunciation) {
  if (typeof character !== "string") return;

  const block = document.createElement("figure");
  block.className = "block";
  const c = document.createElement("span");
  c.className = "big";
  c.textContent = character;
  const p = document.createElement("figcaption");
  p.textContent = pronunciation;

  block.append(c, p);
  return block;
}
//
// document.addEventListener('keydown', function(e) {
//   if (e.keyCode == 82) {
//     document.getElementById('ㄱ').play();
//   }});

document.addEventListener('keyup', function(e) {

  if (e.keyCode == 65) {
    document.getElementById('a').play();
  }
  if (e.keyCode == 66) {
    document.getElementById('b').play();
  }
  if (e.keyCode == 67) {
    document.getElementById('c').play();
  }
  if (e.keyCode == 68) {
    document.getElementById('d').play();
  }
  if (e.keyCode == 69) {
    document.getElementById('e').play();
  }
  if (e.keyCode == 71) {
    document.getElementById('g').play();
  }
  if (e.keyCode == 72) {
    document.getElementById('h').play();
  }
  if (e.keyCode == 73) {
    document.getElementById('i').play();
  }
  if (e.keyCode == 74) {
    document.getElementById('j').play();
  }
  if (e.keyCode == 75) {
    document.getElementById('k').play();
  }
  if (e.keyCode == 76) {
    document.getElementById('l').play();
  }
  if (e.keyCode == 77) {
    document.getElementById('m').play();
  }
  if (e.keyCode == 78) {
    document.getElementById('n').play();
  }
  if (e.keyCode == 79) {
    document.getElementById('o').play();
  }
  if (e.keyCode == 80) {
    document.getElementById('p').play();
  }
  if (e.keyCode == 82) {
    document.getElementById('r').play();
  }
  if (e.keyCode == 83) {
    document.getElementById('s').play();
  }
  if (e.keyCode == 84) {
    document.getElementById('t').play();
  }
  if (e.keyCode == 85) {
    document.getElementById('u').play();
  }
  if (e.keyCode == 87) {
    document.getElementById('w').play();
  }
  if (e.keyCode == 89) {
    document.getElementById('y').play();
  }
});


// $(document).keydown(function(e){
//     if (e.keyCode == 37) {
//        document.getElementById('sound1').play();
//        return false;
//     }
// });

$( ".header1" ).click(function() {
  $( ".info1" ).slideToggle( "slow" );
});
$( ".header2" ).click(function() {
  $( ".info2" ).slideToggle( "slow" );
});


var audio1 = document.getElementById("ga");

function playAudio() {
  audio1.play();
}

var audio2 = document.getElementById("gam");

function playAudio2() {
  audio2.play();
}

var audio3 = document.getElementById("go");

function playAudio3() {
  audio3.play();
}

var audio4 = document.getElementById("doe");

function playAudio4() {
  audio4.play();
}
var audio5 = document.getElementById("ot");

function playAudio5() {
  audio5.play();
}
var audio6 = document.getElementById("gwon");

function playAudio6() {
  audio6.play();
}
var audio7 = document.getElementById("oi");

function playAudio7() {
  audio7.play();
}


const element = document.querySelector('.header1')
const element2 = document.querySelector('.info2')

// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
element2.style.display = "none";
});

const header2 = document.querySelector('.header2')
const one = document.querySelector('.info1')

// always checking if the element is clicked, if so, do alert('hello')
header2.addEventListener("click", () => {
one.style.display = "none";
});
