// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active'); 
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });


});

//scroll to top button
// ----------- croll --------------//
(function ($) {
    //Scroll to Top
    function headerStyle() {
        if ($('.header').length) {
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 185) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    }
    headerStyle();
    // Scroll to Target
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    $(window).on('scroll', function () {
        headerStyle();
    });


})(window.jQuery);
$(".has-dropdown-1 .menu-link").click(function () {
    $(".product-dropdown").toggleClass("active");
});

new WOW().init();
// sticky menu
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.header').addClass('sticky')
    } else{
        $('.header').removeClass('sticky')
    }
});

// 
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(".slider").owlCarousel({
    items: 1,
    responsive: {
        1200: { item: 1, },// breakpoint from 1200 up
        992: { items: 1, },
        768: { items: 1, },
        480: { items: 1, },
        0: { items: 1, }
    },
    rewind: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000, //slide speed smooth
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
    margin:0,
    animateOut: ['fadeOut'], // default: false
    animateIn: ['fadeIn'], // default: false
    center: false,
});

$(".slider-product").owlCarousel({
    items: 1,
    responsive: {
        1200: { item: 1, },// breakpoint from 1200 up
        992: { items: 1, },
        768: { items: 1, },
        480: { items: 1, },
        0: { items: 1, }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000, //slide speed smooth
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
    margin:0,
    animateOut: ['fadeOut'], // default: false
    animateIn: ['fadeIn'], // default: false
    center: false,
});

$(".slider-partner").owlCarousel({
    items: 1,
    responsive: {
        1200: { item: 1, },// breakpoint from 1200 up
        992: { items: 1, },
        768: { items: 1, },
        480: { items: 1, },
        0: { items: 1, }
    },
    rewind: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000, //slide speed smooth
    dots: true,
    dotsEach: false,
    loop: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
    margin:0,
    animateOut: ['fadeOut'], // default: false
    animateIn: ['fadeIn'], // default: false
    center: false,
});
