var username = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#saveScoreBtn")
var finalScore = document.querySelector("#finalScore")
var mostRecentScore = localStorage.getItem("mostRecentScore")

var highScores = JSON.parse(localStorage.getItem('highScores')) || []
var MAX_HIGH_SCORES = 5

finalScore.innerHTML = mostRecentScore
// took this keyup function out because I didn't disable the saveScoreBtn it in html. 
// username.addEventListener('keyup', () => {
//     saveScoreBtn = !username.value
// })

saveHighScore = function(e) {
    e.preventDefault()
    
    var score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })
    // take the lowest score out // 
    highScores.splice(5)

    // grabbing highscores from local storage converting that value to a string and printing out the highscores
    // with the name associated with it and taking you to the highscores page
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highScores.html')
}
