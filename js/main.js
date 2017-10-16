var start_button = document.querySelector(".start_button");

// Switch between main page to play page
function go_to_game() {
    document.querySelector(".game_title").style.display = "none"
    document.querySelector(".play_area").style.display = "block"
}
start_button.addEventListener("click", go_to_game)


// Remove cow
function remove_cow(cow) {
    if (parseInt(cow.style.top) >= 500) {
        $(".hitted").delay(200).show().fadeOut('slow')
        $(".hitted").removeClass("hitted")
    }
}