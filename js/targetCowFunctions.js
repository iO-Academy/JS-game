


$('body').on('click', '.js_clickable_cow', function(e) {
    console.log(e)
    save_cow(e)

})

function save_cow(e) {
    var clicked_cow = e.target
    var $cow_container = $(clicked_cow).parent()
    $(clicked_cow).removeClass('js_clickable_cow')
    $cow_container.addClass('rocket_cow')
    rocket_cow($cow_container)
}

function increment_score() {
    var score_element = parseInt(document.querySelector(".score_value").textContent) + 1
    document.querySelector(".score_value").textContent = score_element
}

function lose_life() {
    var lives_element = get_lives() - 1
    document.querySelector(".lives_value").textContent = lives_element

    console.log(lives_element)
    if (lives_element === 0) {
        end_game()
    }

}

function get_lives() {
    return parseInt(document.querySelector(".lives_value").textContent)

}

function end_game() {
    $('.cow_target_container').stop()
    $('.cow_target_container').remove()
    clearTimeout(timer)
    document.querySelector(".play_area").style.display = "none"
    document.querySelector(".game_over").style.display = "block"
    $(".score_result").text(document.querySelector(".score_value").textContent)

}


//remove cow which falls down
function remove_cow(cow) {
    setTimeout(function() {
        $(cow).fadeOut('slow', function () {
            $(this).remove()
        })
    }, 200);
}


//rocket on click, move to bottom corner
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

