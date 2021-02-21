const logo = document.querySelector('#startLogo');
const header = document.querySelector('header');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1200,
    triggerElement: header,
    triggerHook: 0
})
// .addIndicators()
.setPin(header)
.addTo(controller);

scene.on('progress', ( event ) => {
    let pixelProgress = event.progress;
    console.log(pixelProgress);
    if (pixelProgress <= 1 && pixelProgress >= 0.5) {
        header.setAttribute('class', 'headerAni');
        logo.setAttribute('class', 'logoAni');
    } else {
        header.removeAttribute('class', 'headerAni');
    }
});
