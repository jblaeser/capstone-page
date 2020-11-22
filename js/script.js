$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
 });


 //var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();



    // create scene to pin and link animation
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "900%"
    })
    .setPin("#pinContainer")
    .addTo(controller); 

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t1",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.two", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}))
    .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#triggers #t2",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.three", 1, {y: "100%"}, {y: "-30%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t3",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.four",3, {y: "100%"}, {y: "-70%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t4",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.five",1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) )
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t5",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.six",1, {x:  "100%"}, {x: "-78%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t6",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.seven",1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}))
    .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: "#triggers #t7",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.eight",1, {x:  "100%"}, {x: "-79.5%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t8",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.nine",1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#triggers #t9",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.ten",1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t2",
    })
    .setClassToggle(".hook-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t3"})
    .setClassToggle(".hook-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t3"})
    .setClassToggle(".problem-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t4"})
    .setClassToggle(".solution-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t5",offset: -310, })
    .setClassToggle(".branding-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t6", offset: 10, })
    .setClassToggle(".design-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t7", offset: -310, })
    .setClassToggle(".book-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t8", offset: 10, })
    .setClassToggle(".web-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t9"})
    .setClassToggle(".tools-link", "active") // add class toggle
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#t10"})
    .setClassToggle(".links-link", "active") // add class toggle
    .addTo(controller);


    
    $(document).on("click", "a[href^='#']", function (e) {
        var id      = $(this).attr("href"),
            $elem   = $(id)
            offset = $elem.offset().top
            

        if (id === "#t2") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * 1.0)}})
        }

        if (id === "#t3") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .9)}})
        }

        if (id === "#t4") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .87)}})
        }

        if (id === "#t5") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .8)}})
        }

        if (id === "#t6") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .913)}})
        }

        if (id === "#t7") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .8615)}})
        }
        
        if (id === "#t8") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * .9368)}})
        }
        if (id === "#t9") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * 1.0)}})
        }

        if (id === "#t10") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y: offset, offsetY: offset - (offset * 1.0)}})
        }

    });




    /*$('nav a').on('click',function(e) {
        controller.scrollTo($(this).attr('href')); 
        e.preventDefault();


                if (id === "#t2") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y:$elem}})

            console.log(id);

        }

        if (id === "#t3") {
            e.preventDefault()
            TweenMax.to(window, 2.0, {scrollTo: {y:$elem, offsetY:160}})

            console.log(id);

        }
    });*/











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





