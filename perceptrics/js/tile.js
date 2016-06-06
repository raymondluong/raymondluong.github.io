var tileBtn = $('li.tiles-tile');
var allContent = $('li.content-item');
var contentWrap = $('.content-wrap');

tileBtn.on('click touchstart', function() {
  var self = $(this);
  var match = self.attr('data-tile');
  var allContent = $('li.content-item');
  var content = $('li#' + match);
  
  self.toggleClass('active');
  
  content.toggleClass('active');
  
 contentWrap.css({'transition-delay': '.35s'});
  
  return false;
});

$('.close').on('click touchstart', function() {
  if (allContent.hasClass('active') && tileBtn.hasClass('active')) {
    allContent.removeClass('active');
    setTimeout(function() {
      tileBtn.removeClass('active');
    }, 400);
    contentWrap.css({'transition-delay': '.0s'});
    
  }
});