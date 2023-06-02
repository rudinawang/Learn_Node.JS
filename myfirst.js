var http = require("http");
const dt = require("./myfirstModule");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.write("\n");
    res.write("This is the Current Date and Time" + dt.myDateTime());
    res.write("\n");
    res.write(req.url);
    res.end();
  })
  .listen(8080);
