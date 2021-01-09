//Get Buttons
var scheme1button = document.getElementById("scheme1");
var scheme2button = document.getElementById("scheme2");
var scheme3button = document.getElementById("scheme3");

//Buttons
//Scheme 1
scheme1button.onclick = function() {
  //Change Bubble Color
  document.getElementById("bubble1").style.background = "red";
  document.getElementById("bubble2").style.background = "red";
  document.getElementById("bubble3").style.background = "red";
  document.getElementById("bubble4").style.background = "red";
  document.getElementById("bubble5").style.background = "red";
  
  //Change: Lamp Glass Color
  document.getElementById("lampglass").style.borderColor = "transparent transparent orange transparent";
  //Change: Background Color
  document.querySelector("body").style.background = "#333399";
}

//Scheme 2
scheme2button.onclick = function() {
  //Change: Bubble Color
  document.getElementById("bubble1").style.background = "#1b6535";
  document.getElementById("bubble2").style.background = "#1b6535";
  document.getElementById("bubble3").style.background = "#1b6535";
  document.getElementById("bubble4").style.background = "#1b6535";
  document.getElementById("bubble5").style.background = "#1b6535";
  //Change: Lamp Glass Color
  document.getElementById("lampglass").style.borderColor = "transparent transparent #a8c66c transparent";
  //Change: Background Color
  document.querySelector("body").style.background = "#e1dd72";
}

//Scheme 3
scheme3button.onclick = function() {
  //Change: Bubble Color
  document.getElementById("bubble1").style.background = "gold";
  document.getElementById("bubble2").style.background = "gold";
  document.getElementById("bubble3").style.background = "gold";
  document.getElementById("bubble4").style.background = "gold";
  document.getElementById("bubble5").style.background = "gold";
  //Change: Lamp Glass Color
  document.getElementById("lampglass").style.borderColor = "transparent transparent lightblue transparent";
  //Change: Background Color
  document.querySelector("body").style.background = "blue";
}






