// Generated by CoffeeScript 1.6.3
(function() {
  var http;

  http = require("http");

  http.createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.write("Hello World");
    return response.end();
  }).listen(8888);

}).call(this);
