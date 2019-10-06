var zoombox;
var zoombox_image;

$(document).ready(() => {
	zoombox = $("#ImageZoom");
	zoombox_image = $("#ImageZoom-Img");
});
function viewimg(url){
	zoombox_image.attr("src", url);
	zoombox.show(400);
}
function hideimg(){
	zoombox.hide(200);
}