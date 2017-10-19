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
 * Switches from the game_title page (start) to the play_area page
 * It adds event listeners for the pause keypress of [P]
 */
function initiate_game() {
    display_screen('.js_play_area')

    $('body').off('keypress')

    $('body').on('keypress', function(e) {
        var code = e.keyCode || e.which
        // [P] is keycode 112
        if(code == 112) {
            pause_game()
        }
    })
}

/**
 * Switches from the play_area page to the game_pause page
 * It adds event listeners for the keypress for resume [R] and removes any other keypress listeners
 */
function pause_game() {
    display_screen('.js_game_pause')

    $('body').off('keypress')

    $('body').on('keypress', function(e) {
        var code = e.keyCode || e.which
        // [R] is keycode 114
        if(code == 114) {
            resume_game()
        }
    })
    clearTimeout(timeout)
    $('.cow_target_container').each(function() {
        $(this).pause()
    })
}

/**
 * resume_game switches from the game_pause page to the play_area page
 * It adds event listeners for the pause button and the keypress for resume [P] and removes any other keypress listeners
 */
function resume_game() {
    display_screen('.js_play_area')

    game_loop()
    $('.cow_target_container').each(function() {
        $(this).resume()
    })

    $('body').off('keypress')

    $('body').on('keypress', function(e) {
        var code = e.keyCode || e.which
        // [P] is keycode 112
        if(code == 112) {
            pause_game()
        }
    })
}

/**
 * Display a box showing the instructions.
 */
function display_instructions() {
    $(".game_instructions").css("display", "block")
    $('body').off('keypress')
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





