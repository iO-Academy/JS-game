$('body').on('click', '.cowTarget', function(e) {
    saveCow(e)
})

function saveCow(e) {
    var clickedCow = e.target
    clickedCow.classList.remove('cowTarget')
    incrementScore()
}

function incrementScore() {
    var scoreElement = $('.score_value')
    var currentScore = parseInt(scoreElement.textContent)
    scoreElement.textContent = currentScore + 1
}