var random_num1=Math.floor(Math.random()*6)+1;
var img1_src="images/dice"+random_num1+".png";
var random_num2=Math.floor(Math.random()*6)+1;
var img2_src="images/dice"+random_num2+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1_src);
document.querySelectorAll("img")[1].setAttribute("src",img2_src);

if(random_num1>random_num2){
    document.querySelector("h1").innerHTML="Player 1 wins 😜";
}
else if(random_num1<random_num2){
    document.querySelector("h1").innerHTML="Player 2 wins 😜";
}else{
    document.querySelector("h1").innerHTML="Draw 🐉";
}