"use strict";
let user = prompt("Hello my name is Daniel, What is your name?");
alert("Welcome " + user + " to my website please enjoy your stay");

let DomHand = prompt("Which is my more dominant hand left or right?");
if (DomHand.toLowerCase() === "left") {
  console.log("That is correct, I am left handed!!");
  alert("That is correct,I am left handed!!");
} else {
  console.log("Incorrect, I am not right handed!!");
  alert("Incorrect, I am not right handed!!");
}

let device = prompt("What do i play on Xbox or Playstation?");
if (device.toLowerCase() === "playstation") {
  console.log("Well done i do like the playstation more!");
  alert("Well done i do like the playstation more!");
} else {
  console.log("That is incorrect I don't play xbox more!");
  alert("That is incorrect I don't play xbox!");
}

let favsauce = prompt(
  "Am i red sauce or brown sauce kinda guy (please only type the colour)"
);
if (favsauce.toLowerCase() === "brown") {
  console.log("Good Job brown sauce is the stuff!");
  alert("Good Job brown sauce is the stuff!");
} else {
  console.log("No red sauce is for babies!");
  alert("No red sauce is for babies!");
}

let shwrbth = prompt("What do i like more showers or baths?");
if (shwrbth.toLowerCase() === "baths") {
  console.log("Yea man nothing beats a nice hot bath!");
  alert("Yea man nothing beats a nice hot bath!");
} else {
  console.log("No way over the choice of a bath you must be silly!");
  alert("No way over the choice of a bath you must be silly!");
}

let pet = prompt(
  "Which typical household pet am I a fan of more, Cats or Dogs?"
);
if (pet.toLowerCase() === "dogs") {
  console.log("Dogs rule because they're cool!");
  alert("Dogs rule because they're cool!");
} else {
  console.log("Cats are stingy they belong in the bin!!");
  alert("Cats are stingy they belong in the bin!!");
}
