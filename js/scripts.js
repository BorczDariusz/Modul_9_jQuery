$(function(){
	var carouselList = $("#carousel ul");

	setInterval(changeSlide, 5000) 

	function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 1200, moveFirstSlide());
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	$('#prevButton').click(function() {
		carouselList.animate({'marginleft':+400}, 500, moveFirstSlide());
	});

	$('#nextButton').click(function() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide());
	});

});
