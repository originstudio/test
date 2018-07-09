// JavaScript Document
//載入Flash
var swfattr = {
wmode: "transparent",
SCALE: "exactfit"
};
swfobject.embedSWF("media/musicline.swf", "musicline", "800", "150", "10.0.0","","",swfattr);
swfobject.embedSWF("media/music.swf", "music", "40", "20", "10.0.0","","",swfattr);
swfobject.embedSWF("media/star.swf", "starSwf", "40", "20", "10.0.0","","",swfattr);

//bxSlider
$(document).ready(function(){
  $('.bxslider').bxSlider({
	  auto: true
	  ,pause:2000
	  ,captions: true
	  //,mode: 'vertical'
  });
});

