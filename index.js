var http = require('http');
var fs = require('fs');
var path = require('path');
const makeDir = require('make-dir');

//Datum funktion.
function addzero(number){if(number <= 9){return "0" + number;}else{return number;};};
function getDate(dateannan, timeannan, milisecsave){
	if(!dateannan && !timeannan && !milisecsave){var date = new Date();}else if(!milisecsave){var annatdatum = dateannan.split('-');var annattid = timeannan.split(':');var date = new Date(annatdatum[0], annatdatum[1] - 1, annatdatum[2], annattid[0], annattid[1]);}else{var date = new Date(parseInt(milisecsave));};
	return {"datum": date.getFullYear() + '-' + addzero(date.getMonth() + 1) + '-' + addzero(date.getDate()), "tid": addzero(date.getHours()) + ':' + addzero(date.getMinutes()), "milisec": date.getTime(), "manad": date.getFullYear() + '-' + addzero(date.getMonth() + 1)};
};


var config = {
	"public": __dirname + '/public',
	"savedata": __dirname + '/savedata.json',
	"port": 4455,
	"savemin": 20
};


//Startar server och tillåtna filer
var server = http.createServer(function (request, response) {
	var filePath = '.' + request.url;
	if (filePath == './') {filePath = './index.html';};
	//Här radas alla tillåtna filer
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;	  
		case '.jpg':
			contentType = 'image/jpg';
			break;
		case '.ico':
			contentType = 'image/x-icon';
			break;
		case '.wav':
			contentType = 'audio/wav';
			break;
	};
	loadpage(filePath, extname, response, contentType);
});

function loadpage(filePath, extname, response, contentType){
	//Säger till server att läsa och skicka fil till klient (Möjlighet att lägga till felmeddelanden)
	fs.readFile(config.public + '/' + filePath, function(error, content) {
		if (error) {
			if(error.code == 'ENOENT'){
				fs.readFile('./404.html', function(error, content) {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				});
			}
			else {
				response.writeHead(500);
				response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
				response.end(); 
			}
		}
		else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});
};


//Läser sparfil och tömmer info om det är ny dag eller skapar ny fil om den inte finns.
function skrivtillspara(innehall){if(innehall == 'tom'){var innehall = {"datum": getDate().datum, "data": []};};fs.writeFileSync(config.savedata, JSON.stringify(innehall, null, ' '));var savedata = innehall;};
var savedata = '';
if (fs.existsSync(config.savedata)) {
	var savedata = JSON.parse(fs.readFileSync(config.savedata, 'utf8'));
	if(savedata.datum == getDate().datum){}else{
		skrivtillspara('tom');
	};
}else{
	skrivtillspara('tom');
	var savedata = {"datum": getDate().datum, "data": []};
};

var timetosave = 'false';
var savevar = setInterval(saveloop, ((config.savemin * 1000) * 60));
function saveloop() {
	if(getDate().datum == savedata.datum){
		if(timetosave == 'true'){
			timetosave = 'false';
			skrivtillspara(savedata);
			console.log('Ny info finns, sparad!');
		}else{
			console.log('Ingen ny info finns, sparar inte..');
		};
	}else{
		skrivtillspara('tom');
		console.log('Ny dag = tom fil :S');
	};
};


// Loading socket.io
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket, username) {
	socket.emit('data', savedata.data);
	
	socket.on('registrera', function (data) {
		if(getDate().datum == savedata.datum){
			timetosave = 'true';
			savedata.data.push(data);
		}else{
			skrivtillspara('tom');
			var savedata = {"datum": getDate().datum, "data": []};
		};
		socket.broadcast.emit('data', savedata.data);
	});
});
	
	
//Kollar IP adress för server.
function getIPAddress() {
	var interfaces = require('os').networkInterfaces();
	for (var devName in interfaces) {
		var iface = interfaces[devName];
		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
			return alias.address;
		};
	};
	return '0.0.0.0';
};
var ip = getIPAddress();
console.log('http://localhost:' + config.port);
console.log('http://' + ip + ':' + config.port);
server.listen(config.port);