// lender slider
$(document).on('ready', function() {

  $(".score-slide").slick({
   dots: false,
   arrows: false,
   autoplay:true,
   infinite: true,
   speed: 2000,
   centerMode: false,
   slidesToShow: 2,
   slidesToScroll: 2,
   variableWidth: false,
   responsive: [

     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: false
       }
     }
 ]
 });

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

 });
