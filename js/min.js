$(function() {
'use strict';

$('.our-services li').click(function () {

$(this).addClass ('selected').siblings().removeClass('selected');

$('.our-services .software > div').hide();

$($(this).data('class')).show();

});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:1000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

});