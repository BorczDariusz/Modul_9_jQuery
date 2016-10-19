$(document).ready(function() { 
	$('body').css('text-align', 'center');

    $('span:odd').css('color', 'red');
    $('span:odd')
    $('#mainDiv').css('background', 'pink');

    var paragraphs = $('p');

	paragraphs.each(function(index, elem) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(elem).append(button); 
	});

	$('button').click(function() {
		alert($(this).attr('data-tmp'));
		$(this).fadeTo('slow', '0.25');
	});

	$('button').mouseover(function() {
		$(this).css('background', 'white');
	});

	$('#mainDiv').dblclick(function() {
		$(this).fadeOut('fast');
	});
});