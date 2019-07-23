let computerGuess;
let userGuessLog= [];
let attempts =0;
let maxGuesses = 10;



                                            // Function for game end
function gameEnd(){
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('hardBtn').style.display = 'none';
    // yeh line is liye ke jb user ki attempts finish hojayein gi to wo dobara likh nh skta input field mein
    // mean for example agar hard select kare ga wo to 5 attempy hoon gi or jb 5 attempt finish hojayein to input field mein
    // nh likh skta just dekhskta jbhi readonly pe set kya
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}




                                            // Funtion for easy mode
function easyMode(){
    maxGuesses = 10;
    document.getElementById('easyBtn').className = "activeButton";
    document.getElementById('hardBtn').className = "";
}



                                            // Funtion for hard mode
function hardMode(){
    maxGuesses = 5;
    document.getElementById('hardBtn').className = "activeButton";
    document.getElementById('easyBtn').className = "";
}


                                            // Funtion for New Game 
function newGame(){
    window.location.reload();
}



                                             // Funtion for Number Generate
function randomNumber(){
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById('newGameButton').style.display = 'none';
}



                                             // Funtion for User Guess with conditions
function compareGuess(){
    let userGuess= " " + document.getElementById("inputBox").value;

    userGuessLog.push(userGuess);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;


                                            // Conditions
    if(userGuessLog.length < maxGuesses){
    if(userGuess > computerGuess){
        document.getElementById('textOutput').innerHTML = 'Your guess is too high';
        document.getElementById('inputBox').value="";
    }
    else if(userGuess < computerGuess){
        document.getElementById('textOutput').innerHTML = 'Your guess is too low';
        document.getElementById('inputBox').value="";
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' +attempts+ "attempts";
        document.getElementById('container').style.backgroundColor = 'green';
        gameEnd();
    }
} else {
    if(userGuess > computerGuess){
        document.getElementById('textOutput').innerHTML = 'You Lose ' + '<br> the number was ' + computerGuess;
        document.getElementById('container').style.backgroundColor = 'red';
        gameEnd();
    }
    else if (userGuess < computerGuess){
        document.getElementById('textOutput').innerHTML = 'You Lose ' + '<br> the number was ' + computerGuess;
        document.getElementById('container').style.backgroundColor = 'red';
        gameEnd();
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' +attempts+ "attempts";
        gameEnd();
    }
}

}


// -------------------------------------- End---------------------------------------------------------------

