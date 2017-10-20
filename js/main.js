var fall_time
var interval_between_cows
var timeout

/**
 * iterates core functions
 */
function game_loop() {
    increase_speed()
    create_cow(fall_time)
    timeout = setTimeout(game_loop, interval_between_cows)
}

/**
 * creates new cows
 * @param fall_time  number time it takes for cow to fall
 */
function create_cow(fall_time) {
    var column_number = Math.floor(Math.random() * 6)  // Random number from 0 to 5.

    // Plus 5 because cows are 10 pixels narrower than the 110 pixels wide columns.
    var horizontal_position = 5 + (110 * column_number)

    var $container_div = $("<div class='cow_target_container absolute'>" +
        "<div class='parachute_target'></div>" +
        "<div class='cow_target js_clickable_cow'></div>" +
        "</div>")

    $container_div.css({'top': '-177px', 'left': horizontal_position + 'px'})
    $(".play_area").append($container_div);
    $container_div.animate({ top: '343px'}, fall_time, function(){dead_cow($container_div)})
}

/**
 * Switch from intro page to playing page
 */
function go_to_game() {
    $(".lives_value").text("5")
    $(".score_value").text("000")
    interval_between_cows = 2000
    fall_time = 2500
    game_loop()
}

/**
 * Removes cows when they hit the spikes, makes them fade out and change image. Also minus a life.
 */
function dead_cow($cow) {
    $('.cow_target', $cow).removeClass('js_clickable_cow')
    $('.parachute_target', $cow).css("visibility", "hidden")
    $('.cow_target', $cow).css("background-image", "url('../JS-game/img/dead_cow.png')")
    $cow.fadeOut('slow', function() {
        $(this).remove()
    })
    lose_life()
}

/**
 * Reduces interval for cows being created and increases speed at which they fall
 */
function increase_speed() {
    if (fall_time > 2500) {
        fall_time *= 0.7
    }
}