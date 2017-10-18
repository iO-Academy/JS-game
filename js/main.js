var $start_button = $(".start_button");
var fall_time = 3500
var cow_time = 2500
var timer

/**
 * iterates core functions
 */

function cow_time_release() {
    var column = Math.floor(Math.random() * 6)  // Random number from 0 to 5.
    increase_speed()
    create_cow(column, fall_time)
}

/**
 * creates new cows
 * @param column_number number column from 0-5
 * @param fall_time  number time it takes for cow to fall
 */

function create_cow(column_number, fall_time) {
    var horizontal_position = 5 + 110 * column_number

    var $container_div = $("<div class='cow_target_container absolute'><span class='parachute_target'></span>" +
        "<span class='cow_target js_clickable_cow'></span></div>")
    $container_div.css('top','-177px')
    $container_div.css('left', horizontal_position + 'px')
    $(".play_area").append($container_div);

    $container_div.animate({ top: '343px'}, fall_time, dead_cow)

    timer = setTimeout(cow_time_release, cow_time)
}

/**
 * Switch from intro page to playing page
 */

function go_to_game() {
    document.querySelector(".lives_value").textContent = 5
    document.querySelector(".score_value").textContent = 0
    cow_time = 2500
    fall_time = 3500
    $(".game_title").css("display", "none")
    $(".play_area").css("display","block")
    cow_time_release()
}

/**
 * Reduces interval for cows being created and increases speed at which they fall
 */

function increase_speed() {
    if (cow_time > 600 && fall_time > 350) {
        fall_time *= 0.95
        cow_time *= 0.9
    }
}


/**
 * Removed cows when they hit the spikes, make them fade out and change image. Also minus a life.
 */

function dead_cow() {
    $('.cow_target', this).removeClass('js_clickable_cow')
    $('.parachute_target', this).css("visibility", "hidden")
    $('.cow_target', this).css("background-image", "url('../JS-game/js/dead_cow.png')")
    $(this).fadeOut('slow', function () {
        $(this).remove()
    })
    lose_life()
}


$start_button.click(go_to_game)

