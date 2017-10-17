/**
 * initiate_game switches from the game_title page (start) to the play_area page
 * It adds event listeners for the pause button and the keypress for pause (p)
 */
function initiate_game() {
    $(".game_title").css("display", "none")
    $(".game_pause").css("display", "none")
    $(".play_area").css("display","block")
    $(".instructions").css("display", "none")


    $('body').off('keypress')

    $('body').on('keypress', function (e) {
        var code = e.keyCode || e.which
        // p is keycode 112
        if(code == 112) {
            pause_game()
        }
    })

    $('.pause_button').on('click', pause_game)
}


/**
 * pause_game switches from the play_area page to the game_pause page
 * It adds event listeners for the resume button and the keypress for resume (r) and removes any other keypress listeners
 */
function pause_game() {
    $(".game_title").css("display", "none")
    $(".game_pause").css("display", "block")
    $(".play_area").css("display","none")
    $(".instructions").css("display", "none")

    $('.resume_button').on('click', resume_game)
    $('.instructions_button').on('click', display_instructions)

    $('body').off('keypress')

    $('body').on('keypress', function (e) {
        var code = e.keyCode || e.which
        // r is keycode 114
        if(code == 114) {
            resume_game()
        }
    })
}


/**
 * resume_game switches from the game_pause page to the play_area page
 * It adds event listeners for the pause button and the keypress for resume (p) and removes any other keypress listeners
 */
function resume_game() {
    $(".game_title").css("display", "none")
    $(".game_pause").css("display", "none")
    $(".play_area").css("display","block")
    $(".instructions").css("display", "none")

    $('.pause_button').on('click', pause_game)

    $('body').off('keypress')

    $('body').on('keypress', function (e) {
        var code = e.keyCode || e.which
        // p is keycode 112
        if(code == 112) {
            pause_game()
        }
    })
}

function display_instructions() {
    // $(".game_title").css("display", "none")
    // $(".game_pause").css("display", "none")
    // $(".play_area").css("display","none")
    $(".instructions").css("display", "block")

    $('body').off('keypress')

    $('.close_instructions_button').on('click', close_instructions)
}

function close_instructions() {
    $(".instructions").css("display", "none")
}

//Shows game_title page and adds initial event listener to initiate the game
$(".game_title").css("display", "block")
$(".game_pause").css("display", "none")
$(".play_area").css("display","none")
$(".instructions").css("display", "none")

$('.start_button').click(initiate_game)
$('.instructions_button').click(display_instructions)





