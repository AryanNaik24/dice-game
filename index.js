var n=Math.random();
n=n*6;
n=Math.floor(n)+1;

var img1 =document.querySelector(".img1");
img1.src="images/dice"+n+".png";


var j=Math.random();
j=j*6;
j=Math.floor(j)+1;

var img2 =document.querySelector(".img2");
img2.src="images/dice"+j+".png";


if (n>j){
  document.querySelector(".play").textContent = "Player 1 Wins!!";
}
 if (j===n) {
    document.querySelector(".play").textContent = "Its A Tie...";

}
if (n<j) {
    document.querySelector(".play").textContent = "Player 2 Wins!!";
}
