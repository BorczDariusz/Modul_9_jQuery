$(function(){
    var carouselList = $("#carousel ul");
    var intervalSet = window.setInterval(changeSlide, 5000);
  
    function changeSlide() {
    	carouselList.animate({'marginLeft': -400}, 1200, moveFirstSlide);
    }

    function moveFirstSlide() {
  		var firstItem = carouselList.find('li:first');
  		var lastItem = carouselList.find('li:last');
    	lastItem.after(firstItem);
    	carouselList.css({marginLeft: 0});
    }

    function moveSlideBack() {
    	var firstItem = carouselList.find('li:first');
  		var lastItem = carouselList.find('li:last');
    	firstItem.before(lastItem);
    	carouselList.css({marginLeft: '-400px'}); 
    }

    function clearMyInterval() {
    	window.clearInterval(intervalSet);
    	intervalSet = window.setInterval(changeSlide, 3000); 
    }
    
    $('#prevButton').click(function() {
    	clearMyInterval(); 
    	moveSlideBack();
    	carouselList.animate({'marginLeft': 0}, 1200);
    });

    $('#nextButton').click(function() {
    	clearMyInterval();
    	changeSlide();
    });
});