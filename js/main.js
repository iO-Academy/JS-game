var $start_button = $(".start_button");
var fall_time = 4000
var interval_between_cows = 3000

/**
 * iterates core functions
 */

function game_loop() {
    var column = Math.floor(Math.random() * 6)  // Random number from 0 to 5.
    increase_speed()
    create_cow(column, fall_time)
    setTimeout(game_loop, interval_between_cows)
}

/**
 * creates new cows
 * @param column_number number column from 0-5
 * @param fall_time  number time it takes for cow to fall
 */

function create_cow(column_number, fall_time) {
    var horizontal_position = 5 + (110 * column_number)

    var $container_div = $("<div class='cow_target_container absolute'>" +
        "<span class='parachute_target'></span>" +
        "<span class='cow_target js_clickable_cow'></span>" +
        "</div>")

    $container_div.css('top','-177px')
    $container_div.css('left', horizontal_position + 'px')

    $(".play_area").append($container_div);
    $container_div.animate({ top: '343px'}, fall_time, function () {})
}

/**
 * Switch from intro page to playing page
 */
function go_to_game() {
    $(".game_title").css("display", "none")
    $(".play_area").css("display","block")
    game_loop()
}


/**
 * Reduces interval for cows being created and increases speed at which they fall
 */

function increase_speed() {
    if (interval_between_cows > 500 && fall_time > 1000) {
        fall_time *= 0.9
        interval_between_cows *= .9
    }
}

$start_button.click(go_to_game)
