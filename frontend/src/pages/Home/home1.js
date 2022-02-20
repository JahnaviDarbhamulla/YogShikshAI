gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
});

// // hills animation
// scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
// scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0)
// scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
// scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
// scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
// scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
// scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
// scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
// scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0)

//animate text
scene1.to("#text", { y: 9 * speed }, 0)



/*   Bird   */
// gsap.fromTo("#bird", { opacity: 1 }, {
//     y: -250,
//     x: 800,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: ".scrollElement",
//         start: "15% top",
//         end: "60% 100%",
//         scrub: 4,
//         onEnter: function() { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
//         onLeave: function() { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
//     }
// })


/* Clouds  */
// let clouds = gsap.timeline();
// ScrollTrigger.create({
//     animation: clouds,
//     trigger: ".scrollElement",
//     start: "top top",
//     end: "70% 100%",
//     scrub: 1,
// });
//
// clouds.to("#cloud1", { x: 500 }, 0)
// clouds.to("#cloud2", { x: 1000 }, 0)
// clouds.to("#cloud3", { x: -1000 }, 0)
// clouds.to("#cloud4", { x: -700, y: 25 }, 0)



/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "top top",
    end: "2200 100%",
    scrub: 1,
});

//sun motion
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.00)

//bg change
sun.fromTo("#text1", { y: 200 }, { y: -200 }, 0)
// sun.to("#text1", { y: 9 * speed }, 5)
sun.to("#sun", { attr: { offset: "0.15" } }, 0.00)
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.00)
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.00)
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.00)
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.00)




/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 4,
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1)
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1)
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2)
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3)
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3)




/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
    animation: sun2,
    trigger: ".scrollElement",
    start: "2200 top",
    end: "2800 70%",
    scrub: 1,
});




sun2.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.8" } }, 0)
sun2.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.5" } }, 0)

sun2.to("#sun", { attr: { "stop-color": "#F98404" } }, 0)
sun2.to("#bg_grad stop:nth-child(3)", { attr: { "stop-color": "#F98404" } }, 0)

sun2.to("#bg_grad stop:nth-child(2)", { attr: { "stop-color": "#F98404" } }, 0)
sun2.to("#bg_grad stop:nth-child(4)", { attr: { "stop-color": "#fdca40" } }, 0)


// sun2.to("#bg_grad stop:nth-child(2)", { attr: { "stop-color": "white" } }, 0)

sun2.to("#bg_grad2 stop:nth-child(6)", { attr: { "stop-color": "#FF00E4" } }, 0)
sun2.to("#bg_grad2 stop:nth-child(4)", { attr: { "stop-color": "#5454C5" } }, 0)
sun2.to("#bg_grad2 stop:nth-child(5)", { attr: { "stop-color": "#FF00E4" } }, 0)




//reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
e.preventDefault();
if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
}
else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
}
});
