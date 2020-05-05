var fs = require('fs'),
https = require('https'),
express = require('express'),
app = express();

var portHttps = 4443;
var key = fs.readFileSync('dev-ops-key.pem', 'utf8');
var cert = fs.readFileSync('dev-ops.crt', 'utf8');

var https_options = {
    key: key,
    cert: cert
};

https.createServer(https_options, app).listen(portHttps, function() {
	console.log('Server listening on secure port ' + portHttps);
});

app.get('/', function (req, res) {
	res.header('Content-type', 'text/html');
	return res.end('<h1>Hello, Secure World!</h1>');
});