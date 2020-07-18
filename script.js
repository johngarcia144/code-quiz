

// variables 
var quizQuestions = [
  {
  "quizQuestionHeader" : "Commonly used Data Types do NOT Include:", 
  "one" : "1. strings",
  "two" : "2. booleans",
  "three" : "3. alerts",
  "four" : "4. numbers",
  "correct" : "3. alerts",
  },{
  "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ________.",
  "one" : "1. quotes",
  "two" : "2. curly brackets",
  "three" : "3. parenthesis",
  "four" : "4. square brackets",
  "correct" : "3. parenthesis",
  },{
  "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
  "one" : "1. numbers and strings",
  "two" : "2. other arrays",
  "three" : "3. booleans",
  "four" : "4. all of the above",
  "correct" : "4. all of the above",
  },{
   "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
   "one" : "1. commas",
   "two" : "2. curly brackets",
   "three" : "3. quotes",
   "four" : "4. parenthesis",
   "correct" : "3. quotes",
  },{
   "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
   "one" : "1. JavaScript",
   "two" : "2. terminal / bash",
   "three" : "3. for loops",
   "four" : "4. console.log",
   "correct" : "4. console.log",
  },
]

var currentQuestionIndex = 0

var timeRemaining = 60
var startPage = $("#startPage")
var startButton = $("#startButton")

var quizPage = $("#quizPage")
var questionsContainer = $("#questionsContainer")
var answerResult = $("#answerResult")
var timer = $("#timer")

var endPage = $("#endPage")
var scoreContainer = $("#scoreContainer")
var highScoreContainer = $("#highScoreContainer")
var userInput = $("#userInput")
var initialsSubmit = $("#initialsSubmit")

// Bind the startQuiz function to the startButton
startButton.click(startQuiz)

// Called when start button is clicked
// This function will:
// - Hides start page and shows first question 
// - Start the timer
function startQuiz() {

// Hide startPage

// Show questionContainer

// Render the first question by calling showQuestion

// Start the timer using setInterval(function, 1000)
const timeInterval = setInterval(function() {
  // Decrease the time remaining

  // Update the timer element with the current time remaining

  // If the updating time is now less or equal to zero, end the timer with clearInterval(timeInterval) and call endQuiz()

}, 1000)

}

// Show current question
function showQuestion() {
// Render the question in the array quizQuestions at the index value that is equal to currentQuestionIndex
var currentQ = quizQuestions[currentQuestionIndex]

}

// Called when an answer is clicked
function handleAnswerClick() {
// Get the answer that was clicked

// Compare it to the current question's correct answer

// Call wrongAnswer() to handle wrong answers

// Call correctAnswer() if correct

// If at end of quiz, call endQuiz()
// If not, increase currentQuestionIndex and call showQuestion()

}

// Remove time from the timer, and "Wrong" message in the answerResult element
function wrongAnswer() {}

// Show "Correct" message in the answerResult element
function correctAnswer() {}

// Show the user their score, hide questions, show high-scores, and a user input to take their initials
function endQuiz() {
// Update scoreContainer element with user score

// Hide questionsPage

// Update highScoresContainer element

// Show the endPage element, including the userInput element

}

initialsSubmit.click(handleSaveScore)

// Take in initials and save user's score to local storage
function handleSaveScore() {}