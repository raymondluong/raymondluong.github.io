/* Script for navigating to the project pages as well as fading the other tiles on hover */

$(document).on('ready', function(){
	
	$('.tile-img').on('click', function(e){
		var url = e.currentTarget.id;
		if (url === 'apo') url = 'blank';
	    window.open(url + '.html', '_self');
	});
	$('.tile').fadeIn(1000);
	$('.tile').on('mouseover', function() {
		$('.tile').not(this).addClass('tile-fade');
	});
	$('.tile').on('mouseout', function() {
		$('.tile').not(this).removeClass('tile-fade');
	});

});