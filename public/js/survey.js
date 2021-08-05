// // Questions for Dog selector survey

// var questions = [{


//     title: "Are you looking for a Dog or Cat?",
//     choices: ["Dog", "Cat"],
  
//     // should set search parameter to Dog or Cat
    
// },
// {
    
//     title: "What kind of home will your new pet live in?",
//     choices: ["Apartment", "House"],
   
//     // should set house size to Large or Small
    
// },
// {
//     title: "Do you have a yard for your new pet?",
//     choices: ["No yard", "I have a backyard"],
  
// //    should set parameter has_yard to True or False
// },
// {
//     title: "Do you live with other pets?",
//     choices: ["No Pets", "Other Dogs", "Other Cats"],
    
//     // select all that apply 
//     // good_with_dogs true or false
//     // good_with_cats
// },
// {
//     title: "Do you have children",
//     choices: ["No", "Yes"],
   
//     // good_with_children true or false

// },
// // only display if "dog" was selected in first question
// {
//     title: "How big of a dog can you handle?",
//     choices: ["Small", "Medium", "Large", "I dont care"],
 
//     // set parameter to small, medium or Large 
// },
// {
//     title: "Is the age of your pet important to you?",
//     choices: ["Baby", "Young", "Adult", "Senior", "I dont care"],
    
//     // set parameter to Baby, Young, Adult, senior
// },
// // if cat next question
// {
//     title: "Are you looking for a declawed cat?",
//     choices: ["Yes", "wtf no"],
    
//     // set parameter to has_claws to true or false
// },
// {
//     title: "Are you looking for a pet that is spayed/neutered?",
//     choices: ["Yes", "No"],
    
//     // set parameter to spayed_neutered to true or false

// },
// {
//     title: "Are you willing to take on a special needs pet?",
//     choices: ["Yes", "No"]
//     // set parameter special_needs to true or false
// }

// ]



// var score = 0;
// var currentQuestion = -1;





// //starts the countdown timer once user clicks the 'start' button
// function start() {
    

//     // timer function


// next();
// }

// //stop the timer to end the game 
// function endGame() {


// // dynamic script
// var quizContent = `
// <h2>finding the perfect Pet for you</h2>

// <button onclick="setScore()">View Pets</button>`;

// document.getElementById("quizBody").innerHTML = quizContent;
// }






// function incorrect() {

// next();

// }



// function correct() {

// next();

// }

// //Bridge to next question
// function next() {
// currentQuestion++;




// // I kept getting my score by the index value so it was always 1 short
// // so I just added it to the end of game still bugged if you get 0 correct 
// // ^^^^lol I had an unwanted space at the start of a string!!

// if (currentQuestion > questions.length -1 ) {
    
//     endGame();
//     return;
// }

// var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
// // dynamic button loop


// for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
//     var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
//     buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
//     if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
//         buttonCode = buttonCode.replace("[ANS]", "correct()");
//     } else {
//         buttonCode = buttonCode.replace("[ANS]", "incorrect()");
//     }
//     quizContent += buttonCode
// }


// document.getElementById("quizBody").innerHTML = quizContent;
// }
