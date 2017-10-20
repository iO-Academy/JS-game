/**
 * Hides all screen pages then displays the page specified by screen_name
 *
 * @param screen_name the selector of the screen you want to be displayed
 */
function display_screen(screen_name) {
    $('.js_screen').hide()
    $(screen_name).show()
}

/**
 * Switches to the game_play page and adds an event listener for the pause keypress of [P]
 */
function activate_play_area() {
    display_screen('.js_play_area')
    $('body').off('keypress').on('keypress', function (e) {
        // [P] is keycode 112
        if ((e.keyCode || e.which) == 112) {
            pause_game()
        }
    })
}

/**
 * Begins the game
 */
function initiate_game() {
    activate_play_area()
    go_to_game()
}

/**
 * Switches from the play_area page to the game_pause page
 * It adds event listeners for the keypress for resume [R] and removes any other keypress listeners
 */
function pause_game() {
    display_screen('.js_game_pause')

    $('body').off('keypress').on('keypress', function (e) {
        // [R] is keycode 114
        if ((e.keyCode || e.whichcode) == 114) {
            resume_game()
        }
    })
    clearTimeout(timeout)
    $('.cow_target_container').each(function () {
        $(this).pause()
    })
}

/**
 * Resumes the game play from the point it was left before pausing (with the addition of a cow)
 */
function resume_game() {
    activate_play_area()
    game_loop()
    $('.cow_target_container').each(function() {
        $(this).resume()
    })
}

/**
 * Display a box showing the instructions.
 */
function display_instructions() {
    $(".game_instructions").css("display", "block")
    $('.close_instructions_button').on('click', close_instructions)
}

/**
 * Hide the box showing the instructions.
 */
function close_instructions() {
    $(".js_instructions").css("display", "none")
}

//Shows game_title page and adds initial event listener to initiate the game
display_screen('.js_game_title')

$('.start_button').on('click', initiate_game)
$('.pause_button').on('click', pause_game)
$('.resume_button').on('click', resume_game)
$('.instructions_button').on('click', display_instructions)





