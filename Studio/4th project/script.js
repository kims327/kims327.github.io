const HANGUL_MAP = [
  {
    match: "r",
    character: "ㄱ",
    pronunciation: "g/k"
  },
  {
    match: "",
    character: "ㄲ",
    pronunciation: "kk"
  },
  {
    match: "s",
    character: "ㄴ",
    pronunciation: "n"
  },

  {
    match: "il",
    character: "ㅒ",
    pronunciation: "yae"
  },
  {
    match: "e",
    character: "ㄷ",
    pronunciation: "d"
  },
  {
    match: "f",
    character: "ㄹ",
    pronunciation: "r/l"
  },
  {
    match: "a",
    character: "ㅁ",
    pronunciation: "m"
  },
	{
		match: "t",
		character: "ㅅ",
		pronunciation: "s"
	},
  {
    match: "d",
    character: "ㅇ",
    pronunciation: "ng"
  },
  {
    match: "w",
    character: "ㅈ",
    pronunciation: "j"
  },
  {
		match: "c",
		character: "ㅊ",
		pronunciation: "ch"
	},
  {
    match: "z",
    character: "ㅋ",
    pronunciation: "k"
  },
  {
    match: "x",
    character: "ㅌ",
    pronunciation: "t"
  },
  {
    match: "v",
    character: "ㅍ",
    pronunciation: "p"
  },
  {
    match: "g",
    character: "ㅎ",
    pronunciation: "h"
  },
  {
    match: "k",
    character: "ㅏ",
    pronunciation: "a"
  },
  {
    match: "i",
    character: "ㅑ",
    pronunciation: "ya"
  },
  {
    match: "j",
    character: "ㅓ",
    pronunciation: "eo"
  },
  {
    match: "u",
    character: "ㅕ",
    pronunciation: "yeo"
  },
  {
		match: "h",
		character: "ㅗ",
		pronunciation: "o"
	},
  {
		match: "y",
		character: "ㅛ",
		pronunciation: "yo"
	},
  {
		match: "n",
		character: "ㅜ",
		pronunciation: "u"
	},
  {
		match: "b",
		character: "ㅠ",
		pronunciation: "yu"
	},
  {
		match: "m",
		character: "ㅡ",
		pronunciation: "eu"
	},
  {
		match: "l",
		character: "ㅣ",
		pronunciation: "i"
	},
	{
		match: "p",
		character: "ㅔ",
		pronunciation: "eh"
	},
  {
    match: "pp",
    character: "ㅖ",
    pronunciation: "eh"
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
  if (e.keyCode == 82) {
    document.getElementById('ㄱ').play();
  }
  if (e.keyCode == 49) {
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
