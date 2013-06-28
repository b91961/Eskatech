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

// For messages form.

	var tdEditKey = null;
	var tdItem    = {};

	var storeData = function(){
		var tdId;
		if(tdEditKey === null) {
			var tdId   = Math.floor(Math.random()*100000001);
			tdItem._id = "messagedata:" + id;
		} else {
			tdItem._id  = tdEditKey._id;
			tdItem._rev = tdEditKey._rev;
		}
			tdItem.subject      = $('#subject').val();
			tdItem.todoMess 	= $('#todoMess').val();
			$.couch.db("eskatech").saveDoc(qa, {
				success: function (data) {
					alert('To-Do Message has been sent!');
				},
			});
			window.location = '#todo';
			window.location.reload('#');
			return false;
	};
	$(document).on('pageinit', '#todo', function () {
		
		$.couch.db("eskatech").view("eskatechclients/messagedata", {
			success: function (data) {
				if (data.rows.length == 0) {
					autoFillData();
						alert('No Messages have been entered yet.  Here is some sample data.');
				};
				$.each(data.rows, function (index, message) {
					var tdId = message.value.id;
					var rev  = message.value.rev;
						var tdMakeSubList = $('<div></div>');
						var tdCreateLi = $(
							'<ul>'+
								'<li>' + message.value.subject + '</li>' +
								'<li>' + message.value.todoMess + '</li>' +
							'</ul>'				
						);
					var tdEditClientButton = $("<button><a href='#todo' id='tdEditClientButton" +index+ "'> Edit Message</a></button>");
					tdEditClientButton.on('click', function() {
						$.couch.db("eskatech").openDoc(tdId, {
							success: function (data) {
								tdEditKey = {
									_id: id,
									_rev: rev
								};
								$("#subject").val(message.value.subject);
								$("#todoMess").val(message.value.subject);
								$("#submitMessButton").prev(".ui-btn-inner").children(".ui-btn-txt").html("Update Message");
							}
						});
					});
					var tdDeleteClientButton = $("<button><a href='#' id='delete"+index+"'> Message Seen</a></button>");
					tdDeleteClientButton.on('click', function(){
						tdEditKey = {
							_id: id,
							_rev: rev
						};
						var tdAsk = confirm('Are you sure you read this message? Message will be deleted!');
						if(tdAsk){
							$.couch.db("eskatech").removeDoc(tdEditKey, {
								success: function (data) {
									tdEditKey = null
									alert('Message has been removed!');
									window.location = '#home';
									window.location.reload('#');
								}
							});
						}
					});
					tdMakeSubList.append(tdCreateLi).append(tdDeleteClientButton).append(tdEditClientButton).appendTo('#messList');	
				});
			}
		});	
	});	
	
	var tdAutoFillData = function(){
		$.couch.db("eskatech").view("eskatechclients/messages", {
			success : function(data) {
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
	
	// Client form code goes here.


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
	$('#submitMessButton').on('click', function() {
		storeData(tdEditKey);
	});








