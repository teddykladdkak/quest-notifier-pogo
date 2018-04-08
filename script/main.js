function load() {
	addsettings();
	adddataliststop();
	additems();
	getLocation();
	sortbykm();
};
function removechilds(parent){while (parent.hasChildNodes()) {parent.removeChild(parent.firstChild);};};
function addsettings(){
	var wrapper = document.getElementById('setting');
	for (var i = rewards.length - 1; i >= 0; i--) {
		var p = document.createElement('p');
			var icon = document.createElement('i');
				if(localStorage.getItem('setting' + rewards[i].namn) == 'off'){
					icon.setAttribute('class', 'fas fa-toggle-off');
					icon.setAttribute('data-state', 'off');
				}else{
					icon.setAttribute('class', 'fas fa-toggle-on');
					icon.setAttribute('data-state', 'on');
				};
				icon.setAttribute('data-namn', rewards[i].namn);
				icon.setAttribute('onclick', 'changesetting(this);');
			p.appendChild(icon);
			var text = document.createTextNode(' ' + rewards[i].rubrik);
			p.appendChild(text);
		wrapper.appendChild(p);
	};
	addsettingstostyle();
};
function changesetting(element){
	if(element.getAttribute('data-state') == 'on'){
		element.setAttribute('data-state', 'off');
		element.setAttribute('class', 'fas fa-toggle-off');
	}else if(element.getAttribute('data-state') == 'off'){
		element.setAttribute('data-state', 'on');
		element.setAttribute('class', 'fas fa-toggle-on');
	}else{
		console.log('changesetting(); kunde inte läsa vad knapp är i för stadie.');
	};
	addsettingstostyle();
};
function addsettingstostyle(){
	var allsettingbutton = document.getElementById('setting').getElementsByTagName('i');
	var stylecode = '';
	for (var i = allsettingbutton.length - 1; i >= 0; i--) {
		if(allsettingbutton[i].getAttribute('data-state') == 'off'){
			var stylecode = stylecode + ' .setting' + allsettingbutton[i].getAttribute('data-namn');
			localStorage.setItem('setting' + allsettingbutton[i].getAttribute('data-namn'), 'off');
		}else{
			localStorage.removeItem('setting' + allsettingbutton[i].getAttribute('data-namn'));
		};
	};
	var stylesettings = document.getElementById('stylesettings');
		removechilds(stylesettings);
	if(stylecode == ''){
		var stylecodetext = document.createTextNode('/*Code for style*/');
	}else{
		var stylecode = stylecode + ' {display: none!important;}';
		var stylecodetext = document.createTextNode(stylecode);
	};
		stylesettings.appendChild(stylecodetext);
};
function adddataliststop(){
	var wrapper = document.getElementById('pokestopdata');
	for (var i = pokestop.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
			option.setAttribute('value', pokestop[i].namn);
		wrapper.appendChild(option);
	};
};
function mark(element, id){
	var alltd = document.getElementById('items').getElementsByTagName('img');
	for (var i = alltd.length - 1; i >= 0; i--) {
		alltd[i].removeAttribute('class');
	}
	element.setAttribute('class', 'blue');
	getquests(id);
};
function searchstop(element, event){
	var alternativ = document.getElementById('alternativ');
	removechilds(alternativ);
	element.setAttribute('style', 'color: black;');
	if(!event){}else{
		var key = event.keyCode || event.charCode;
		if( key == 8 || key == 46 ){var notaddval = true;}else{var notaddval = false;};
	};
	var resultat = [];
	for (var i = pokestop.length - 1; i >= 0; i--) {
		if(pokestop[i].namn.toLowerCase().indexOf(element.value.toLowerCase()) == -1){}else{
			resultat.push(pokestop[i].namn);
		};
	};
	if(resultat.length == 1){
		if(!notaddval){
			element.value = resultat[0];
			element.blur();
		};
	}else if(resultat.length == 0){
		element.setAttribute('style', 'color: red;');
	}else{
		addalternativ(alternativ, resultat);
	};
};
function addalternativ(wrapper, data){
	for (var i = 0; i < data.length; i++){
		var tr = document.createElement('tr');
			tr.setAttribute('onclick', 'insertpokestop("' + data[i] + '")')
			var td = document.createElement('td');
				var tdtext = document.createTextNode(data[i]);
				td.appendChild(tdtext);
			tr.appendChild(td);
		wrapper.appendChild(tr);
		if(i === 5){var i = data.length + 1;};
	};
};
function insertpokestop(namn){
	var input = document.getElementById('pokestopnamn');
		input.value = namn;
	searchstop(input, event)
};
function additems(){
	var wrapper = document.getElementById('items').getElementsByTagName('tbody')[0];
		var tr = document.createElement('tr');
		var rader = 0;
		rewards.reverse();
		for (var i = rewards.length - 1; i >= 0; i--) {
			if(rader == 5){
				wrapper.appendChild(tr);
				var rader = 0;
				var tr = document.createElement('tr');
			};
			var td = document.createElement('td');
				var img = document.createElement('img');
					img.setAttribute('onclick', 'mark(this, "' + rewards[i].namn + '");');
					img.setAttribute('src', rewards[i].plats);
					img.setAttribute('data-namn', rewards[i].namn);
				td.appendChild(img);
			tr.appendChild(td);
			rader++;
		};
		wrapper.appendChild(tr);
};
function getquests(id){
	var questarray = [];
	var numberarray = [];
	for (var i = quests.length - 1; i >= 0; i--) {
		if(quests[i].reward.length == 0){}else{
			for (var a = quests[i].reward.length - 1; a >= 0; a--) {
				if(quests[i].reward[a].typ == id.replace('_', '.')){
					questarray.push(quests[i]);
					numberarray.push(quests[i].reward[a].antal);
				};
			};
		};
	};
	addquest(numberarray, questarray);
};
function startoption(text){
	var wrapper = document.getElementById('quests');
		var startoption = document.createElement('option');
			startoption.setAttribute('value', '');
			var startoptiontext = document.createTextNode(text);
			startoption.appendChild(startoptiontext);
		wrapper.appendChild(startoption);
};
function addquest(numberarray, questarray){
	var wrapper = document.getElementById('quests');
		wrapper.setAttribute('onchange', 'addnumber(this);')
		activate('deaktivera', 'regbutton');
		activate('deaktivera', 'num');
		activate('deaktivera', 'quests');
		document.getElementById('num').value = '';
		removechilds(wrapper);
	if(questarray.length == 0){
		startoption('Inga quest hittade');
	}else{
		activate('aktivera', 'quests');
		startoption('Välj quest');
		for (var i = questarray.length - 1; i >= 0; i--) {
			var option = document.createElement('option');
				option.setAttribute('value', questarray[i].namn);
				option.setAttribute('data-antal', numberarray[i]);
				option.setAttribute('data-number', questarray[i].number);
				var optiontext = document.createTextNode(questarray[i].namn);
				option.appendChild(optiontext);
			wrapper.appendChild(option);
		};
	};
};
function addnumber(element){
	activate('deaktivera', 'regbutton');
	activate('deaktivera', 'num');
	document.getElementById('num').value = '';
	if(element.value == ''){}else{
		var alloptions = element.getElementsByTagName('option');
		for (var i = alloptions.length - 1; i >= 0; i--) {
			if(!alloptions[i].selected){}else{
				if(alloptions[i].getAttribute('data-number') == 'true'){
					activate('aktivera', 'num');
				}else{
					activate('aktivera', 'regbutton');
				};
			};
		};
	};
};
function activate(todo, id){
	var button = document.getElementById(id);
	if(todo == 'aktivera'){
		button.removeAttribute('disabled');
	}else{
		button.setAttribute('disabled', 'disabled');
	};
};
function checknum(element) {
	var number = element.value.replace(/[^0-9]/, '');
	if(number.length == 0){
		activate('deaktivera', 'regbutton');
	}else{
		activate('aktivera', 'regbutton');
	};
};
function hideall(){
	document.getElementById('meny').setAttribute('class', 'menyleft');
	document.getElementById('setting').setAttribute('style', 'display: none;');
	document.getElementById('add').setAttribute('style', 'display: none;');
	document.getElementById('wrapper').setAttribute('style', 'display: none;');
	document.getElementById('information').setAttribute('style', 'display: none;');
};
function showinfo(){
	hideall();
	document.getElementById('information').removeAttribute('style');
};
function showsettings(){
	hideall();
	document.getElementById('setting').removeAttribute('style');
};
function showreg(){
	hideall();
	document.getElementById('add').removeAttribute('style');
	document.getElementById('pokestopnamn').focus();
};
function angra(){
	hideall();
	document.getElementById('meny').setAttribute('class', 'menyright');
	var alltd = document.getElementById('items').getElementsByTagName('img');
	for (var i = alltd.length - 1; i >= 0; i--) {
		alltd[i].removeAttribute('class');
	};
	removechilds(document.getElementById('quests'));
	activate('deaktivera', 'quests');
	document.getElementById('pokestopnamn').value = '';
	document.getElementById('num').value = '';
	activate('deaktivera', 'num');
	activate('deaktivera', 'regbutton');
	document.getElementById('wrapper').removeAttribute('style');
};
function registrera(){
	var pokestop = document.getElementById('pokestopnamn').value;
	var item = document.getElementsByClassName('blue')[0];
	var itemnamn = item.getAttribute('data-namn');
	var itemplats = item.getAttribute('src');
	var quests = document.getElementById('quests').getElementsByTagName('option');
	for (var i = quests.length - 1; i >= 0; i--) {
		if(!quests[i].selected){}else{
			var questomnummer = quests[i].getAttribute('data-number');
			var questvalue = quests[i].getAttribute('value');
			var questantal = quests[i].getAttribute('data-antal');
		};
	};
	if(questomnummer == 'true'){
		var nummer = document.getElementById('num').value;
		var questvalue = questvalue.replace('{?}', nummer);
	};
	var pokestopobj = getpokestopobjekt(pokestop);
	if(pokestop == ''){return false};
	if(!pokestopobj){return false};
	addexample(pokestopobj, itemnamn, itemplats, questvalue, questantal, '');
	uppdateDistance();
	angra();
};
function getpokestopobjekt(pokestopnamn){
	for (var i = pokestop.length - 1; i >= 0; i--) {
		if(pokestop[i].namn.toLowerCase() == pokestopnamn.toLowerCase()){
			return pokestop[i];
		};
	};
};
function addexample(pokestopobj, itemnamn, itemplats, questvalue, questantal, givenkm){
	var wrapper = document.getElementById('wrapper');
		var tr = document.createElement('div');
			tr.setAttribute('class', 'tr setting' + itemnamn);
			tr.setAttribute('data-namn', pokestopobj.namn);
			tr.setAttribute('data-longitude', pokestopobj.longitude);
			tr.setAttribute('data-latitude', pokestopobj.latitude);
			tr.setAttribute('data-itemnamn', itemnamn);
			tr.setAttribute('data-itemplats', itemplats);
			tr.setAttribute('data-questvalue', questvalue);
			tr.setAttribute('data-questantal', questantal);
			var km = document.createElement('div');
				km.setAttribute('class', 'td');
				var kmp = document.createElement('p');
					kmp.setAttribute('class', 'km');
					var icon = document.createElement('i');
						icon.setAttribute('class', 'fas fa-road');
					kmp.appendChild(icon);
					if(lat == 0){
						var kmtext = document.createTextNode(' X');
						tr.setAttribute('data-km', 'X');
					}else{
						var kmtext = document.createTextNode(' ' + (givenkm / 10));
						tr.setAttribute('data-km', givenkm);
					};
					kmp.appendChild(kmtext);
				km.appendChild(kmp);
			tr.appendChild(km);
			var imgwrp = document.createElement('div');
				imgwrp.setAttribute('class', 'td');
				var img = document.createElement('img');
					img.setAttribute('src', itemplats);
				imgwrp.appendChild(img);
				var sttext = document.createTextNode('x' + questantal);
				imgwrp.appendChild(sttext);
			tr.appendChild(imgwrp);
			var task = document.createElement('div');
				task.setAttribute('class', 'td');
				var taskp = document.createElement('p');
					var taskicon = document.createElement('i');
						taskicon.setAttribute('class', 'fas fa-binoculars');
					taskp.appendChild(taskicon);
					var tasktext = document.createTextNode(' ' + questvalue);
					taskp.appendChild(tasktext);
					taskp.appendChild(document.createElement('br'));
					var pokestopimg = document.createElement('i');
						pokestopimg.setAttribute('class', 'fas fa-map-pin');
					taskp.appendChild(pokestopimg);
					var pokestopnamn = document.createTextNode(' ' + pokestopobj.namn);
					taskp.appendChild(pokestopnamn);
				task.appendChild(taskp);
			tr.appendChild(task);
		wrapper.appendChild(tr);
};
function pad (str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
};
function sortbykm(){
	if(lat == 0 || lon == 0){}else{
		var alllines = document.getElementById('wrapper').getElementsByClassName('tr');
		var data = [];
		var num = [];
		for (var i = alllines.length - 1; i >= 0; i--) {
			num.push(pad(alllines[i].getAttribute('data-km'), 10) + '|||' + alllines[i].getAttribute('data-namn'));
			data.push({"km": pad(alllines[i].getAttribute('data-km'), 10), "namn": alllines[i].getAttribute('data-namn'), "longitude": alllines[i].getAttribute('data-longitude'), "latitude": alllines[i].getAttribute('data-latitude'), "itemnamn": alllines[i].getAttribute('data-itemnamn'), "itemplats": alllines[i].getAttribute('data-itemplats'), "questvalue": alllines[i].getAttribute('data-questvalue'), "questantal": alllines[i].getAttribute('data-questantal')})	
		};
		num.sort();
		var nyordning = [];
		for (var i = num.length - 1; i >= 0; i--) {
			for (var a = data.length - 1; a >= 0; a--) {
				if(num[i] == data[a].km + '|||' + data[a].namn){
					nyordning.push(data[a]);
				};
			};
		};
		removechilds(document.getElementById('wrapper'));
		for (var i = nyordning.length - 1; i >= 0; i--) {
			addexample({"namn": nyordning[i].namn, "latitude": nyordning[i].latitude, "longitude": nyordning[i].longitude}, nyordning[i].itemnamn, nyordning[i].itemplats, nyordning[i].questvalue, nyordning[i].questantal, nyordning[i].km);
		};
	};
};

