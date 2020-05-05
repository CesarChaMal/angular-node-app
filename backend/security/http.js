var http = require('http'),
express = require('express'),
app = express();

var portHttp = 3000;

http.createServer(app).listen(portHttp, function() {
	console.log('Server listening on port ' + portHttp);
})

app.get('/', function (req, res) {
	res.header('Content-type', 'text/html');
	return res.end('<h1>Hello, Secure World!</h1>');
});