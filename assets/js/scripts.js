// lender slider
$(document).on('ready', function() {
   $(".lender-slide").slick({
    dots: false,
    infinite: true,
 	speed: 300,
    centerMode: false,
    slidesToShow: 8,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 6,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true,
	        variableWidth: false
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true,
	        variableWidth: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2,
	        variableWidth: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        variableWidth: false
	      }
	    }
  ]
  });

// page down script
  $(".page-down").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});


// carousel script
$('.carousel').carousel({
  interval: 3000
})


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