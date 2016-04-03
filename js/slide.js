(function() {
	var card = document.querySelector('.card');
	var navLinks = document.querySelectorAll('.js-card__nav');
	Array.prototype.forEach.call(navLinks, function(item) {
	  item.addEventListener('click', function(event) {
	    event.preventDefault();
	    card.classList.toggle('slide-in');
	    card.classList.toggle('slide-out');
	    setTimeout(function() {
	      window.location.href = item.href;
	    }, 500)
	  })
	});
})();