


//left Dice = Random integer from 1-6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// set left dice to random dice roll
let image1 = "images/dice" + randomNumber1 + ".png"
document.querySelector(".dice .img1").setAttribute("src", image1);

// right dice = Random integer from 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// set right dice to random dice roll
let image2 = "images/dice" + randomNumber2 + ".png"
document.querySelector(".dice .img2").setAttribute("src", image2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";

}
