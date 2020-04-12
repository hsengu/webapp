var lastId,
    navMenu = $("#myNavbar"),
    navMenuHeight = navMenu.outerHeight() + 15,
    menuItems = navMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
            if (item.length) {
        return item;
    }
});

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - navMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + navMenuHeight;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

(function () {
    var parallax = document.querySelectorAll("div.container-fluid"),
    speed = 0.1;
    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var windowYOffset = window.pageYOffset,
               elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            el.style.backgroundPosition = elBackgrounPos;
        });
    };
})();