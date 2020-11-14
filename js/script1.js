$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.two", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.three",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
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
});