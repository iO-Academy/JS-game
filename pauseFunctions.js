//Initially create event listeners for pause button and p key press

$('body').on('keypress', function (e) {
    var code = e.keyCode || e.which
    // p is keycode 112
    if(code == 112) {
        pauseGame()
    }
})

$('.pause').on('click', pauseGame)

/**
 * pauseGame removes pause event listeners and add remove event listeners
 */
function pauseGame() {
    //console.log('paused')
    $('.pause').off('click', pauseGame)
    $('.resume').on('click', resumeGame)

    $('body').off('keypress')

    $('body').on('keypress', function (e) {
        var code = e.keyCode || e.which
        // r is keycode 114
        if(code == 114) {
            resumeGame()
        }
    })
}

/**
 * resumeGame removes pause event listeners and add remove event listeners
 */
function resumeGame() {
    //console.log('resumed')
    $('.resume').off('click', resumeGame)
    $('.pause').on('click', pauseGame)

    $('body').off('keypress')

    $('body').on('keypress', function (e) {
        var code = e.keyCode || e.which
        // p is keycode 112
        if(code == 112) {
            pauseGame()
        }
    })

}