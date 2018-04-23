function load() {
	addsettings();
	additems();
	getLocation();
	//sortbykm();
};
function hittaid(id){return document.getElementById(id);};
function removechilds(parent){
	if(parent.hasChildNodes()){
		while (parent.hasChildNodes()) {
			parent.removeChild(parent.firstChild);
		};
	};
};
function changetext(element){
	var range = [10, 15, 20, 25, 30, 35, 40];
	localStorage.setItem('settingtext', element.value);
	var wrapper = hittaid('textsettings');
		removechilds(wrapper);
		var code = document.createTextNode('#questions, #information, #setting, #wrapper { font-size: ' + range[element.value] + 'px!important; }');
		wrapper.appendChild(code);
};
function changeikon(element){
	var range = [45, 50, 55, 60, 65, 70, 75];
	localStorage.setItem('settingikon', element.value);
	var wrapper = hittaid('ikonsettings');
		removechilds(wrapper);
		var code = document.createTextNode('#wrapper .tr .td img { max-width: ' + range[element.value] + 'px!important; }');
		wrapper.appendChild(code);
};
function addsettings(){
	if(!localStorage.getItem('settingtext')){}else{
		var textsetting = {"value": localStorage.getItem('settingtext')}
		changetext(textsetting);
		hittaid('textstorlek').value = localStorage.getItem('settingtext');
	};
	if(!localStorage.getItem('settingikon')){}else{
		var ikonsetting = {"value": localStorage.getItem('settingikon')}
		changeikon(ikonsetting);
		hittaid('ikonstorlek').value = localStorage.getItem('settingikon');
	};
	var wrapper = hittaid('itemsettings');
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
	var allsettingbutton = hittaid('setting').getElementsByTagName('i');
	var stylecode = [];
	for (var i = allsettingbutton.length - 1; i >= 0; i--) {
		if(allsettingbutton[i].getAttribute('data-state') == 'off'){
			stylecode.push('.setting' + allsettingbutton[i].getAttribute('data-namn'));
			localStorage.setItem('setting' + allsettingbutton[i].getAttribute('data-namn'), 'off');
		}else{
			localStorage.removeItem('setting' + allsettingbutton[i].getAttribute('data-namn'));
		};
	};
	var stylesettings = hittaid('stylesettings');
		removechilds(stylesettings);
	if(stylecode.length == 0){
		var stylecodetext = document.createTextNode('/*Code for style*/');
	}else{
		var stylecodetext = document.createTextNode(stylecode.join(', ') + ' {display: none!important;}');
	};
		stylesettings.appendChild(stylecodetext);
};
function mark(element, id){
	var alltd = hittaid('items').getElementsByTagName('img');
	for (var i = alltd.length - 1; i >= 0; i--) {
		alltd[i].removeAttribute('class');
	}
	element.setAttribute('class', 'blue');
	activate('aktivera', 'quests');
};
function searchstop(element, event){
	var alternativ = hittaid('alternativ');
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
	}else if(element.value == ''){

	}else{
		addalternativ(alternativ, resultat);
	};
};
function closeststop(element){
	if(lat == 0){}else{
		var resultat = [];
		for (var i = pokestop.length - 1; i >= 0; i--) {
			var distance = Math.round(getDistanceFromLatLonInKm(pokestop[i].latitude,pokestop[i].longitude) * 10000);
			resultat.push(pad(distance, 15) + '|||' + pokestop[i].namn);
		};
		resultat.sort();
		hittaid('pokestopnamn').value = resultat[0].split('|||')[1];
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
	var input = hittaid('pokestopnamn');
		input.value = namn;
	searchstop(input, event)
};
function startoption(text){
	var wrapper = hittaid('quests');
		var startoption = document.createElement('option');
			startoption.setAttribute('value', '');
			var startoptiontext = document.createTextNode(text);
			startoption.appendChild(startoptiontext);
		wrapper.appendChild(startoption);
};
function additems(){
	var wrapper = hittaid('items').getElementsByTagName('tbody')[0];
		var tr = document.createElement('tr');
		var rader = 0;
		for (var i = 0; i < rewards.length; i++){
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
					img.setAttribute('data-index', i);
				td.appendChild(img);
			tr.appendChild(td);
			rader++;
		};
		wrapper.appendChild(tr);
	var questwrapper = hittaid('quests');
		questwrapper.setAttribute('onchange', 'addnumber(this);')
		startoption('Välj quest');
		addquest('Alla')
	var typquest = hittaid('typquest');
	for (var i = 0; i < questgroups.length; i++){
		var label = document.createElement('div');
			label.setAttribute('onclick', 'markquestgroup(this);addquest("' + questgroups[i] + '")');
			label.setAttribute('class', 'questgroup');
			var labeltext = document.createTextNode(questgroups[i]);
			label.appendChild(labeltext);
		typquest.appendChild(label);
	};
};
function markquestgroup(element){
	var typquest = hittaid('typquest').getElementsByClassName('questgroup');
	for (var i = typquest.length - 1; i >= 0; i--) {
		typquest[i].removeAttribute('style');
	};
	element.setAttribute('style', 'background-color: #000; color: #FFF;');
}
function addquest(group){
	var questwrapper = hittaid('quests');
	var questtoprint = [];
	if(group == 'Alla'){
		for (var i = 0; i < quests.length; i++){
			questtoprint.push({"data": quests[i], "index": i});
		};
	}else{
		for (var i = 0; i < quests.length; i++){
			if(quests[i].group == group){
				questtoprint.push({"data": quests[i], "index": i});
			};
		};
	};
	removechilds(questwrapper);
	startoption('Välj quest');
	for (var i = 0; i < questtoprint.length; i++){
		var option = document.createElement('option');
			option.setAttribute('value', questtoprint[i].data.namn);
			option.setAttribute('data-number', questtoprint[i].data.number);
			option.setAttribute('data-index', questtoprint[i].index);
			var optiontext = document.createTextNode(questtoprint[i].data.namn);
			option.appendChild(optiontext);
		questwrapper.appendChild(option);
	};
}
function addnumber(element){
	activate('deaktivera', 'regbutton');
	activate('deaktivera', 'num');
	hittaid('num').value = '';
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
	var button = hittaid(id);
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
function hideall(id){
	var wrappers = ['setting', 'add', 'wrapper', 'information', 'questions', 'mapid'];
	for (var i = wrappers.length - 1; i >= 0; i--) {
		hittaid(wrappers[i]).setAttribute('style', 'display: none;');
	}
	hittaid('meny').setAttribute('class', 'menyleft');
	hittaid(id).removeAttribute('style');
	if(id == 'add'){hittaid('pokestopnamn').focus();};
};
function angra(){
	hideall('wrapper');
	hittaid('meny').setAttribute('class', 'menyright');
	var alltd = hittaid('items').getElementsByTagName('img');
	for (var i = alltd.length - 1; i >= 0; i--) {
		alltd[i].removeAttribute('class');
	};
	removechilds(hittaid('alternativ'));
	activate('deaktivera', 'quests');
	hittaid('pokestopnamn').value = '';
	hittaid('num').value = '';
	activate('deaktivera', 'num');
	activate('deaktivera', 'regbutton');
	hittaid('quests').selectedIndex = 0;
	hittaid('wrapper').removeAttribute('style');
	var allquest = hittaid('typquest').getElementsByClassName('questgroup');
	for (var i = allquest.length - 1; i >= 0; i--) {
		allquest[i].removeAttribute('style');
	};
	addquest('Alla');
};
function registrera(){
	var pokestopval = hittaid('pokestopnamn').value;
	var item = document.getElementsByClassName('blue')[0];
	var itemnamn = item.getAttribute('data-namn');
	var itemplats = item.getAttribute('src');
	var itemindex = item.getAttribute('data-index');
	var quests = hittaid('quests').getElementsByTagName('option');
	for (var i = 0; i < quests.length; i++){
		if(!quests[i].selected){}else{
			var questomnummer = quests[i].getAttribute('data-number');
			var questvalue = quests[i].getAttribute('value');
		};
	};
	var questindex = getindexquest(questvalue);
	if(questomnummer == 'true'){
		var nummer = hittaid('num').value;
		var questvalue = questvalue.replace('{?}', nummer);
	}else{
		var nummer = 0;
	};
	var pokestopobj = getpokestopobjekt(pokestopval);
	if(pokestopval == ''){return false};
	if(!pokestopobj){return false};
	addexample(pokestopobj.obj, itemnamn, itemplats, questvalue, 0, '');
	socket.emit('registrera', {"p": pokestopobj.index, "i": parseInt(itemindex), "q": questindex, "v": nummer});
	uppdateDistance();
	angra();
};
function getindexquest(value){
	for (var i = 0; i < quests.length; i++){
		if(quests[i].namn == value){
			return i;
		};
	};
};
function getpokestopobjekt(pokestopnamn){
	for (var i = 0; i < pokestop.length; i++){
		if(pokestop[i].namn.toLowerCase() == pokestopnamn.toLowerCase()){
			return {"obj": pokestop[i], "index": i};
		};
	};
};
function addexample(pokestopobj, itemnamn, itemplats, questvalue, questantal, givenkm){
	var wrapper = hittaid('wrapper');
		var tr = document.createElement('div');
			tr.setAttribute('class', 'tr setting' + itemnamn);
			tr.setAttribute('data-namn', pokestopobj.namn);
			tr.setAttribute('data-longitude', pokestopobj.longitude);
			tr.setAttribute('data-latitude', pokestopobj.latitude);
			tr.setAttribute('data-itemnamn', itemnamn);
			tr.setAttribute('data-itemplats', itemplats);
			tr.setAttribute('data-questvalue', questvalue);
			tr.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + pokestopobj.latitude + ',' + pokestopobj.longitude + '")');
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
				if(itemnamn == 'pokemon'){
					findsecretpkm(questvalue, itemplats, imgwrp);
				}else{
						img.setAttribute('src', itemplats);
					imgwrp.appendChild(img);
				};
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
function findsecretpkm(quest, itemplats, wrapper) {
	var svar = itemplats;
	var items = 0;
	for (var i = 0; i < secretpokm.length; i++){
		if(secretpokm[i].sok == quest){
			for (var a = 0; a < secretpokm[i].pkm.length; a++){
				var img = document.createElement('img');
					img.setAttribute('src', 'https://www.gymlund.tk/img/pokemon/bilder/' + secretpokm[i].pkm[a] + '.png');
					img.setAttribute('style', 'max-width: 30px;');
				wrapper.appendChild(img);
				items++;
			};
		};
	};
	if(items == 0){
		var img = document.createElement('img');
			img.setAttribute('src', itemplats);
		wrapper.appendChild(img);
	};
	return svar;
};
function pad (str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
};
function sortbykm(){
	if(lat == 0 || lon == 0){}else{
		var alllines = hittaid('wrapper').getElementsByClassName('tr');
		var data = [];
		var num = [];
		for (var i = alllines.length - 1; i >= 0; i--) {
			num.push(pad(alllines[i].getAttribute('data-km'), 10) + '|||' + alllines[i].getAttribute('data-namn'));
			data.push({"km": pad(alllines[i].getAttribute('data-km'), 10), "namn": alllines[i].getAttribute('data-namn'), "longitude": alllines[i].getAttribute('data-longitude'), "latitude": alllines[i].getAttribute('data-latitude'), "itemnamn": alllines[i].getAttribute('data-itemnamn'), "itemplats": alllines[i].getAttribute('data-itemplats'), "questvalue": alllines[i].getAttribute('data-questvalue'), "questantal": 0})	
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
		removechilds(hittaid('wrapper'));
		for (var i = nyordning.length - 1; i >= 0; i--) {
			addexample({"namn": nyordning[i].namn, "latitude": nyordning[i].latitude, "longitude": nyordning[i].longitude}, nyordning[i].itemnamn, nyordning[i].itemplats, nyordning[i].questvalue, 0, nyordning[i].km);
		};
	};
};

var lon = '0';
var lat = '0';
setInterval(getLocation, 60000);
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log('Kunde inte få tag på användarens plats.');
	};
};
function updateFindPokestopLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(afterposfindpokestop);
	} else {
		console.log('Kunde inte få tag på användarens plats.');
	};
};
function afterposfindpokestop(position) {
	console.log('Location uppdaterad.')
	window['lat'] = position.coords.latitude;
	window['lon'] = position.coords.longitude;
	closeststop(hittaid('closeststop'));
};
function showPosition(position) {
	window['lat'] = position.coords.latitude;
	window['lon'] = position.coords.longitude;
	hittaid('closeststop').setAttribute('style', 'display: inline-block;')
	uppdateDistance();
};
function uppdateDistance(){
	var allines = hittaid('wrapper').getElementsByClassName('tr');
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
		return d;
	};
};

