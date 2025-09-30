const http = require("http");


const port = process.argv[2]

http
  .createServer((req, res) => {
    res.write("<h1>Home page<h1>");
    console.log(port);
    
    res.end();
  })
  .listen(port);
