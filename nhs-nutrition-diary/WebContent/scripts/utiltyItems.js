//please import this file if you need 
//-------demo-----------
/* the demo below show how to use the function in this file

  $(document).ready(function(){

	
  	$('#test').append(createDeleteButton());// create a delete Button
 	$('#test').append(createControlButton('addButton'));//create a add Button
  	$('#test').append(createControlButton('reduceButton'));// create a reduce Button
  	$('#test').append(createAccountButton());// create a account Button
 	 
  	var items = [button,button,button,button];//delcare the items in control panel first
 	$('#test').addControlPanel(items);// create a control panel

   $(document).on('click','[type=add]',function(){
 		var controlledElement = $(this).siblings('selector');

 		});

  $(document).on('click','[type=reduce]',function(){
 	var controlledElement = $(this).siblings('selector');
 		});

 $(document).on('click','[type=delete]',function(){
	var deleteItem = $(this).closest('selector');
	 $(document).remove(deleteItem);
 		});


  });*/

jQuery.fn.extend({

	//add more items to a target DOM
	addItems:function(items){
		var target = $(this);
		$.each(items,function(index){
			target.append(items[index]);
		});
			},
	//add DOM to specific position in <li> 
	addItemToIconPos:function(item){
		var position = $(this).children('div .iconPosition');
			position.append(item);
	},
	addItemToContentPos:function(item){
		var position = $(this).children('div .contentPostion');
			position.append(item);
	},
	addItemToControlPanelPos:function(item){
		var position = $(this).children('div .controlPanelPosition');
			position.append(item);
	}

});


// constructor of deleteButton target is the delete target
function createDeleteButton(target){
	var deleteButton = $('<button>',{
	"class":"btn btn-danger",
	"id":"deleteButton"
	}).bind('click',function(){
		var item = $(this).closest($(target));
		item.remove();
	}).append($('<span>',{
	"class":"glyphicon glyphicon-trash"
	}));
	return deleteButton;
	}

// constructor of control panel
function createControlPanel(){
	var controlPanel = $('<div>',{
		"class":"btn-group btn-group-xs controlPanel",
		"role":"group",
		"aria-label":"...",
	});
		return controlPanel;
	}


// constructor of increaseButton
function createIncreaseButton(){
	var increaseButton  = $('<button>',{
		"class":"btn btn-default btn",
		"name":"increaseButton",
		"text":"+"
	}).bind('click',function(){

		var accountButton = $(this).siblings('[name=accountButton]');
		var portion  = parseInt(accountButton.text())+1;
		accountButton.text(portion);

	});
	return increaseButton;
	}

// constructor of reduce button
function createReduceButton(){	
	var reduceButton =$('<button>',{

		"class":"btn btn-default btn",
		"name":"reduceButton",
		"text":"-"		

	}).bind('click',function(){
		var accountButton = $(this).siblings('[name=accountButton]');
		var portion  = parseInt(accountButton.text())-1;
		accountButton.text(portion);

	});
	
	return reduceButton;
	}


// constructor of account button 
function createAccountButton(account){
	var accountButton  = $('<button>',{
	"class":"btn btn-default btn",
	"name":"accountButton",
	"disabled":true,
	"text":account
	});
	return accountButton;
}


// constructor of basic <li> DOM in our project
function createBasicLi(){
	var li = $('<li>',{
		"class":"list-group-item",
	}).append($('<div>',{
		"class":"row",
	}).append($('<div>',{
		"class":"col-md-1 iconPosition"
	})).append($('<div>',{
		"class":"col-md-9 contentPostion"
	})).append($('<div>',{
		"class":"col-md-2 controlPanelPosition"
	})));
	return li;
	}






























