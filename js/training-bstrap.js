$(document).ready(function() {
	let stt = 0;
	let starimg = $('img.slide:first').attr('stt');
	let endimg = $('img.slide:last').attr('stt');
	$('img.slide').each(function(){ 
		if($(this).is(':visible'))
			
			stt = $(this).attr('stt');
	});
	$('#next').click(function() {
		if (stt == endimg) {
			stt = -1;
		}
		next = ++stt;
		$('img.slide').hide();
		$('img.slide').eq(next).show(); 
	});
	$('#prev').click(function() {
		if (stt == starimg) {
			stt = endimg;
			prev = stt++;
		}
		prev = --stt;
		$('img.slide').hide();
		$('img.slide').eq(prev).show();
	});
	// autoplay slideshow
	setInterval(function(){
		$('#next').click();
		$('#next').animate({marginLeft: '-1137px'});
	}, 3000);

});