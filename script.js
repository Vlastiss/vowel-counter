function calculate() {
  const word = document.getElementById("word").value.toLowerCase();

  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (/^[aeiou]$/i.test(word[i])) {
      counter ++; 
    } 
  }
  alert(`Your word has ${counter} vowels.`);
}

const calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener("click", calculate);

