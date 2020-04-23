$('.parallax-window').parallax({imageSrc: './images/top-page.jpg'});

ityped.init(document.querySelector("#ityped"), {
    strings: ['The Takatsuna seminar preparation room.'],
    disableBackTyping: true,
    typeSpeed:  100,
})

$(function() {
    $('.accordion-menu').hide();

    $('.accordion-click').click(function() {
        $(this).next().slideToggle();
    });
});