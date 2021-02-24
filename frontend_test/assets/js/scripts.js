$(window).on('load', function(){
	$('#modal').show();
	$('#bg-wrapper').addClass('active');
});
$('#close_modal').on('click', function(){
	$('#modal').hide();	
	$('#bg-wrapper').removeClass('active');
});