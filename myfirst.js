var http = require("http");
const dt = require("./myfirstModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/htm " });
    res.write("The date and time are currently:" + dt.myDateTime());
    res.write("\n");
    res.end("Hello World!");
  })
  .listen(8000);
