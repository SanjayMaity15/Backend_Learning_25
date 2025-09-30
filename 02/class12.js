const http = require("http")

http.createServer((req, res) => {

    if(req.url == "/")
        res.write('<h1>Home page<h1>')
    else if (req.url == "/login")
        res.write("<h1>Login page<h1>");
        
    
    

    res.end()
}).listen(5000)