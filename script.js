function guessingGame(){
  
  const guessingDom = document.getElementById("guessing");
  const playingDom  = document.getElementById("playing");
  const finalDom    = document.getElementById("final");
  const guessDom    = document.getElementById("guess");
  const triesDom    = document.getElementById("tries");
  const hintDom     = document.getElementById("hint");
  const score       = document.getElementById("score");
  const ansDom      = document.getElementById("answer");
  const yesDom      = document.getElementById("yes");
  const noDom       = document.getElementById("no");
  const gamesDom    = document.getElementById("games");
  const guessesDom  = document.getElementById("guesses");
  const averageDom  = document.getElementById("avg");
  const bestDom     = document.getElementById("best");
  let guessing;
  let answer = -1;
  let tries;
  let totalGames = 0;
  let totalGuesses = 0;
  let bestGame = 9999;

  playingDom.style.display = "none";
  finalDom.style.display = "none";
  start();

  guessDom.addEventListener("change", tryGuess);
  yesDom.addEventListener("click", nextRound);
  noDom.addEventListener("click", finish);
  



  function start() {

    guessing = true;
    answer = Math.floor((Math.random() * 100)) + 1;
    tries = 0;
  }

  function tryGuess(){
    guess = guessDom.value;
    if(guessing) {
      if(guess > 0 && guess <= 100) {
        tries++;
        triesDom.value = tries;
    
        if(guess > answer) {
          hintDom.innerHTML = "Too High!";
          //console.log(guess + " > " + answer);
        } else if (guess < answer) {
          hintDom.innerHTML = "Too low!";
          //console.log(guess + " < " + answer);
        } else {
          totalGames++;
          totalGuesses += tries;
          if(tries < bestGame) {
            bestGame = tries;
          }          
          guessing = false;
          hintDom.innerHTML = "Correct!";  
          correct = true;
          ansDom.value = answer;
          score.value = tries;
          guessingDom.style.display = "none";
          playingDom.style.display = "initial";
          guessDom.value = null;
          triesDom.value = 0;
          
        } 
      } else {
        hintDom.innerHTML = "That value is out of bounds.\nPlease choose a number between 1 and 100.";
      }
    }
  }



  function nextRound() {  
    if(!guessing) {
      playingDom.style.display = "none";
      start();
      hintDom.innerHTML = "Give it a guess!";
      guessingDom.style.display = "initial";
      guessing = true;
      ansDom.value = null;
      score.value = null;
    }
  }


  function finish() {
    if(!guessing) {
      playingDom.style.display = "none";
      gamesDom.value = totalGames;
      guessesDom.value = totalGuesses;
      averageDom.value = totalGuesses / totalGames;
      bestDom.value = bestGame;
      finalDom.style.display = "initial";
    }
  }







}


guessingGame();