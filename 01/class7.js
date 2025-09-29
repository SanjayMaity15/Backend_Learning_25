const http = require("http");

http.createServer((req, res) => {
    res.write("This is backend code")
    res.end("Server is running")
}).listen(5000)


http.createServer((req, res) => {
    res.write("This is backend code 2 \n")
    res.end("Server is running")
}).listen(4000)