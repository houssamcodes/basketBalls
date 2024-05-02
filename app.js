"use strict";

// start the game option if the person is above 18

// put both teams score as
let home = 0;
let guest = 0;

let homeScore = document.querySelector(".box1");
console.log(homeScore);
let guestScore = document.querySelector(".box2");

console.log(guestScore);

const loopa = document.querySelectorAll(".ma");
const bixa = document.querySelector(".boxbox");
for (let i = 0; i < loopa.length; i++) {
  loopa[i].addEventListener("click", function () {
    bixa.classList.remove("hidden");
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
  });
}

// selected both table
// now its time to display function

function add() {
  home += 1;
  homeScore.textContent = home;
  if (home >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
function add2() {
  home += 2;
  homeScore.textContent = home;
  if (home >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
function add3() {
  home += 3;
  homeScore.textContent = home;
  if (home >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
function adda() {
  guest += 1;
  guestScore.textContent = guest;
  if (guest >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
function addb() {
  guest += 2;
  guestScore.textContent = guest;
  if (guest >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
function addc() {
  guest += 3;
  guestScore.textContent = guest;
  if (guest >= 100) {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    alert("you won the game");
  }
}
const lipa = document.querySelector(".mia").addEventListener("click", rest);

function rest() {
  home = 0;
  guest = 0;
  guestScore.textContent = 0;
  homeScore.textContent = 0;
  bixa.classList.add("hidden");
}
