const http = require("http")
const { userForm } = require("./form");
const { submitForm } = require("./submit");

http.createServer((req, res) => {
    res.writeHead(200,{"content-type" : "text/html"})

    if (req.url == "/") {
    userForm(req, res);
        
    } if (req.url == "/submit") {
        submitForm(req, res)
    }

    res.end()
}).listen(5000)