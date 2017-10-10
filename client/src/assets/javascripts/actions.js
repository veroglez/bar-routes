$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 10) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }
});
