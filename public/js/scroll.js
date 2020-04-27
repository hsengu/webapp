var lastId,
    navMenu = $("#navbarBasicExample"),
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
});