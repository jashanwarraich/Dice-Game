//alert("hi");
 
var rn1=Math.floor(Math.random()*6)+1;
var rimage1="images/"+"dice"+rn1+".png";

var rn2=Math.floor(Math.random()*6)+1;
var rimage2="images/"+"dice"+rn2+".png";


var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",rimage1);
image2.setAttribute("src",rimage2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS"; 
}

else if(rn1<rn2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS"; 
}

else{
    document.querySelector("h1").innerHTML="DRAW"; 
}
