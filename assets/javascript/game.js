// computer selects random letter
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessSoFar=[];
var computerGuess = ""


// var winsText=document.getElementById("wins");
// var lossesText=document.getElementById("losses");
// var guessesText=document.getElementById("guessesleft");
// var keyspressedText=document.getElementById("keyspressed");


// onkey, computer checks to see if input matches selcted letter
function randomselection(){
 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("the computer picked "+ computerGuess);}

function updateScores(){
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#guessesleft").innerHTML = guessesleft;
        document.querySelector("#keyspressed").innerHTML = guessSoFar;
        }

function resetScores(){
        guessesleft = 9;
        guessSoFar = [];
}

randomselection();



document.onkeyup = function(event){ 
        guessesleft --;

        var userGuess = event.key.toLowerCase();
                console.log(event);
        
        guessSoFar.push(userGuess);

        updateScores();

        if (userGuess === computerGuess){
                wins++;
                updateScores();
                resetScores();
                randomselection();
        }
        if(guessesleft===0){
                losses++;
                updateScores();
                resetScores();
                randomselection();
        }
}