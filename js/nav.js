/* Script for navigating around my website */

$(document).on('ready', function(){	
	$('.js-nav-btn').on('click', function(e){
		var section = e.currentTarget.id;
		if (section === 'portfolio') section = '/';
	    window.open(section, '_self');
	});
	$('.sidebar-title').on('click', function() {
		window.open('/', '_self');
	});

});