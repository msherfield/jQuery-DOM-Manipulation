







$('.item a').on('click', function (e) {
    e.preventDefault()
    const href = $(this).attr('href')
    $('.section').removeClass('active')
    $(href).addClass('active')
});