//banner-carousel
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: 15000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
let bannercarousel1 = function(){
let owl = $('.banner-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next-0').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev-0').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
};
bannercarousel1();
//==Reason-Customer==/
$('.customer-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        },
    }
});
//==Resons-carouls==//
$('.about-us-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav: false,
    autoplay: 3000,
    responsive:{
        0:{
            items:1,
            autoplay: 1000
        },
        600:{
            items:1,
            margin:20,
        },
        768:{
            items:1,
            margin:50,
        },
        1024:{
            items:2,
            margin:20,
        },
        1300:{
            items:2,
            margin:30,
        }
    }
})
//==Newservice-carouls==//
$('.newService-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    autoplay: 20000,
    responsive:{
        0:{
            items:1,
        },
        599:{
            items:1,
        },
        600:{
            items:1,
            margin:20,
        },
        768:{
            items:2,
            margin:50,
        },
        900:{
            items:3,
            margin:20,
        },
        1300:{
            items:3,
            margin:50,
        }
    }
})
let newService = function(){
let owl1 = $('.newService-carousel');
owl1.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl1.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl1.trigger('prev.owl.carousel', [300]);
})
}
 newService();
//prove-carousel//
$('.prove-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    autoplay: 3000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        768:{
            items:2,
            margin:50,
        },
        1000:{
            items:2,
        }
    }
})
var owl2 = $('.prove-carousel');
owl2.owlCarousel();
// Go to the next item
$('.owl-next-2').click(function() {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev-2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
})
//share-news-carousel//
 $('.share-news-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    autoplay: 20000,
    startPosition: 0,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            margin:20,
        },
        768:{
            items:2,
            margin:50,
        },
        900:{
            items:3,
            margin:20,
        },
        1300:{
            items:3,
            margin:50,
        }
    }
})
let shareNews = function(){
let owl3 = $('.share-news-carousel');
owl3.owlCarousel();
// Go to the next item
$('.owl-next-6').click(function() {
    owl3.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev-6').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl3.trigger('prev.owl.carousel', [300]);
})
}
shareNews();
