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
	        slidesToScroll: 2,
	        variableWidth: false
	      }
	    }
  ]
  });

// page down script
  $(".slider-page-down").on('click', function(event) {
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

// carousel script
$('.carousel').carousel({
  interval: 3000
})

// select script
var select = '<option>Your Current Age </option>';
   for (i=18;i<=75;i++){

       if (i <= 74) {
          select += '<option val=' + i + '>' + i + ' years old</option>';
       } else if (i == 75) {
           select += '<option val=' + i + '>' + i + ' + years old</option>';
       }
   }
   $('.quote-select-code').html(select);


// list grid view script
$('.click-today').on('click',function(e) {

   if ($(this).hasClass('score-list-box')) {
       $('.score-today .score-listgrid').removeClass('score-grid-box').addClass('score-list-box');
   }
   else if($(this).hasClass('score-grid-box')) {
       $('.score-today .score-listgrid').removeClass('score-list-box').addClass('score-grid-box');
   }
});
$('.click-last-day').on('click',function(e) {
   if ($(this).hasClass('score-list-box')) {
       $('.score-last-day .score-listgrid').removeClass('score-grid-box').addClass('score-list-box');
   }
   else if($(this).hasClass('score-grid-box')) {
       $('.score-last-day .score-listgrid').removeClass('score-list-box').addClass('score-grid-box');
   }
});

$('.click-today.score-grid-box').on('click',function(e) {
    $('.click-today.score-grid-box').addClass('active');
    $('.click-today.score-list-box').removeClass('active');
});
$('.click-today.score-list-box').on('click',function(e) {
    $('.click-today.score-list-box').addClass('active');
    $('.click-today.score-grid-box').removeClass('active');
});

$('.click-last-day.score-grid-box').on('click',function(e) {
    $('.click-last-day.score-grid-box').addClass('active');
    $('.click-last-day.score-list-box').removeClass('active');
});
$('.click-last-day.score-list-box').on('click',function(e) {
    $('.click-last-day.score-list-box').addClass('active');
    $('.click-last-day.score-grid-box').removeClass('active');
});


$(function() {
    $(".percircle").each(function() {
        var a = '<div class="slice"><div class="bar"></div><div class="fill"></div></div>',
            b = $(this).data("percent"),
            c = 3.6 * b;
        $(this).find("span").text(b + "%"), $(this).append(a), b >= 50 ? ($(this).find(".slice").css("clip", "rect(auto,auto,auto,auto)"), $(this).find(".bar").css("transform", "rotate(" + c + "deg)"), $(this).addClass("gt50")) : ($(this).find(".slice").css("clip", "rect(0,1em,1em,.5em)"), $(this).find(".bar").css("transform", "rotate(" + c + "deg)"))
    })
});


$('.score-calendar').supercal({
  todayButton: true,
  showInput: false,
  weekStart: 1,
  widget: true,
  cellRatio: 1,
  format: 'd/m/y',
  footer: false,
  dayHeader: true,
  mode: 'tiny',
  animDuration: 200,
  transition: '',
  tableClasses: 'table table-condensed',
  hidden: true,
  setOnMonthChange: true,
  condensed: false
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
