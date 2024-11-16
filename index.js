var num;
var guess;
var difficulty = document.getElementById("level");
var btn = document.getElementById("start-btn");

function startGame() {
    
    if (difficulty.value === "") {
        alert("Please Enter your level");
        return;
    }

    
    switch (difficulty.value) {
        case "easy":
            num = Math.random() * 10;  ///// Range 1 to 10
            break;
        case "medium":
            num = Math.random() * 50; ////// Range 1 to 50
            break;
        case "hard":
            num = Math.random() * 100; ///// Range 1 to 100
            break;
        default:
            alert("Invalid difficulty level");
            return;
    }

    guess = Math.floor(num) + 1;

       ///// input field ////
    var gameContainer = document.getElementById("game");
    gameContainer.innerHTML = ""; // Clear previous content

    var header = document.createElement("p");
    var pText = document.createTextNode("Guess the number!");
    header.appendChild(pText);
    gameContainer.appendChild(header);

    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "userGuess");
    input.setAttribute("placeholder", "Enter your guess");
    gameContainer.appendChild(input);

    var lineBreak = document.createElement("br");
    gameContainer.appendChild(lineBreak);

    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Guess";
    submitBtn.setAttribute("onclick", "checkGuess()");
    gameContainer.appendChild(submitBtn);
}

//////////// Function to check the user's guess
function checkGuess() {
    var userGuess = parseInt(document.getElementById("userGuess").value);

    ////// isNaN number ko Check krta hai ( check if the input is a valid number)
    if (isNaN(userGuess)) {
        alert("Please enter a valid number!");
        return;
    }

    var resultText;
    if (userGuess === guess) {
        resultText = "You win!🎉";
    } else if (userGuess === guess - 1 || userGuess === guess + 1) {
        resultText = "You're very close!👀";
    } else {
        resultText = "You lost. Try again!";
    }

    /////////// Display result ////////
    var result = document.createElement("h2");
    var resultNode = document.createTextNode(resultText);
    result.appendChild(resultNode);
    document.getElementById("game").appendChild(result);
}
