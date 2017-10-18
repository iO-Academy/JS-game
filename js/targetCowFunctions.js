


$('body').on('click', '.js_clickable_cow', function(e) {
    save_cow(e)
})

/**
 * when the cow is clicked, remove the class js_clickable_cow, add class rocket_cow and execute rocket cow function
 */

function save_cow(e) {
    var clicked_cow = e.target
    var $cow_container = $(clicked_cow).parent()
    $(clicked_cow).removeClass('js_clickable_cow')
    $cow_container.addClass('rocket_cow')
    rocket_cow($cow_container)
}

/**
 *increases score on screen
 */

function increment_score() {
    var score_element = parseInt(document.querySelector(".score_value").textContent) + 1
    document.querySelector(".score_value").textContent = score_element
}

/**
 *changes value of lives on screen, when lives is equal to zero end game
 */

function lose_life() {
    var lives_element = get_lives() - 1
    document.querySelector(".lives_value").textContent = lives_element

    if (lives_element === 0) {
        end_game()
    }
}

/**
 *get the number of current lives
 */

function get_lives() {
    return parseInt(document.querySelector(".lives_value").textContent)
}

/**
 *stops the animation, removes the cows from dom and displays game over scene
 */

function end_game() {
    $('.cow_target_container').stop()
    $('.cow_target_container').remove()
    clearTimeout(timer)
    document.querySelector(".play_area").style.display = "none"
    document.querySelector(".game_over").style.display = "block"
    $(".score_result").text(document.querySelector(".score_value").textContent)
}

/**
 *function to fade out and remove cow from dom
 */

function remove_cow(cow) {
    setTimeout(function() {
        $(cow).fadeOut('slow', function () {
            $(this).remove()
        })
    }, 200);
}

/**
 *change image to rocket cow, hide the parachute and animate it to bottom right corner
 * increment score and then remove cow from dom
 */

function rocket_cow($clicked_cow) {
    $('.cow_target', $clicked_cow).css('background-image',"url('../JS-game/js/rocket_cow.png')")
    $('.cow_target', $clicked_cow).css("height", "140px")
    $clicked_cow.css("z-index", "4")
    $('.parachute_target', $clicked_cow).css("visibility", "hidden")

    $clicked_cow.stop()
    $clicked_cow.animate({
            top: 400,
            left: 700
        }, 750,
        function () {
            increment_score()
            remove_cow($clicked_cow)
        })

}

