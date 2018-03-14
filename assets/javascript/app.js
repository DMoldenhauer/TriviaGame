//REQUIREMENTS
//-------------------------------------------

// You'll create a trivia form with multiple choice or 
    //true/false options (your choice).

// The player will have a limited amount of time to 
    //finish the quiz. 


// The game ends when the time runs out. The page will 
    //reveal the number of questions that players answer 
    //correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

//PSEUDOCODE
//----------------------------------------------------------------
    //when game starts
        // event handler for START button click
        // replace start button with quiz questions and DONE button
        // start timer
        // display timer
        // track correct and incorrect answers
        //IF player press DONE before the timer expires
            //switch to score display
        //ELSE 
            //switch to score display when timer expires

//GLOBAL VARIABLES
//-------------------------------------------------------------

var correctAnswerCount = null;
var incorrectAnswerCount = null;
var timeIsUp = false;

//MAIN PROCESS
//------------------------------------------------------------
$(function ()
{
    //waits for click event handler on START button to call function startGame()
startGame();
});


//FUNCTIONS

function startGame()
{
    //switches html in quizBoard to replace start button with question list
    //starts timer()
    //calls questionAnswerCount() 

function questionAnswerCount ()
{
    //waits for input event handler on questions
    //compares input to correct answers and tallies score
    //IF timeIsUp === true
        //call endGame()
    //ELSE
}

function timer()
{
    //IF timer expires, changes var timeisUP to true  
}

function endGame()
{
    //switches html in quizBoard div to display of results
}


}
