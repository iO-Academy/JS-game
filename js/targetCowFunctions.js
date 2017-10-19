$('body').on('click', '.js_clickable_cow', save_cow)

/**
 * when the cow is clicked, remove the class js_clickable_cow, add class rocket_cow and execute rocket cow function
 */
function save_cow(e) {
    var $clicked_cow = $(e.target)
    var $cow_container = $clicked_cow.parent()
    $clicked_cow.removeClass('js_clickable_cow')
    rocket_cow($cow_container)
}

/**
 *increases score on screen
 */
function increment_score() {
    var score_element = parseInt($(".score_value").text()) + 1
    $(".score_value").text(score_element)
}

/**
 *changes value of lives on screen, when lives is equal to zero end game
 */
function lose_life() {
    var remaining_lives = parseInt($(".lives_value").text()) - 1
    $(".lives_value").text(remaining_lives)

    if (remaining_lives === 0) {
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
    setTimeout(function() {
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
        "background-image": "url('../JS-game/js/rocket_cow.png')",
        "height": "140px"
    })
    $cow_container.css("z-index", "4")
    $('.parachute_target', $cow_container).css("visibility", "hidden")

    $cow_container.stop()
    $cow_container.animate({
            top: 400,
            left: 700
        }, 750,
        function() {
            increment_score()
            remove_cow($cow_container)
        })
}