var start_button = document.querySelector(".start_button");
var instruction_button = document.querySelector(".instruction_button");
var go_to_start = document.querySelector(".go_to_start")
var pause = document.querySelector(".pause_button")

// Switch between main page to play page
function go_to_game() {
    document.querySelector(".game_title").style.display = "none"
    document.querySelector(".play_area").style.display = "block"
}
start_button.addEventListener("click", go_to_game)

// Switch between game page to pause page
function go_to_pause() {
    document.querySelector(".game_pause").style.display = "block"
}
pause.addEventListener("click", go_to_pause)

// *******************TEMP***************************
var resume = document.querySelector(".resume")

function back_to_game() {
    document.querySelector(".game_pause").style.display = "none"
    document.querySelector(".play_area").style.display = "block"
}
resume.addEventListener("click", back_to_game)

// **************************************************