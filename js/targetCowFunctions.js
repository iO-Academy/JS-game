$('body').on('click', '.js_clickable_cow', save_cow)

/**
 * when the cow is clicked, remove the class js_clickable_cow, add class rocket_cow and execute rocket cow function
 */
function save_cow(e) {
    var $clicked_cow = $(e.target)
    var $cow_container = $clicked_cow.parent()
    $clicked_cow.removeClass('js_clickable_cow')
    rocket_cow($cow_container)
    increase_interval_between_cows()
}

function increase_interval_between_cows() {
    if ((parseInt($(".score_value").text()) % 5) == 0) {
        interval_between_cows *= 0.8
    }
}

/**
 *increases score on screen
 */
function increment_score() {

    var score_element = parseInt($(".score_value").text()) + 1
    var pad = "000"
    var score_string = "" + score_element

    $(".score_value").text(pad.substring(0, 3 - score_string.length) + score_string)
}

/**
 *changes value of lives on screen, when lives is equal to zero end game
 */
function lose_life() {
    var remaining_lives = parseInt($(".lives_value").text()) - 1

    $(".lives_value").text(remaining_lives)
    if (remaining_lives < 1) {
        end_game()
    }
}

/**
 *stops the animation, removes the cows from dom and displays game over scene
 */
function end_game() {
    $('.cow_target_container').stop().remove()
    clearTimeout(timeout)
    display_screen(".js_game_over")
    $('body').off('keypress')
    $(".score_result").text($(".score_value").text())
}

/**
 *function to fade out and remove cow from dom
 */
function remove_cow(cow) {
    setTimeout(function () {
        $(cow).fadeOut('slow', function() {
            $(this).remove()
        })
    }, 200);
}

/**
 *change image to rocket cow, hide the parachute and animate it to bottom right corner
 * increment score and then remove cow from dom
 */
function rocket_cow($cow_container) {
    $cow_container.addClass('rocket_cow')
    $('.cow_target', $cow_container).css({
        "background-image": "url('../JS-game/img/rocket_cow.png')",
        "height": "140px"
    })
    $('.parachute_target', $cow_container).css("visibility", "hidden")

    $cow_container.css("z-index", "4").stop().animate({
            top: 400,
            left: 700
        }, 750,
        function() {
            increment_score()
            remove_cow($cow_container)
        })
}