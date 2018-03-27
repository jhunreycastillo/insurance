// DESKTOP - STATE & AGE FORM VALIDATION ===================================================
$(document).ready(function() {
    var state_id = "state_id";
    var age_id = "age_id";
    
    $("#button-steps").click(function() {
        if (($("#state_id").val() == 0) && ($("#age_id").val() == 0)) {
                $('[data-id=' + state_id + ']').addClass("error-tolltip");
                $('[data-id=' + age_id + ']').addClass("error-tolltip");
                $('#state_id').tooltip('show');
                $('#age_id').tooltip('show');
            
        } else if (($("#state_id").val() > 0) && ($("#age_id").val() == 0)) {
                $('[data-id=' + state_id + ']').removeClass("error-tolltip");
                $('[data-id=' + age_id + ']').addClass("error-tolltip");
                $('#age_id').tooltip('show');
                $('#state_id').tooltip('hide');
            
        } else if (($("#state_id").val() == 0) && ($("#age_id").val() > 0)) {
                $('[data-id=' + state_id + ']').addClass("error-tolltip");
                $('#state_id').tooltip('show');
                $('#age_id').tooltip('hide');
                $('[data-id=' + age_id + ']').removeClass("error-tolltip");
        } else {
                $('#content-02').fadeIn();
                $('#content-01').hide();
                $('[data-id=' + state_id + ']').removeClass("error-tolltip");
                $('[data-id=' + age_id + ']').removeClass("error-tolltip");
        }
    });
    
});

// MOBILE - STATE & AGE FORM VALIDATION ===================================================
$(document).ready(function() {
    var state_id_mobile = "state_id_mobile";
    var age_id_mobile = "age_id_mobile";
    
    $("#button-steps-mobile").click(function() {
        if (($("#state_id_mobile").val() == 0) && ($("#age_id_mobile").val() == 0)) {
                $('[data-id=' + state_id_mobile + ']').addClass("error-tolltip");
                $('[data-id=' + age_id_mobile + ']').addClass("error-tolltip");
                $('#state_id_mobile').tooltip('show');
                $('#age_id_mobile').tooltip('show');
            
        } else if (($("#state_id_mobile").val() > 0) && ($("#age_id_mobile").val() == 0)) {
                $('[data-id=' + state_id_mobile + ']').removeClass("error-tolltip");
                $('[data-id=' + age_id_mobile + ']').addClass("error-tolltip");
                $('#age_id_mobile').tooltip('show');
                $('#state_id_mobile').tooltip('hide');
            
        } else if (($("#state_id_mobile").val() == 0) && ($("#age_id_mobile").val() > 0)) {
                $('[data-id=' + state_id_mobile + ']').addClass("error-tolltip");
                $('#state_id_mobile').tooltip('show');
                $('#age_id_mobile').tooltip('hide');
                $('[data-id=' + age_id_mobile + ']').removeClass("error-tolltip");
        } else {
                $('#content-02').fadeIn();
                $('#content-01').hide();
                $('[data-id=' + state_id_mobile + ']').removeClass("error-tolltip");
                $('[data-id=' + age_id_mobile + ']').removeClass("error-tolltip");
        }
    });
    
});

// DETAILS COMPARE FORM VALIDATION ===================================================
$(document).ready(function() {
    
    $("#compare-button").click(function() {
        
        $('.required').each(function() {
            if ($(this).val() == "") {
                $(this).addClass('error-tolltip')
                $(this).tooltip('show');
            } else {
                $(this).removeClass('error-tolltip')
                $(this).tooltip('hide');
            }
        });
        
        if ( $('#compare-checkbox').prop('checked') == false ) { 
                $('#compare_error').fadeIn(); 
        } else {
                $('#compare_error').fadeOut();
        }
        
    });
    
});

