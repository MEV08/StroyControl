$(function() {

    let header = $('#header')
    let intro = $('#intro')
    let introH
    let scrollPos = $(window).scrollTop()
    let nav = $('#nav')
    let navToggle = $('#navToggle')
    let navLink = $('#navLink')


    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight()
        scrollPos = $(this).scrollTop()
        if(scrollPos > introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    })

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()
        let $this = $(this)
        let elementID = $(this).data('scroll') 
        let elementOffset = $(elementID).offset().top

        nav.removeClass('show')
        navToggle.removeClass('active')
        $('#nav a').removeClass('active-link')
        $this.addClass('active-link')
        

        $('html, body').animate({
            scrollTop: elementOffset - 64
        }, 600)
    })
    

    

    navToggle.on('click', function(event) {
        event.preventDefault()
        nav.toggleClass('show')
        
        if(navToggle.hasClass('active')) {
            navToggle.removeClass('active')
        } else {
            navToggle.addClass('active')
        }
    })

    navLink.on('click', function(event) {
        event.preventDefault()

        if(navLink.hasClass('active-link')) {
            navLink.removeClass('active-link')
        } else {
            navLink.removeClass('active-link')
        }
    })

    let slider = $('#reviewsSlider')
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, 
        arrows: false,
        dots: true
    });
          
})