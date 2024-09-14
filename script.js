Shery.mouseFollower();

Shery.makeMagnet(".magnet-target");

var nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    var scroll = window.scrollY
    console.log(typeof(scroll));
    if (scroll >= 50) {
        nav.style.position = 'fixed'
        nav.style.backgroundColor = 'gray'
    }
})

Shery.textAnimate(".text-target" /* Element to target.*/ , {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});