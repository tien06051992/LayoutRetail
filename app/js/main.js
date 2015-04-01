
$(document).ready(function () {

    $(window).scroll(function () {
        $(this).scrollTop() > 450 ?
                $("#go-to-top").fadeIn() : $("#go-to-top").fadeOut()
    }),
            $("#go-to-top").click(function () {
        return $("body, html").animate({scrollTop: 0}, 400), !1
    })
    $('.dropdown-toggle').dropdown()
});
