$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
 });


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.two", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.three",    1, {y:  "100%"}, {y: "-30%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.four", 1, {y: "100%"}, {y: "-70%", ease: Linear.easeNone}) // in from top
        .fromTo("section.panel.five", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.six",    1, {x:  "100%"}, {x: "-50%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.seven", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
        .fromTo("section.panel.eight",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.nine", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "600%"
        })
        
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

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
        .addIndicators() // add indicators (requires plugin)

        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            triggerHook: 0.50, // show, when scrolled 10% into view
            duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal4", "visible") // add class to reveal
        .addIndicators() // add indicators (requires plugin)

        .addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: "#trigger5",
            triggerHook: 0.75, // show, when scrolled 10% into view
            duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal5", "visible") // add class to reveal
        .addIndicators() // add indicators (requires plugin)

        .addTo(controller);
});

