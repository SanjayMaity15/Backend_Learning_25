const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        res.write("Internal server error");
        res.end();
        return;
      }

      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(5000);
