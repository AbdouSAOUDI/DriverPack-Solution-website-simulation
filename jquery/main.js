$(document).ready(function () {
	$('.loading').delay (1000).slideUp();
	//alert($('.section4 .right p').css('font-size'));
});

var windowHeight = $(window).outerHeight();
var windowWidth = $(window).outerWidth();
$('header').height(windowHeight);
//$('.section11').height(windowHeight);

var sec1Width = $('.section1 .art').outerWidth ();
var sec1ArtWidth = $('.section1 .art article').outerWidth ();
var sec1ArtMargin = (sec1Width - sec1ArtWidth * 3) / 2;
$('.section1 .art .middle').css ('margin-left', sec1ArtMargin);

var sec6ImgWidth = $('.section6 ul li a img').width ();
var sec6A = $('.section6 ul li a');

$('.section11').bind ('mouseenter mousemove hover', function () {
	//$(this).find('img').animate({ 'width': 100 }, 500);
	$('.section11 .n1').animate ({ 'opacity' : 1 }, 500, function () {
		$(this).find('p').animate ({ 'opacity' : 1 }, 500);
		$('.section11 .n2').animate ({ 'opacity' : 1}, 500, function () {
			$(this).find('p').animate ({ 'opacity' : 1 }, 500);
			$('.section11 .n3').animate({ 'opacity' : 1 }, 500, function () {
				$(this).find('p').animate({ 'opacity' : 1 }, 500);
				//alert ('');
			});
		});
	});
});