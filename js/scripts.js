$('.view-more').click(function () {
    var mapId = "#map-" + this.id;
    $(mapId).addClass("show");
    console.log($(mapId));
});