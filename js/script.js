$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
 });


 //var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    //var wipeAnimation = new TimelineMax()
         // in from top
         // in from left
         // in from right
         // in from top
          // in from right
        // in from top
         // in from top


    // create scene to pin and link animation
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "900%"
    })
    .setPin("#pinContainer")
    .addIndicators()
    .addTo(controller); // add indicators (requires plugin)

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t1",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.two", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#triggers #t2",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.three", 1, {y: "100%"}, {y: "-30%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t3",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.four",3, {y: "100%"}, {y: "-70%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t4",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.five",1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t5",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.six",1, {x:  "100%"}, {x: "-78%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t6",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.seven",1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: "#triggers #t7",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.eight",1, {x:  "100%"}, {x: "-79.5%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t8",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.nine",1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t9",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.ten",1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}))
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    
    $('nav a').on('click',function() {
        controller.scrollTo($(this).attr('href')); 
    });











        new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0.40, // show, when scrolled 10% into view
            duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal1", "visible") // add class to reveal
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            triggerHook: 0.65, // show, when scrolled 10% into view
            duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal2", "visible") // add class to reveal
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 0.65, // show, when scrolled 10% into view
            duration: "40%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal3", "visible") // add class to reveal
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            triggerHook: 0.50, // show, when scrolled 10% into view
            duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal4", "visible") // add class to reveal
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger5",
            triggerHook: 0.75, // show, when scrolled 10% into view
            duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal5", "visible") // add class to reveal
        .addTo(controller);


        var targetSection = 2;
        var targetPos = scene.scrollOffset() + (scene.duration()*(targetSection - 1));
        controller.scrollTo(targetPos);
});


var elem = document.querySelectorAll('.main-carousel');
for (var i=0, len = elem.length; i < len; i++) {
    var carouselElem = elem[i];
    new Flickity (carouselElem, {
        cellAlign: 'center',
        adaptiveHeight: true,
        wrapAround: true,
        percentPosition: false,
        resize: true,
    })
    

}





