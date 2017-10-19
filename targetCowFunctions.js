
$('body').on('click', '.js_clickable_cow', function(e) {
    save_cow(e)


})

function save_cow(e) {
    var clicked_cow = e.target
    $(clicked_cow).removeClass('js_clickable_cow')
    $(clicked_cow).parent().addClass('rocket_cow')
    rocket_cow()
    increment_score()


}

function increment_score() {
    var score_element = $('.score_value')
    var current_score = parseInt(score_element.textContent)
    score_element.textContent = current_score + 1
}

function lose_life() {
    var lives_element = $('.lives_value')
    var current_lives = parseInt(lives_element.textContent)
    var updated_lives = current_lives - 1

    if (updated_lives === 0) {
        end_game()
    } else {
        lives_element.textContent = updated_lives
    }
}

function end_game() {
    
}

//remove cow which falls down
function remove_cow(cow) {
    setTimeout(function() {
        $(cow).fadeOut('slow')
    }, 200);
}


//rocket on click, move to bottom corner
function rocket_cow() {


    $('.rocket_cow .cow_target').css('background-image',"url('../JS-game/js/rocket_cow.png')")
    $('.rocket_cow .cow_target').css("height", "140px")
    $('.rocket_cow').css("z-index", "4")
    $('.rocket_cow .parachute_target').css("visibility", "hidden")

    $('.rocket_cow').stop()
    $('.rocket_cow').animate({

            top: 400,
            left: 700

        }, 750,
        function () {

            increment_score()
            remove_cow($('.rocket_cow'))
        })
}
