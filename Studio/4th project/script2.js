const HANGUL_MAP = [
  {
    match: "r",
    character: "ㄱ",
    pronunciation: "g/k"
  },
  {
    match: "s",
    character: "ㄴ",
    pronunciation: "n"
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
    match: "tk",
    character: "사",
    pronunciation: "sa"
  },
  {
    match: "tkd",
    character: "상",
    pronunciation: "sang"
  },
  {
    match: "dl",
    character: "이",
    pronunciation: "i"
  },
  {
    match: "dk",
    character: "아",
    pronunciation: "ah"
  },
  {
    match: "d",
    character: "ㅇ",
    pronunciation: "ng"
  },
	{
		match: "p",
		character: "ㅔ",
		pronunciation: "eh"
	},
	{
		match: "s",
		character: "ㄴ",
		pronunciation: "n"
	},
	{
		match: "f",
		character: "ㄹ",
		pronunciation: "r"
	},
	{
		match: "h",
		character: "ㅗ",
		pronunciation: "oh"
	},
	{
		match: "k",
		character: "ㅏ",
		pronunciation: "ah"
	},
	{
		match: "c",
		character: "ㅊ",
		pronunciation: "ch"
	},
	{
		match: "ch",
		character: "초",
		pronunciation: "??"
	},
	{
		match: "sh",
		character: "노",
		pronunciation: "??"
	},
	{
		match: "th",
		character: "소",
		pronunciation: "??"
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

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 82) {
    document.getElementById('ㄱ').play();
  }});
