$('.view-more').click(function () {
    closeAll();
    var mapId = "#map-" + this.id;
    $(mapId).addClass("show");
});

$('.btn-back').click(function () {
    closeAll();
});

function closeAll() {
    var maps = $('.map-collapse');
    maps.each(function () {
        $(this).removeClass('show');
    });
}