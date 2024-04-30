var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomdiceimage1 = "./dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomdiceimage1);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdiceimage2="./dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "yeyy!! Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "yeyy!! Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "oops...Draw!";
  }