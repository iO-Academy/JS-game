$('body').on('click', '.cowTarget', function(e) {
    saveCow(e)
})

function saveCow(e) {
    var clickedCow = e.target
    clickedCow.classList.remove('cowTarget')
    console.log('pet the cow')
}