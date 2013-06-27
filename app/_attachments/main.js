// Jamal Moubarak
// ASD 1306

	
	// Home Page pageinit function.
	$('#home').on('pageinit', function() {

	});
	
	// Info Page pageinit function.
	$('#info').on('pageinit', function() {

	});
	
	// To-Do Page pageinit function.
	$('#todo').on('pageinit', function() {
			
		// Form Validator for client Install Form.
		var tdForm = $('#todoForm');
		tdForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				storeData(this.key);
			}
		});
	});
	
	// Add Item Page pageinit function.
	$('#addItem').on('pageinit', function() {
	
		// Dropdown for radios.
	    $('#effect').css('display','none');
	        $('.Status').bind('click', function(e){
	        if ($('input[name=status]:checked').val() === 'Completed' ) {
	            $('#effect').slideDown('fast');
	        } else {
	            $('#effect').slideUp('fast');
	        }
	     });
	
		// Form Validator for client Install Form.
		var ciForm = $('#clientInstallForm');
		ciForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				saveData(this.key);
			}
		});
	});
	
	// View All Client Page pageinit function.
	$('#clientList').on('pageinit', function() {

	});
	
		// View Pending Client Page pageinit function.
	$('#pendClientList').on('pageinit', function() {

	});
	
		// View Potential Client Page pageinit function.
	$('#potClientList').on('pageinit', function() {

	});
	
		// View Completed Client Page pageinit function.
	$('#compClientList').on('pageinit', function() {

	});


