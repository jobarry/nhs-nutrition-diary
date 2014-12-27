jQuery(document).ready(function(){
	$("#btn_submit_settings").click(function(){
			
	//TODO replace hard-coded value with same db getters as onLoad.js
	var caloriesRequirement = 2000;
	var proteinRequirement = 45;
	var fluidRequirement = 3150;
	var activityLevel = 1;
	
	// Value of decrease/increase adjustments by dietician	
	var calsToAdjust = parseInt($("#cals").val());
	var proteinToAdjust = parseInt($("#protein").val());
	var fluidToAdjust = parseInt($("#fluid").val());
	var activityToAdjust = parseFloat($("#activity").val());

	$("#currentCals").html(calsToAdjust+ caloriesRequirement);
	$("#currentProtein").html(proteinToAdjust+ proteinRequirement);
	$("#currentFluid").html(fluidToAdjust+ fluidRequirement);
	$("#currentActivity").html(activityToAdjust+ activityLevel);
	});
	
    $('.qtyPlusCal').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#cals').val());
        if (!isNaN(currentVal)) {
            $('#cals').val(currentVal + 25);
        } else {
            $('#cals').val(0);
        }
    });
    $(".qtyMinusCal").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#cals').val());
        if (!isNaN(currentVal)) {
            $('#cals').val(currentVal - 25);
        } else {
            $('#cals').val(0);
        }
    });
    $('.qtyPlusProt').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#protein').val());
        if (!isNaN(currentVal)) {
            $('#protein').val(currentVal + 1);
        } else {
            $('#protein').val(0);
        }
    });
    $(".qtyMinusProt").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#protein').val());
        if (!isNaN(currentVal)) {
            $('#protein').val(currentVal - 1);
        } else {
            $('#protein').val(0);
        }
    });
    $('.qtyPlusFluid').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#fluid').val());
        if (!isNaN(currentVal)) {
            $('#fluid').val(currentVal + 50);
        } else {
            $('#fluid').val(0);
        }
    });
    $(".qtyMinusFluid").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#fluid').val());
        if (!isNaN(currentVal)) {
            $('#fluid').val(currentVal - 50);
        } else {
            $('#fluid').val(0);
        }
    });
    $('.qtyPlusActivity').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseFloat($('#activity').val());
        if (!isNaN(currentVal)) {
            $('#activity').val(currentVal + 0.1).toFixed(2);
        } else {
            $('#activity').val(0);
        }
    });
    $(".qtyMinusActivity").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseFloat($('#activity').val());
        if (!isNaN(currentVal)) {
            $('#activity').val(currentVal - 0.1);
        } else {
            $('#activity').val(0);
        }
    });
    
/*$("#btn_submit_settings").click(function(){
    var currentFluid = $("#currentFluid").text();
    var me = $("#fluid").val();
    var lol = currentFluid + me;
    $("#currentFluid").text(lol);
});*/
    

});