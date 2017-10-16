var $start_button = $(".start_button");

// Switch between main page to play page
function go_to_game() {
    $(".game_title").css("display", "none")
    $(".play_area").css("display","block")
}
$start_button.click(go_to_game)