// All functions go below here.

	var tdEditKey = '';

	var storeData = function(){
		var tdId;
		if(!tdEditKey) {
			tdId = Math.floor(Math.random()*100000001);
		} else {
			tdId = tdEditKey;
		}
		
		var tdItem          = {};
			tdItem.subject  = ['Subject:', $('#subject').val()];
			tdItem.todoMess 	= ['Message:', $('#todoMess').val()];
			localStorage.setItem(tdId, JSON.stringify(tdItem)).appendTo('#todo');
			alert('To-Do Message has been sent!');
			console.log(tdId);
			window.location = '#todo';
			window.location.reload('#');
			return false;
	};
	
	var tdAutoFillData = function(){
		$.ajax({
			url			:	'_view/messages',
			type		:	'GET',
			dataType	:	'json',
			success		:	function(data) {
				$.each(data.rows, function(index, message){
					var makeSubList = $('<div></div>');
					var createLi = $(
						'<ul>'+
							'<li>' + message.value.subject + '</li>' +
							'<li>' + message.value.todoMess + '</li>' +
						'</ul>'				
					);
					makeSubList.append(createLi).appendTo('#messList');
				});
				
			}	
		});
	};
	
		var tdDeleteItem = function(tdEditKey) {
		var tdAsk = confirm('Are you sure you read this message? Message will be deleted!');
		if(tdAsk){
			localStorage.removeItem(tdEditKey);
			alert('Message has been removed!');
			window.location = '#home';
			window.location.reload('#');
		}else{
			alert('Message was not Deleted!');
		}	
	};
	
	var tdEditItem = function(tdEditKey) {
		var tdItems = JSON.parse(localStorage.getItem(tdEditKey));
			$('#subject').val(tdItems.subject[1]);
			$('#todoMess').val(tdItems.todoMess[1]);
			$('#submitMessButton').prev('.ui-btn-inner').children('.ui-btn-text').html('Update Message');
			$('#submitMessButton').val('Update Message').data('key', tdEditKey);	
	};
	
	var tdShowData = function(key){
		if(localStorage.length === 0){
			tdAutoFillData();
			alert('No Messages have been entered yet.  Here is some sample data.');
		}
		$.mobile.changePage('#');
		
		for (var j=0, l=localStorage.length; j<l; j++) {
			var key = localStorage.key(j);
			var tdValue = localStorage.getItem(key);
			var tdClData = JSON.parse(tdValue);
			var tdMakeSubList = $('<div></div>');
			var tdCreateLi = $(
				'<p>' + tdClData.subject[0] + ' ' + tdClData.subject[1] + '</p>' +
				'<p>' + tdClData.todoMess[0] + ' ' + tdClData.todoMess[1] + '</p>'				
			);
			var tdEditClientButton = $("<button data-key='"+key+"'><a href='#todo' id='tdEditClientButton'> Edit Message</a></button>");
				tdEditClientButton.on('click', function(){
					tdEditKey = $(this).data('key');
					tdEditItem(tdEditKey);
				});
			var tdDeleteClientButton = $("<button data-key='"+key+"'><a href='#todoForm' id='delete"+key+"'> Message Seen</a></button>");
				tdDeleteClientButton.on('click', function(){
					tdEditKey = $(this).data('key');
					tdDeleteItem(tdEditKey);
				});
		tdMakeSubList.append(tdCreateLi).append(tdDeleteClientButton).append(tdEditClientButton).appendTo('#messList');
		}
	};
	
	//$('#tdEditClientButton').click(function(){
	//	$('#tdDropdown').trigger('click');
	//});
	
	var tdClearStorage = function(){
		if(localStorage.length === 0){
			alert('You have no Messages to Clear.');
		} else {
			var tdAsk = confirm('Are you sure you want to delete ALL Messages?  This action can NOT be undone!!!');
			if(tdAsk){
				localStorage.clear();
				alert('All Messages have been deleted.');
				window.location = '#home';
				window.location.reload('#');
				return false;
			}
		}
	};


	var editKey = '';

	var saveData = function(){
		var id;
		if(!editKey) {
			id = Math.floor(Math.random()*100000001);
		} else {
			id = editKey;
		}
		
		var item                = {};
			item.id             = ['Client ID:', id];
			item.group 			= ['Install:', $('#group').val()];
			item.compName		= ['Company Name:', $('#compName').val()];
			item.contName		= ['Contact Name:', $('#contName').val()];
			item.contPhone		= ['Contact Phone #:', $('#contPhone').val()];
			item.contEmail		= ['Contact Email:', $('#contEmail').val()];
			item.status         = ['Job Status:', $('#clientInstallForm :radio:checked + label').text()];
			item.date           = ['Date Completed:', $('#date').val()];
			item.paymentStat    = ['Payment Status:', $('#clientInstallForm ol :radio:checked + label').text()];
			item.networkNotes	= ['Network and Login Info:', $('#networkNotes').val()];
			item.notes			= ['Notes:', $('#notes').val()];
			localStorage.setItem(id, JSON.stringify(item));
			alert('Client Information is Saved!');
			console.log(id);
			window.location = '#todo';
			window.location.reload('#');
			return false;
	};
	
	var autoFillData = function(){
		$.ajax({
			url			:	'_view/clients',
			type		:	'GET',
			dataType	:	'json',
			success		:	function(data) {
				$.each(data.rows, function(index, client){
					var makeSubList = $('<div></div>');
					var createLi = $(
						'<ul>'+
							'<li>' + client.value.id + '</li>' +
							'<li>' + client.value.group + '</li>' +
							'<li>' + client.value.compName + '</li>' +
							'<li>' + client.value.contName + '</li>' +
							'<li>' + client.value.contPhone + '</li>' +
							'<li>' + client.value.contEmail + '</li>' +
							'<li>' + client.value.status + '</li>' +
							'<li>' + client.value.date + '</li>' +
							'<li>' + client.value.paymentStat + '</li>' +
							'<li>' + client.value.networkNotes + '</li>' +
							'<li>' + client.value.notes + '</li>' +
						'</ul>'				
					);
					makeSubList.append(createLi).appendTo('#clList');
				});
				
			}	
		});
	};
	
	var deleteItem = function(editKey) {
		var ask = confirm('Are you sure you want to delete this contact?');
		if(ask){
			localStorage.removeItem(editKey);
			alert('Client has been deleted!');
			window.location = '#home';
			window.location.reload('#');
		}else{
			alert('Client was not Deleted!');
		}	
	};
	
	var editItem = function(editKey) {
		var rad = ('#clientInstallForm :radio:checked + label');
		var items = JSON.parse(localStorage.getItem(editKey));
			$('#group').val(items.group[1]);
			$('#compName').val(items.compName[1]);
			$('#contName').val(items.contName[1]);
			$('#contPhone').val(items.contPhone[1]);
			$('#contEmail').val(items.contEmail[1]);
			$('#date').val(items.date[1]);
			$('#networkNotes').val(items.networkNotes[1]);
			$('#notes').val(items.notes[1]);
			$('#submitButton').prev('.ui-btn-inner').children('.ui-btn-text').html('Update Client');
			$('#submitButton').val('Update Client').data('key', editKey);	
	};
	
	var showData = function(key){
		if(localStorage.length === 0){
			autoFillData();
			alert('No Clients have been entered yet.  Here is some sample Client data.');
		}
		$.mobile.changePage('#clientList');
		
		for (var i=0, len=localStorage.length; i<len; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var clData = JSON.parse(value);
			var makeSubList = $('<div></div>');
			var createLi = $(
				'<ul>'+
					'<li>' + clData.id[0] + ' ' + clData.id[1] + '</li>' +
					'<li>' + clData.group[0] + ' ' + clData.group[1] + '</li>' +
					'<li>' + clData.compName[0] + ' ' + clData.compName[1] + '</li>' +
					'<li>' + clData.contName[0] + ' ' + clData.contName[1] + '</li>' +
					'<li>' + clData.contPhone[0] + ' ' + clData.contPhone[1] + '</li>' +
					'<li>' + clData.contEmail[0] + ' ' + clData.contEmail[1] + '</li>' +
					'<li>' + clData.status[0] + ' ' + clData.status[1] + '</li>' +
					'<li>' + clData.date[0] + ' ' + clData.date[1] + '</li>' +
					'<li>' + clData.paymentStat[0] + ' ' + clData.paymentStat[1] + '</li>' +
					'<li>' + clData.networkNotes[0] + ' ' + clData.networkNotes[1] + '</li>' +
					'<li>' + clData.notes[0] + ' ' + clData.notes[1] + '</li>' +
				'</ul>'				
			);
			var editClientButton = $("<button data-key='"+key+"'><a href='#addItem' class='editBut'> Edit Client</a></button>");
				editClientButton.on('click', function(){
					editKey = $(this).data('key');
					editItem(editKey);
					$.mobile.changePage('#addItem');
				});
			var deleteClientButton = $("<button data-key='"+key+"'><a href='#clientInstallForm' id='delete'"+key+"'> Delete Client</a></button>");
				deleteClientButton.on('click', function(){
					editKey = $(this).data('key');
					deleteItem(editKey);
				});
		makeSubList.append(createLi).append(editClientButton).append(deleteClientButton).appendTo('#clList');
		}
	};
	
	$('#pendBut').on('click', function () {
		$.mobile.changePage('#pendClientList',{});
		$('#pendClList').empty();
		$.ajax({
			url			:	'_view/clients',
			type		:	'GET',
			dataType	:	'json',
			success		:	function(data) {
			alert('No Clients have been entered yet.  Here is some sample Pending Job data.');
				$.each(data.rows, function(index, client){
					var makeSubList = $('<div></div>');
					var createLi = $(
						'<ul>'+
							'<li>' + client.value.id + '</li>' +
							'<li>' + client.value.group + '</li>' +
							'<li>' + client.value.compName + '</li>' +
							'<li>' + client.value.contName + '</li>' +
							'<li>' + client.value.contPhone + '</li>' +
							'<li>' + client.value.contEmail + '</li>' +
							'<li>' + client.value.status + '</li>' +
							'<li>' + client.value.date + '</li>' +
							'<li>' + client.value.paymentStat + '</li>' +
							'<li>' + client.value.networkNotes + '</li>' +
							'<li>' + client.value.notes + '</li>' +
						'</ul>'				
					);
					makeSubList.append(createLi).appendTo('#pendClList');
				});
				
			}	
		});
	});
			
	
	$('#potBut').on('click', function () {
		$.mobile.changePage('#potClientList',{});
		$('#potClList').empty();
		$.ajax({
			url			:	'_view/clients',
			type		:	'GET',
			dataType	:	'json',
			success		:	function(data) {
			alert('No Clients have been entered yet.  Here is some sample Potential Job data.');
				$.each(data.rows, function(index, client){
					var makeSubList = $('<div></div>');
					var createLi = $(
						'<ul>'+
							'<li>' + client.value.id + '</li>' +
							'<li>' + client.value.group + '</li>' +
							'<li>' + client.value.compName + '</li>' +
							'<li>' + client.value.contName + '</li>' +
							'<li>' + client.value.contPhone + '</li>' +
							'<li>' + client.value.contEmail + '</li>' +
							'<li>' + client.value.status + '</li>' +
							'<li>' + client.value.date + '</li>' +
							'<li>' + client.value.paymentStat + '</li>' +
							'<li>' + client.value.networkNotes + '</li>' +
							'<li>' + client.value.notes + '</li>' +
						'</ul>'				
					);
					makeSubList.append(createLi).appendTo('#potClList');
				});
				
			}	
		});
	});
	
	$('#compBut').on('click', function () {
		$.mobile.changePage('#compClientList',{});
		$('#compClList').empty();
		$.ajax({
			url			:	'_view/clients',
			type		:	'GET',
			dataType	:	'json',
			success		:	function(data) {
			alert('No Clients have been entered yet.  Here is some sample Completed Job data.');
				$.each(data.rows, function(index, client){
					var makeSubList = $('<div></div>');
					var createLi = $(
						'<ul>'+
							'<li>' + client.value.id + '</li>' +
							'<li>' + client.value.group + '</li>' +
							'<li>' + client.value.compName + '</li>' +
							'<li>' + client.value.contName + '</li>' +
							'<li>' + client.value.contPhone + '</li>' +
							'<li>' + client.value.contEmail + '</li>' +
							'<li>' + client.value.status + '</li>' +
							'<li>' + client.value.date + '</li>' +
							'<li>' + client.value.paymentStat + '</li>' +
							'<li>' + client.value.networkNotes + '</li>' +
							'<li>' + client.value.notes + '</li>' +
						'</ul>'				
					);
					makeSubList.append(createLi).appendTo('#compClList');
				});
				
			}	
		});
	});
	
	var clearStorage = function(){
		if(localStorage.length === 0){
			alert('You have no Clients to Clear.');
		} else {
			var ask = confirm('Are you sure you want to delete ALL Clients?  This action can NOT be undone!!!');
			if(ask){
				localStorage.clear();
				alert('All clients have been deleted.');
				window.location = '#home';
				window.location.reload('#');
				return false;
			}
		}
	};

	$('.clearStorage').on('click', clearStorage);
	$('#submitButton').on('click', saveData);
	$('.displayData').on('click', showData);
	
	$('.tdClearStorage').on('click', tdClearStorage);
	$('#submitMessButton').on('click', storeData);
	$('.tdDisplayData').on('click', tdShowData);








