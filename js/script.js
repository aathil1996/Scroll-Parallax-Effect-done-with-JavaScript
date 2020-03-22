const myScroll = new TimelineMax();

myScroll
        .set('.me', {scale: 5, transform:'rotate(35deg)'})
        .to('.me', {scale:1, transform:'rotate(0)'});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.parallax1',
    duration: '100%',
    tweenChanges: true
})

        .setTween(myScroll)
        .addTo(controller);