var http = require('http');

http.createServer(function (req, res) {
  
  var s: String;
  s = "Eyal Hen" + 3;





  var returnString: String;
  returnString = "Hello World <br>" + s;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(returnString);
}).listen(8080);