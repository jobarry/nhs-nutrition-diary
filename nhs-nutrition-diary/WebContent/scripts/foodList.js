/**
 * 
 */

$(document).ready(function(){
	
	var data =new FoodDataSingleton().foodData;
	
	var customMeals =["John Sandwich","Virk Super Sandwich","Robert Germany Sandwich","Bowen Dumpling"];
	var frequentFood = ["beef","apple","beer"];
	
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
				
				selection["portion"] = 1;
				if(!compareWithCurrentSelections(selection)){
				displaySelection(selection);
				
				}else{
					// notify the user this food already in list
					
				}
			},
			minLength: 3,
			
		});
		$('#myMeal').click(function(){
			
			
		});
	$('#newFood').click(function(){
			
		
		});
	
	$('#frequentFood').click(function(){
		
		
	})
		
});

function compareWithCurrentSelections(selection){
	var present = false;
	var children = $('#list').children('li');
		
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
	var children = $('#list').children('li');
	children.each(function(index,item){
		var obj = $(item);
		submitData.push(obj.data('food'));
	})
	return submitData;
}

function updateNutritionBreakDown(){
	var children = $('#list').children('li');
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



function displaySelection(selection){
	
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
		$('#list').append(li);
		updateNutritionBreakDown();
}

$(function(){
	/*$.ui.autocomplete.prototype._renderMenu =function(ul,items){
		
		
		console.log(items);
		
	}*/
	
	//$.ui.autocomplete.prototype._renderItemData = function(){}
	
	//$.ui.autocomplete.prototype._renderItem = function(table, item) {}
	
})
