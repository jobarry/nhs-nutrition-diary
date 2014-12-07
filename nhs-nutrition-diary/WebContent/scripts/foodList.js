/**
 * 
 */

$(document).ready(function(){
	
	var data =new FoodDataSingleton().foodData;
	var customMeals =["John Sandwich","Virk Super Sandwich","Robert Germany Sandwich","Bowen Dumpling"];
	var frequentFood = [data[3],data[100],data[90],data[102]];
	
			$('#search').autocomplete({
			source:function (request, response) {
				
            var term = $.ui.autocomplete.escapeRegex(request.term)
                , startsWithMatcher = new RegExp("^" + term, "i")
                , startsWith = $.grep(data, function(value) {
                    return startsWithMatcher.test(value.label || value.value || value);
                })
                , containsMatcher = new RegExp(term, "i")
                , contains = $.grep(data, function (value) {
                    return $.inArray(value, startsWith) < 0 && 
                        containsMatcher.test(value.label || value.value || value);
                });
            
            response(startsWith.concat(contains));
        },
			select:function(event,ui){
				var selection = ui.item;
				displaySelection(selection);
			},
			minLength: 3,
			
		});
		$('#myMeal').click(function(){
			$('.modal-title').text("My Meal");
			loadCustomMealView(customMeals)
			
		});
	$('#newFood').click(function(){
		
			$('.modal-title').text("New Food");
			loadNewFoodView();
		
		});
	
	$('#frequentFood').click(function(){
		$('.modal-title').text("Frequent Food");
		loadFrequentFoodView(frequentFood);
		
	})
		
});

function compareWithCurrentSelections(selection){
	
	var present = false;
	var children = $('.selection-list').children('li');
		children.each(function(index,item){
			var obj= $(item);
			var currentSelection = obj.data('food');
			if(currentSelection.label === selection.label){
				present = true;
			}
		});
	return present;
}

function submitData(){
	var submitData =[];
	var children = $('.selection-list').children('li');
	children.each(function(index,item){
		var obj = $(item);
		submitData.push(obj.data('food'));
	})
	return submitData;
}

function updateNutritionBreakDown(){
	var children = $('.selection-list').children('li');
	var protien =0;
	var calories = 0;
	var fluid = 0;
	children.each(function(index,item){
		var obj = $(item);
		var food = obj.data('food');
		var portion = food['portion'];
		protien += portion*parseInt(food['Protein.g']); 
		fluid += portion*parseInt(food['Water.g']);
		calories +=portion*parseInt(food['Energy.kcal']);
	});
	
	$('#calories').text(calories);
	$('#protien').text(protien);
	$('#fluid').text(fluid);
}

function loadNewFoodView(data){
	
	$('.modal-body').empty();
	
	var form = $('<form>',{
		"class":"form-newFood",
	}).appendTo('.modal-body');
	
	var nameField = $('<input>',{
		"class":"form-control",
		"type":"text",
		"placeholder":"food name",
	}).appendTo(form);
	
	var amountField = $('<input>',{
		"class":"form-control",
		"type":"text",
		"placeholder":"amount"
	}).appendTo(form);
	
	var protienField = $('<input>',{
		"class":"form-control",
		"type":"text",
		"placeholder":"protien(g)"
	}).appendTo(form);
	
	var carloriesField = $('<input>',{
		"class":"form-control",
		"type":"text",
		"placeholder":"carlories(kcal)"
	}).appendTo(form);
	
	var fluidField =$('<input>',{
		"class":"form-control",
		"type":"text",
		"placeholder":"water(ml)"
	}).appendTo(form);
}

function loadFrequentFoodView(data){
	$('.modal-body').empty();
	var list = $('<ul>',{
		"class":"list-group",
		"role":"menu"
	});
	$.each(data,function(index){
		var li =$('<li>',{
			"class":"list-group-item",
			"text":data[index].label	
		}).data('food',data[index]).bind('click',function(){
			displaySelection(data[index]);
		});
		li.appendTo(list);
	})
	
	$('.modal-body').append(list);
}

function loadCustomMealView(data){
	
	$('.modal-body').empty();
	var list = $('<ul>',{
		"class":"list-group",
		"role":"menu"
	});
	$.each(data,function(index){
		var li =$('<li>',{
			"class":"list-group-item",
			"text":data[index]	
		}).data('food',data[index]).bind('click',function(){
			//displaySelection(data[index]);
		});
		li.appendTo(list);
	})
	
	$('.modal-body').append(list);
	
	
}

function displaySelection(selection){
	
	if(!compareWithCurrentSelections(selection)){
			selection["portion"] = 1;
		var li = new createBasicLi(selection);
		var controlPanel = new createControlPanel();
		var deleteButton = new createDeleteButton('li');
		deleteButton.bind('click',updateNutritionBreakDown);
		var reduceButton = new createReduceButton(selection);
		reduceButton.bind('click',updateNutritionBreakDown);
		var accountButton = new createAccountButton(selection);
		var increaseButton = new createIncreaseButton(selection);
		increaseButton.bind('click',updateNutritionBreakDown);
		controlPanel.addItems([reduceButton,accountButton,increaseButton]);
		li.addItemToLeft(deleteButton);
		li.addItemToLeft(selection.label);
		li.addItemToRight(controlPanel);
		$('.selection-list').append(li);
		updateNutritionBreakDown();
		}else{
			
			alert("Selection already in list");
			
			
		}
}

$(function(){
	/*$.ui.autocomplete.prototype._renderMenu =function(ul,items){
		
		
		console.log(items);
		
	}*/
	
	//$.ui.autocomplete.prototype._renderItemData = function(){}
	
	//$.ui.autocomplete.prototype._renderItem = function(table, item) {}
	
})
