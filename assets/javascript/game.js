// computer selects random letter
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;


var winsText=document.getElementById("wins");
var lossesText=document.getElementById("losses");
var guessesText=document.getElementById("guessesleft");
var keyspressedText=document.getElementById("keyspressed");


// onkey, computer checks to see if input matches selcted letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("the computer picked "+ computerGuess);

document.onkeyup = function(event){ 

    var userGuess = event.key.toLowerCase();
    console.log(event);


// // if guess matches computer:
//     // update wins to +1
//     // reset guesses left to 9
//     // reset keyspressed to empty
if (userGuess == computerGuess){
        wins++;
        winsText.textContent= wins;
        guessesText.textContent=9;
        keyspressedText.textContent="-"}
        // // if guesses left reaches 0
//     // update losses to +1
//     // reset guesses left to 9
else if (guessesleft = 0){
        losses++;
        lossesText.textContent = losses;
        guessesText.textContent=9;
        keyspressedText.textContent="-"}
else{
    guessesleft--;

}};

console.log(wins);
console.log(guessesleft);



//     // computer to select new random letter
// // if it does not match:
//     // updated guesses left to minus 1
guessesText.textcontent = guessesleft;
//     // show letter guessed in "key pressed"


//     // reset keys pressed to empty
//     // computer to select new random letter

