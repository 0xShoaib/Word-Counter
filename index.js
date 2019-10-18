// Declaration
const word = document.getElementById("words");
const character = document.getElementById("characters");
const space = document.getElementById("spaces");
const line = document.getElementById("lines");
const textarea = document.getElementById("textarea");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const clear = document.getElementById("clear");
let inputValue, numberOfWords, numberOfSpaces, numberOfLines;

textarea.addEventListener("input", e => {
  //Reading Input Value
  inputValue = e.target.value;

  if (inputValue !== null && inputValue !== "") {
    //Checking no. of character
    character.innerHTML = inputValue.length;

    //Checking no. of words
    numberOfWords = inputValue.match(/\w+/g).length;
    word.innerHTML = numberOfWords;

    //Checking no. of spaces
    numberOfSpaces = inputValue.split(" ").length - 1;
    space.innerHTML = numberOfSpaces;

    //Checking no. of lines
    numberOfLines = inputValue.split(/\r\n|\r|\n/).length;
    line.innerHTML = numberOfLines;
  } else {
    character.innerHTML = 0;
    word.innerHTML = 0;
    space.innerHTML = 0;
    line.innerHTML = 0;
  }
});

// Font Weight - Bold
bold.addEventListener("click", () => {
  if (textarea.style.fontWeight === "bolder") {
    textarea.style.fontWeight = "lighter";
  } else {
    textarea.style.fontWeight = "bolder";
  }
});

// Font Style - Italic
italic.addEventListener("click", () => {
  if (textarea.style.fontStyle === "italic") {
    textarea.style.fontStyle = "normal";
  } else {
    textarea.style.fontStyle = "italic";
  }
});

//Clear All Text
clear.addEventListener("click", () => {
  textarea.value = "";
  character.innerHTML = 0;
  word.innerHTML = 0;
  space.innerHTML = 0;
  line.innerHTML = 0;
});
