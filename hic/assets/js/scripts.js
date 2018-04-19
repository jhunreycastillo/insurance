
$(function() {
       $(".dropdown").hover(
           function(){
             $(this).addClass('open-dropdown'),
             $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
           },
           function(){
             $(this).removeClass('open-dropdown'),
             $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
           }
       );
   });



// mobile menu toggle
var theToggle = document.getElementById('toggle');
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}


 
// Without JQuery
var slider = new Slider('#val', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider = new Slider('#val2', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider = new Slider('#val3', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});