var tenseList = ["I", "You", "You (formal)", "He", "She", "We", "They", "You all"];

var verbList = ["eat", "drink", "have", "walk", "run", "read", "see", "need"];

var randomTense = tenseList[Math.floor(Math.random() * tenseList.length)];

var randomVerb = verbList[Math.floor(Math.random() * verbList.length)];


function getTense() {
  document.getElementById("tense").innerHTML = randomTense;
}

function getVerb() {
  document.getElementById("verb").innerHTML = randomVerb;
}

function reset() {
  document.getElementById("tense").innerHTML = "";
  document.getElementById("verb").innerHTML = "";
}

function getQuestion() {
  
}
