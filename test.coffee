http = require("http")

a = require("index.html")
console.log a

http.createServer((request, response) ->
  response.writeHead 200,
    "Content-Type": "text/plain"

  response.write "Hello World"
  response.end()
).listen 8888
