// Questions for Breed selector survey

var questions = [{


    title: "Are you an experiened dog owner?",
    choices: ["Yes", "No"],
    answer: "Yes"
    
},
{
    
    title: "Whats kind of home will your new dog live in?",
    choices: ["Apartment", "House"],
    answer: "House"
    
},
{
    title: "How much outdoor space do you have for your new dog?",
    choices: ["No yard", "Small Backyard", "Large Backyard"],
   answer: "Small Backyard"
},
{
    title: "Do you live with other pets?",
    choices: ["No Pets", "dogs", "Cats", "other"],
    answer: "dogs"
},
{
    title: "Do you have children",
    choices: ["No", "Yes"],
    answer: "No"
},
{
    title: "How big of a dog can you handle?",
    choices: ["Small(by weight)", "Medium", "Large", "I dont care"],
    answer: "I dont care"
}
]



var score = 0;
var currentQuestion = -1;





//starts the countdown timer once user clicks the 'start' button
function start() {
    

    // timer function


next();
}

//stop the timer to end the game 
function endGame() {


// dynamic script
var quizContent = `
<h2>finding the perfect dog for you</h2>

<button onclick="setScore()">View Dogs</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}






function incorrect() {

next();

}



function correct() {

next();

}

//Bridge to next question
function next() {
currentQuestion++;




// I kept getting my score by the index value so it was always 1 short
// so I just added it to the end of game still bugged if you get 0 correct 
// ^^^^lol I had an unwanted space at the start of a string!!

if (currentQuestion > questions.length -1 ) {
    
    endGame();
    return;
}

var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
// dynamic button loop


for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
        buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
}


document.getElementById("quizBody").innerHTML = quizContent;
}
