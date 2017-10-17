var $start_button = $(".start_button");

function cowTimeRelease() {
    createCow(5, 4000)
}

function createCow(columnNumber, fallTime) {

    horizontalPositions = [0,1,2,3,4,5]
    horizontalPosition = horizontalPositions[columnNumber]

    var $containerDiv = $("<div class='cow_target_container absolute'><span class='parachute_target'></span>" +
        "<span class='cow_target'></span></div>")
    $containerDiv.css('top','-177px')
    $containerDiv.css('left', columnNumber+ 'px')
    $(".play_area").append($containerDiv);
    console.log('fish')
    $containerDiv.animate({ top: '343px'}, fallTime, function () {
    })
}

// Switch between main page to play page
function go_to_game() {
    $(".game_title").css("display", "none")
    $(".play_area").css("display","block")
    setInterval(cowTimeRelease, 3000)
}
$start_button.click(go_to_game)
