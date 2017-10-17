

$('body').on('click', '.cow_target', function(e) {
    save_cow(e)
    rocket_cow()
    remove_paracute()
})

function save_cow(e) {
    var clicked_cow = e.target

    clicked_cow.classList.remove('cow_target')
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
    $('.cow_target').css('background-image',"url('../img/cow-with-rocket-100px.png')")
    $('.cow_target').css('z-index','4')
    $('.cow_target').animate({
            top: 490,
            left: 700
        }, 750,
        remove_cow($('.cow_target'))
}

function  remove_paracute() {
    remove_cow($('.paracute_target'))

}
