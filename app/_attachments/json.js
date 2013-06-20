
// Jamal Moubarak
// ASD 1306

var json = {
	'client1': {
		'id': ['Client ID:', '12345678'],
		'group': ['Install:', 'POS'],
		'compName': ['Company Name:', 'Eskatech'],
		'contName': ['Contact Name:', 'Jamal Moubarak'],
		'contPhone': ['Contact Phone #', '734-819-1211'],
		'contEmail': ['Contact Email:', 'jamal@eskatech.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2013-03-14'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.1.1, admin, admin'],
		'notes': ['Notes:', 'We installed 4 POS systems at the front counter off of a network switch we installed']			
	},
	'client2':{
		'id': ['Client ID:', '87654321'],
		'group': ['Install:', 'Surveillance'],
		'compName': ['Company Name:', 'Fairfield Inn'],
		'contName': ['Contact Name:', 'John Smith'],
		'contPhone': ['Contact Phone #', '555-555-2233'],
		'contEmail': ['Contact Email:', 'john@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2013-03-13'],
		'paymentStat': ['Payment Status:', 'Partial'],
		'networkNotes': ['Network and Login Info:', '192.168.001.100, john, 123456'],
		'notes': ['Notes:', 'We installed 8 cams 1st floor, 8 2nd floor, 8 3rd floor, 8 outside']	
	},
	'client3':{
		'id': ['Client ID:', '23456789'],
		'group': ['Install:', 'Network'],
		'compName': ['Company Name:', 'Del Taco'],
		'contName': ['Contact Name:', 'Jane Smith'],
		'contPhone': ['Contact Phone #', '555-555-1111'],
		'contEmail': ['Contact Email:', 'jane@gmail.com'],
		'status': ['Job Status:', 'Pending'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']
	},
	'client4':{
		'id': ['Client ID:', '98765432'],
		'group': ['Install:', 'AudioVideo'],
		'compName': ['Company Name:', 'Petes Garage'],
		'contName': ['Contact Name:', 'Pete George'],
		'contPhone': ['Contact Phone #', '555-555-2222'],
		'contEmail': ['Contact Email:', 'pete@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2013-01-24'],
		'paymentStat': ['Payment Status:', 'No'],
		'networkNotes': ['Network and Login Info:', '192.168.000.99, guest, 123456'],
		'notes': ['Notes:', 'We installed 4 speakers in the customer area and install a password protected linksys router so they can give wifi to customers.']
	},
		'client5': {
		'id': ['Client ID:', '95022888'],
		'group': ['Install:', 'POS'],
		'compName': ['Company Name:', 'Jacksons Fencing'],
		'contName': ['Contact Name:', 'James Jackson'],
		'contPhone': ['Contact Phone #', '724-203-2300'],
		'contEmail': ['Contact Email:', 'james@jacksonsfencing.com'],
		'status': ['Job Status:', 'Potential'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']		
	},
	'client6':{
		'id': ['Client ID:', '98585054'],
		'group': ['Install:', 'Surveillance'],
		'compName': ['Company Name:', 'ParAid Medical'],
		'contName': ['Contact Name:', 'Allan Marsh'],
		'contPhone': ['Contact Phone #', '412-319-3900'],
		'contEmail': ['Contact Email:', 'allanmarsh@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-07-14'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.1.220, Allan, 123456'],
		'notes': ['Notes:', 'This is another Test.']
	},
	'client7':{
		'id': ['Client ID:', '71434983'],
		'group': ['Install:', 'Network'],
		'compName': ['Company Name:', 'HAAS Automation'],
		'contName': ['Contact Name:', 'Alex May'],
		'contPhone': ['Contact Phone #', '724-218-2800'],
		'contEmail': ['Contact Email:', 'alexmay@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-02-21'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.2.1, admin, password'],
		'notes': ['Notes:', 'Alex is a great contact person to have.']
	},
	'client8':{
		'id': ['Client ID:', '76408706'],
		'group': ['Install:', 'AudioVideo'],
		'compName': ['Company Name:', 'Bassetts Foods'],
		'contName': ['Contact Name:', 'Stephanie Hawkins'],
		'contPhone': ['Contact Phone #', '412-317-3700'],
		'contEmail': ['Contact Email:', 'stephaniehawkins@bassetts.com'],
		'status': ['Job Status:', 'Pending'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']
	},
		'client9': {
		'id': ['Client ID:', '56748923'],
		'group': ['Install:', 'POS'],
		'compName': ['Company Name:', 'Scrubs Pub'],
		'contName': ['Contact Name:', 'Beth Walton'],
		'contPhone': ['Contact Phone #', '412-517-5700'],
		'contEmail': ['Contact Email:', 'bwalton5700@yahoo.com.com'],
		'status': ['Job Status:', 'Pending'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']			
	},
	'client10':{
		'id': ['Client ID:', '20628884'],
		'group': ['Install:', 'Surveillance'],
		'compName': ['Company Name:', 'Clazel Theatre'],
		'contName': ['Contact Name:', 'Erica Hall'],
		'contPhone': ['Contact Phone #', '412-318-3800'],
		'contEmail': ['Contact Email:', 'babyhallsmommie@gmail.com'],
		'status': ['Job Status:', 'Potential'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']
	},
	'client11':{
		'id': ['Client ID:', '35133340'],
		'group': ['Install:', 'Network'],
		'compName': ['Company Name:', 'Wireless Boys'],
		'contName': ['Contact Name:', 'Donald Chung'],
		'contPhone': ['Contact Phone #', '412-208-2828'],
		'contEmail': ['Contact Email:', 'donaldchung@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-10-04'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '72.124.168.153, donald, 111111'],
		'notes': ['Notes:', 'We installed WiFi for the customers to use when in the store.']
	},
	'client12':{
		'id': ['Client ID:', '44637039'],
		'group': ['Install:', 'AudioVideo'],
		'compName': ['Company Name:', 'Ford Motor Company'],
		'contName': ['Contact Name:', 'Paul Woods'],
		'contPhone': ['Contact Phone #', '412-481-6022'],
		'contEmail': ['Contact Email:', 'paulwoods@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2011-08-08'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.1.1, paul, woods'],
		'notes': ['Notes:', 'We installed 16 speakers in the employee break areas.']		
	},
		'client13': {
		'id': ['Client ID:', '65748084'],
		'group': ['Install:', 'POS'],
		'compName': ['Company Name:', 'Liban Cafe'],
		'contName': ['Contact Name:', 'Karen Puckett'],
		'contPhone': ['Contact Phone #', '412-714-7400'],
		'contEmail': ['Contact Email:', 'karenpuckett@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2011-03-17'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.0.127, admin, libancafe'],
		'notes': ['Notes:', 'We installed 1 POS system at the customer checkout area.']		
	},
	'client14':{
		'id': ['Client ID:', '74929233'],
		'group': ['Install:', 'Surveillance'],
		'compName': ['Company Name:', 'Kisses Showgirls'],
		'contName': ['Contact Name:', 'Tim Watts'],
		'contPhone': ['Contact Phone #', '412-749-4101'],
		'contEmail': ['Contact Email:', 'kisses419@gmail.com'],
		'status': ['Job Status:', 'Potential'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']
	},
	'client15':{
		'id': ['Client ID:', '24155242'],
		'group': ['Install:', 'Network'],
		'compName': ['Company Name:', 'Blue Agave'],
		'contName': ['Contact Name:', 'Marion Moon'],
		'contPhone': ['Contact Phone #', '724-206-2600'],
		'contEmail': ['Contact Email:', 'marionmoon@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-07-07'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.169.0.99, marion, 888888'],
		'notes': ['Notes:', 'We installed a wireless access point and a sonic firewall for free wi-fi']
	},
	'client16':{
		'id': ['Client ID:', '15182557'],
		'group': ['Install:', 'AudioVideo'],
		'compName': ['Company Name:', 'Detroit Auto'],
		'contName': ['Contact Name:', 'Jason Cross'],
		'contPhone': ['Contact Phone #', '724-594-1594'],
		'contEmail': ['Contact Email:', 'jasoncross@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-02-14'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '72.240.153.153, admin1, admin'],
		'notes': ['Notes:', 'We installed 20 tvs for customers to view specials on while in the store.']
	},
		'client17': {
		'id': ['Client ID:', '30158185'],
		'group': ['Install:', 'POS'],
		'compName': ['Company Name:', 'Velocity'],
		'contName': ['Contact Name:', 'Don Sharpe'],
		'contPhone': ['Contact Phone #', '724-506-1506'],
		'contEmail': ['Contact Email:', 'don@velocity.com'],
		'status': ['Job Status:', 'Pending'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']			
	},
	'client18':{
		'id': ['Client ID:', '21754202'],
		'group': ['Install:', 'Surveillance'],
		'compName': ['Company Name:', 'Haggopian'],
		'contName': ['Contact Name:', 'Brian Hall'],
		'contPhone': ['Contact Phone #', '724-653-1653'],
		'contEmail': ['Contact Email:', 'brianhall@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2012-03-20'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.1.110, brian, admin'],
		'notes': ['Notes:', 'We installed 16 cameras throughout the warehouse.']
	},
	'client19':{
		'id': ['Client ID:', '15972380'],
		'group': ['Install:', 'Network'],
		'compName': ['Company Name:', 'Holiday Inn Express'],
		'contName': ['Contact Name:', 'Pat Allen'],
		'contPhone': ['Contact Phone #', '412-684-1684'],
		'contEmail': ['Contact Email:', 'patallen@holidayinn.com'],
		'status': ['Job Status:', 'Potential'],
		'date': ['Date Completed:', ''],
		'paymentStat': ['Payment Status:', ''],
		'networkNotes': ['Network and Login Info:', ''],
		'notes': ['Notes:', '']		
	},
	'client20':{
		'id': ['Client ID:', '22364117'],
		'group': ['Install:', 'AudioVideo'],
		'compName': ['Company Name:', 'Sloan Industries'],
		'contName': ['Contact Name:', 'Lynne Rose'],
		'contPhone': ['Contact Phone #', '734-802-8679'],
		'contEmail': ['Contact Email:', 'lynnerose@gmail.com'],
		'status': ['Job Status:', 'Completed'],
		'date': ['Date Completed:', '2013-01-23'],
		'paymentStat': ['Payment Status:', 'Yes'],
		'networkNotes': ['Network and Login Info:', '192.168.0.153, guest, guest'],
		'notes': ['Notes:', 'We installed 4 speakers in the office area hooked up to a receiver that they play pandora off of.']
	}
}

var tdjson = {
	'message1': {
		'subject': ['Subject:', 'John Call Pat'],
		'todoMess': ['Message:', '01/01/1991, Pat called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Jamal']	
	},
	'message2': {
		'subject': ['Subject:', 'Tim Call Brian'],
		'todoMess': ['Message:', '01/01/1991, Brian called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ken']
	},
	'message3': {
		'subject': ['Subject:', 'Sam Call Don'],
		'todoMess': ['Message:', '01/01/1991, Don called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ron']	
	},
	'message4': {
		'subject': ['Subject:', 'Jessica Call Jason'],
		'todoMess': ['Message:', '01/01/1991, Jason called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ron']
	},
	'message5': {
		'subject': ['Subject:', 'Danny Call Bill'],
		'todoMess': ['Message:', '01/01/1991, Bill called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ron']	
	},
	'message6': {
		'subject': ['Subject:', 'Linda Call Steve'],
		'todoMess': ['Message:', '01/01/1991, Steve called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ken']
	},
	'message7': {
		'subject': ['Subject:', 'Tom Call Mary'],
		'todoMess': ['Message:', '01/01/1991, Mary called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Jamal']	
	},
	'message8': {
		'subject': ['Subject:', 'Tina Call Jaime'],
		'todoMess': ['Message:', '01/01/1991, Jaime called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ken']
	},
	'message9': {
		'subject': ['Subject:', 'Ken Call Roger'],
		'todoMess': ['Message:', '01/01/1991, Roger called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ken']	
	},
	'message10': {
		'subject': ['Subject:', 'Jane Call Larry'],
		'todoMess': ['Message:', '01/01/1991, Larry called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ken']
	},
	'message11': {
		'subject': ['Subject:', 'Adrian Call Ali'],
		'todoMess': ['Message:', '01/01/1991, Ali called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Jamal']	
	},
	'message12': {
		'subject': ['Subject:', 'Mike Call Ron'],
		'todoMess': ['Message:', '01/01/1991, Ron called today and wants to schedule an appointment for a quote. 734-555-1212 -Thanks Ron']
	}
}
	
	
	