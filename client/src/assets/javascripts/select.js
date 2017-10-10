$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 10) {
        $(".navbar").addClass("scrolling");
        console.log('holis');
    } else {
        $(".navbar").removeClass("scrolling");
    }
});
