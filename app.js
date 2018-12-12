// var choices = ["rock", "paper", "scissors"]
// img.addEventListener("click", userInput)
// var computerChoice = choices[Math.floor(Math.random()*choices.length)]
// function userInput(){
    
// }
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     if(choice1==="rock"){
//         if(choice2==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(choice1==="paper"){
//         if(choice2==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(choice1==="scissors"){
//         if(choice2==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
// compare(userChoice,computerChoice);
var pUser = document.getElementById("user")
var pComp = document.getElementById("comp")
var pResults = document.getElementById("results")
// User choice
function setUserChoice (choice) {
    

var userChoice = choice;
if (! userChoice) {
    // User choice was undefined
    pUser.innerHTML = "<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>";
} else {
    // Display user choice
    pUser.innerHTML = "<p>Player 1:" + " " + userChoice + "</p>";
}
// Computer choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
// Display computer choice
pComp.innerHTML = "<p>Computer:" + " " + computerChoice + "</p>";
// Compare user choice vs computer choice
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        pResults.innerHTML = "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            pResults.innerHTML = "You win!";
        } else {
            // paper wins
            pResults.innerHTML = "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            pResults.innerHTML = "You win!";
        } else {
            // scissors wins
            pResults.innerHTML = "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            pResults.innerHTML = "You lose! Try again.";
        } else {
            // scissors wins
            pResults.innerHTML = "You win!";
        }
    }
};
// Run the compare function
var results = compare(userChoice,computerChoice);
}
// Display results
// document.write("<br><hr><br>" + results);