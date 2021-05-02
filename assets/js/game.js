// Calling global variables

var question = document.querySelector("#question")
var startButton = document.querySelector("#start-btn")
var choices = Array.from(document.querySelectorAll(".option-text"));
var questionProgress = document.querySelector("#questionProgress")
var timerDisplay = document.querySelector("#timerDisplay")
var question = document.querySelector("#question")
var time = 60

let currentQuestion = {}
let acceptingAnswers = true

let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Which of the following is not JavaScript Data Types?",
        choice1: "Undefined", 
        choice2: "Number", 
        choice3: "Boolean", 
        choice4: "Float", 
        answer: 4,
    },
    {
        question: "Which company developed JavaScript? ",
        choice1: "Netscape", 
        choice2: "Bell Labs", 
        choice3: "Sun Microsystems", 
        choice4: "IBM", 
        answer: 1,
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>", 
        choice2: "<head>",
        choice3: "<meta>", 
        choice4: "<style>",
        answer: 1,
    },
    {
        question: "Which built-in method returns the length of the string?",
        choice1: "size()", 
        choice2: "length()", 
        choice3: "append()", 
        choice4: "index()", 
        answer: 2,
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to upper case?",
        choice1: "toString()", 
        choice2: "toLocaleUpperCase()", 
        choice3: "substring()", 
        choice4: "toUpperCase()", 
        answer: 4,
    }]
    const TIMER = 10
    const MAX_QUESTIONS = 5

    startGame = () => {
        questionCounter = 0
        score = 0
        availableQuestions = [...questions]
        getNewQuestion();
    }
    // I could not figure out how to do it all on one html. //  
    getNewQuestion = () => {
        if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score)

            return window.location.assign('end.html')
         }
        questionCounter++
        questionProgress.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` 
        // Grabbing random questions from the from the available amount of questions. //
        var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex];
        question.innerText = currentQuestion.question

        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]
        })
        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true
    }
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return
            acceptingAnswers = false
            var selectedChoice = e.target
            var selectedAnswer = selectedChoice.dataset['number']

            // ternary operator 
            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
            
            if(classToApply === 'correct') {
                incrementTime(TIMER)
            }
            if(classToApply === 'incorrect') {
                decrementTime(TIMER)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion();
            }, 500)

        })
    })
    // + 10 points/timer for a correct answer
    incrementTime = num => {
        score +=num
        timerDisplay.innerText = score    
    }
    // - 10 points/timer for incorrect
    decrementTime = num => {
        score -=num
        timerDisplay.innerText = score 
    }
    // Couldn't get the score to add/subtract from the timer or to add the timer to the score for totalScore // 

    // document.querySelectorAll('incorrect').addEventListener('click', function() {
    //     time -= 10;
    //     document.querySelector('#timerDisplay').innerHTML= time;
    // });
    function startTimer() {
        var time = 75
        var timeInterval = setInterval(function () {
            time--;
            timerDisplay.innerHTML = time;
        if (time < 1) {
          clearInterval(timeInterval);
          alert("Time is up!")
        }
      }, 1000);
      
   }
      startTimer();
      

       

      startGame();
    

    

     
     