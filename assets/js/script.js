  /* First attempt : couldn't figure how to bring up highscore/submit feature */
// Went on making 3 files of each html/css/js 

// var startButton = document.querySelector("#start-btn")
// var vhsButton = document.querySelector("#vhs-btn")
// var questionBoxEl = document.querySelector("#question-box")
// var homeEl = document.querySelector(".home")
// var countdownEl = document.querySelector("#countdown")
// var questionEl = document.querySelector("#question")
// var answerButtonsEl = document.querySelector("#answer-buttons")
// var timerDisplay = document.querySelector('#timerDisplay');
// var timeLeft = 75
// let shuffledQuestions, currentQuestionIndex
// let currentQuestions = {}

// startButton.addEventListener('click', startGame);
// // this next line will make all the questions go through
// answerButtonsEl.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   homeEl.classList.add('hide')
//   questionBoxEl.classList.remove('hide')
//   countdownEl.classList.remove('hide')
//   shuffledQuestions = questions.sort(() => Math.random() -.5)
//   currentQuestionIndex = 0
//   availableQuestions = [...questions]
//   setNextQuestion()
// }

//   function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }
//   function showQuestion(question) {
//   questionEl.innerText = question.question
//   question.answers.forEach(answer => {
//     var button = document.createElement('button');
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsEl.appendChild(button)
    
    
//   })
// }
// function startTimer() {
//   var timeLeft = 75
//   var timeInterval = setInterval(function () {
//      timeLeft--;
//     timerDisplay.innerHTML = timeLeft;
//   if (timeLeft < 1) {
//     clearInterval(timeInterval);
//     alert("Time is up!")
//   }
// }, 1000);
// }

//   startButton.onclick = function(){
//   startButton.disabled = true;
//   startTimer();
// }  

// function resetState() {
//   clearStatusClass(document.body)
//   while (answerButtonsEl.firstChild) {
//     answerButtonsEl.removeChild(answerButtonsEl.firstChild)
//   }
// }

// function selectAnswer(event) {
//   var selectedButton = event.target
//   var correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsEl.children).forEach(button => {
//   setStatusClass(button, button.dataset.correct)
//   })
  
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
  
    
//   } else {
//     questionBoxEl.classList.add('hide')
//     startButton.classList.remove('hide')
//     startButton.innerText = "Play Again"
    
    
//   }
// }

// function setStatusClass(element, correct) {
  
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('incorrect')
//     timeLeft = timeLeft - 10;
//       timerDisplay.innerHTML = timeLeft
//       answerButtonsEl.classList.remove('correct','incorrect')
     
//       }
// }
// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('incorrect')
// }

  
    
    

//   //     var countdown = function(num) {
//   //   for (var i = num; i > 0; i--) {
//   //     console.log(i);
//   //   }
//   // };
  
// // startTimer();
// // })();

//   const questions = [
//     {
//         question: "Which of the following is not JavaScript Data Types?",
//         answers: [
//         { text: "Undefined", correct: false },
//         { text: "Number", correct: false },
//         { text: "Boolean", correct: false },
//         { text: "Float", correct: true }
//         ]
//       },
//       {
//         question: "Which company developed JavaScript? ", 
//         answers: [
//         { text: "Netscape", correct: true },
//         { text: "Bell Labs", correct: false },
//         { text: "Sun Microsystems", correct: false },
//         { text: "IBM", correct: false }
//         ]
//       },
//       {
//         question: "Inside which HTML element do we put the JavaScript?",
//         answers: [
//         { text: "<script>", correct: true },
//         { text: "<head>", correct: false },
//         { text: "<meta>", correct: false },
//         { text: "<style>", correct: false }
//         ]
//       },
//       {
//         question: "Which built-in method returns the length of the string?",
//         answers: [
//         { text: "size()", correct: false },
//         { text: "index()", correct: false },
//         { text: "length()", correct: true },
//         { text: "append()", correct: false } 
//         ]
//       },
//       {
//         question: "Which of the following function of String object returns the calling string value converted to upper case?",
//         answers: [
//         { text: "toString()", correct: false},
//         { text: "toLocaleUpperCase()", correct: false},
//         { text: "substring()", correct: false},
//         { text: "toUpperCase()", correct: true}
//         ]
//       }
//     ]