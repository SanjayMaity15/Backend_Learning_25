const http = require("http")

http.createServer((req, res) => {
    
    res.setHeader("Content-Type", "text/html")
    res.write(`<html>
        
        <head>
        <title>Class 10</title>
        </head>
        <body>
            <h1>This is heading 1</h1>
            <p>This is para</p>
        </body>
        
        </html>`)
    res.end()
}).listen(5000)









