$(document).ready(function(){

	// Add font-size icon
	$('#container').append('<button id="font-size">Change font size</button>');
	
	var font_sizes = ['10px', '11px', '12px', '13px', '14px', '15px', '15px', '14px', '13px', '12px', '11px', '11px'],
	current_font_size = 2;
	
	$('#font-size').click(function(){
		current_font_size++;
		if (current_font_size > (font_sizes.length-1)) current_font_size = 0;
		console.log(current_font_size);
		$('body').css('font-size', font_sizes[current_font_size]);
		// @todo cookie
	});
	
	// Markup enhancement
	$('form.select fieldset.limit').before('<div style="clear:both"></div>');
		
	// 	Switch component
	$('.switch > span').click(function(){
		if ( ! $(this).is('.active')) {
			$(this).siblings('.active').removeClass('active').end().addClass('active');
		}
	});

});