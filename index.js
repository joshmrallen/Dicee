var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".player1Die").setAttribute("src","images/dice"+randomNumber1+".png");

document.querySelector(".player2Die").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2) {
  document.firstElementChild.lastElementChild.firstElementChild.innerText = "🚩Player 1 Wins!";
} else if (randomNumber2>randomNumber1) {
  document.firstElementChild.lastElementChild.firstElementChild.innerText = "Player 2 Wins!🚩";
} else if (randomNumber1 === randomNumber2) {
  document.firstElementChild.lastElementChild.firstElementChild.innerText = "🚩Draw!🚩";
}
