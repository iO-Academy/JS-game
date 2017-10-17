

$('body').on('click', '.cowTarget', function(e) {
    saveCow(e)
    rocket_cow()
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

function loseLife() {
    var livesElement = $('.lives_value')
    var currentLives = parseInt(livesElement.textContent)
    var updatedLives = currentLives - 1

    if (updatedLives === 0) {
        endGame()
    } else {
        livesElement.textContent = updatedLives
    }
}

function endGame() {
    
}

//remove cow which falls down
function remove_cow(cow) {
    setTimeout(function() {
        $(cow).fadeOut('slow')
    }, 200);
}


//rocket on click, move to bottom corner
function rocket_cow() {
    $(cow).css('background-image',"url('cow-with-rocket-100px.png')")
    $(cow).animate({
            top: 490,
            left: 700
        }, 750,
        remove_cow(cow)
}

