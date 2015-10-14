/* Script for navigating around my website */

$(document).on('ready', function(){	
	$('.js-nav-btn').on('click', function(e){
		var section = e.currentTarget.id;
		if (section === 'portfolio') section = 'index';
	    window.open(section + '.html', '_self');
	});
	$('.sidebar-title').on('click', function() {
		window.open('index.html', '_self');
	});

});