var lon = '0';
var lat = '0';
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		//setTimeout(function(){ getLocation(); }, 3000);
		console.log('Något gick fel...');
	};
};
function showPosition(position) {
	window['lat'] = position.coords.latitude;
	window['lon'] = position.coords.longitude;
	uppdateDistance();
};
function uppdateDistance(){
	var allines = document.getElementById('wrapper').getElementsByClassName('tr');
	for (var i = allines.length - 1; i >= 0; i--) {
		var km = Math.round(getDistanceFromLatLonInKm(allines[i].getAttribute('data-latitude'),allines[i].getAttribute('data-longitude')) * 10);
		if(lat == 0){}else{
			allines[i].setAttribute('data-km', km);
			var text = allines[i].getElementsByClassName('km')[0];
				removechilds(text);
				var icon = document.createElement('i');
					icon.setAttribute('class', 'fas fa-road');
				text.appendChild(icon);
				var nytext = document.createTextNode((km / 10));
				text.appendChild(nytext);
		};
	};
	sortbykm();
};
function getDistanceFromLatLonInKm(lat2,lon2) {
	var lat1 = window['lat'];
	var lon1 = window['lon'];
	if(lat1 == '0'){}else{
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(lat2-lat1);  // deg2rad below
		var dLon = deg2rad(lon2-lon1); 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		//console.log(lat1 + '-' + lon1 + '|' + lat2 + '-' + lon2 + '|' + d + ' km');
		return d;
	};
};

function deg2rad(deg) {
	return deg * (Math.PI/180)
};