function deg2rad(deg) {
	return deg * (Math.PI/180)
};

function readsave(data){
	var pokestopobj = pokestop[data.p];
	var itemnamn = rewards[data.i].namn;
	var itemplats = rewards[data.i].plats;
	var questvalue = quests[data.q].namn;
	if(data.v == 0){}else{
		var questvalue = questvalue.replace('{?}', data.v);
	};
	if(lat == 0){
		var givenkm = 'X';
	}else{
		var givenkm = Math.round(getDistanceFromLatLonInKm(pokestopobj.latitude,pokestopobj.longitude) * 10);
	};
	addexample(pokestopobj, itemnamn, itemplats, questvalue, 0, givenkm);
};

var geturl = window.location.href.replace('http://', '').replace('https://', '').split('/')[0];
//Lyssnar om server säger något
var socket = io.connect(geturl);
// Berättar för användare ifall koppling till server försvinner
socket.on('disconnect', function () {
	hittaid('error').removeAttribute('style');
});
// Tar mot data från server
socket.on('data', function(data) {
	hittaid('error').setAttribute('style', 'display: none;');
	var wrapper = hittaid('wrapper');
	removechilds(wrapper);
	if(data.length == 0){}else{
		for (var i = data.length - 1; i >= 0; i--) {
			readsave(data[i]);
		};
	};
	sortbykm();
});
function addmap(){
	hideall('mapid');
	var mapidelem = hittaid('mapid');
	if(mapidelem.getAttribute('data-loaded') == 'no'){}else{
		var mapidwrapper = hittaid('mapidwrapper');
			mapidelem.remove();
			var nymapid = document.createElement('div');
				nymapid.setAttribute('id', 'mapid');
				nymapid.setAttribute('data-loaded', 'no');
			mapidwrapper.appendChild(nymapid);
			var mapidelem = hittaid('mapid');
	};
	if(mapidelem.getAttribute('data-loaded') == 'no'){
		mapidelem.setAttribute('data-loaded', 'yes');
		var icon = L.Icon.extend({
		    options: {
		        shadowUrl: '',
		        iconSize:     [40, 40],
		        shadowSize:   [0, 0],
		        iconAnchor:   [20, 39],
		        shadowAnchor: [0, 0],
		        popupAnchor:  [0, -40]
		    }
		});
		var inactive = L.icon({
		    iconUrl: 'img/inactive.png',
		    shadowUrl: '',
	        iconSize:     [12, 12],
	        shadowSize:   [0, 0],
	        iconAnchor:   [6, 11],
	        shadowAnchor: [0, 0],
	        popupAnchor:  [0, -12]
		});
		var iconelem = {};for (var i = rewards.length - 1; i >= 0; i--) {iconelem[rewards[i].namn] = new icon({iconUrl: rewards[i].plats});};
		if(lat == 0){var coordinates = [55.7068782,13.1901836];}else{var coordinates = [lat,lon];};
		var mymap = L.map('mapid').setView(coordinates, 13);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			    maxZoom: 18,
			    id: 'mapbox.streets',
			    accessToken: 'pk.eyJ1IjoidGVkZHlrbGFkZGthayIsImEiOiJjamdhbHZobXYwM2ptMnBsemVua2pwYjNyIn0.T17N6gTdg1orob1oNejuTw'
			}).addTo(mymap);
		var alllines = hittaid('wrapper').getElementsByClassName('tr');
		var registerd = [];
		for (var i = alllines.length - 1; i >= 0; i--) {
			var longitude = alllines[i].getAttribute('data-longitude');
			var latitude = alllines[i].getAttribute('data-latitude');
			var namn = alllines[i].getAttribute('data-namn');
			registerd.push(namn);
			var item = alllines[i].getAttribute('data-itemnamn');
			var quest = alllines[i].getAttribute('data-questvalue');
			console.log(longitude + ' - ' + latitude + ' - ' + namn + ' - ' + item + ' - ' + quest)
			L.marker([latitude,longitude], {icon: iconelem[item]}).addTo(mymap).bindPopup(namn + ': ' + quest);
		};
		for (var i = pokestop.length - 1; i >= 0; i--) {
			var todo = true;
			for (var a = registerd.length - 1; a >= 0; a--) {
				if(registerd[a] == pokestop[i].namn){
					var todo = false;
				};
			};
			if(todo){
				L.marker([pokestop[i].latitude, pokestop[i].longitude], {icon: inactive}).addTo(mymap);
			};
		};
	}else{
		mapidelem.setAttribute('style', 'position: relative;');
	};
};