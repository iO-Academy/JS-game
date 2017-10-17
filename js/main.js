var $start_button = $(".start_button");

function cow_time_release() {
    create_cow(5, 4000)
}

function create_cow(column_number, fall_time) {

    horizontal_positions = [0,1,2,3,4,5]
    horizontal_position = horizontal_positions[column_number]

    var $container_div = $("<div class='cow_target_container absolute'><span class='parachute_target'></span>" +
        "<span class='cow_target'></span></div>")
    $container_div.css('top','-177px')
    $container_div.css('left', column_number+ 'px')
    $(".play_area").append($container_div);
    console.log('fish')
    $container_div.animate({ top: '343px'}, fall_time, function () {
    })
}

// Switch between main page to play page
function go_to_game() {
    $(".game_title").css("display", "none")
    $(".play_area").css("display","block")
    setInterval(cow_time_release, 3000)
}
$start_button.click(go_to_game)
