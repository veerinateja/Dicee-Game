//first dice
var randomNumber1=Math.floor(Math.random()*6)+1;
let element1=document.querySelector(".img1");

element1.setAttribute("src","images/dice"+randomNumber1+".png");
//second dice
var randomNumber2=Math.floor(Math.random()*6)+1;

let element2=document.querySelector(".img2");

element2.setAttribute("src","images/dice"+randomNumber2+".png");
//decide winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! ";
}   
else{
    document.querySelector("h1").innerHTML="Draw!";
}