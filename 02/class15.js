const http = require("http")
const fs = require("fs")
const queryString = require("querystring")

http.createServer((req, res) => {

    fs.readFile("./index.html", "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500,{"content-type" : "text/plain"})
            res.write("internals server error")
            res.end()
            return;
        }

        
        res.writeHead(200,{"content-type": "text/html"})
        if (req.url == "/") {
            res.write(data)
            
        }
        else if(req.url == "/submit") {

            
            let dataBody = []
            
            req.on('data',(chunk) => {
                dataBody.push(chunk)
            })
            
            req.on('end',() => {
                let rawData = Buffer.concat(dataBody).toString();
                let formatedData = queryString.parse(rawData)
                let userData = `My name is ${formatedData.username} `
                // fs.writeFileSync("user.txt", userData)

                fs.writeFile(formatedData.username + ".txt", userData, "utf-8", (err) => {
                    if (err) {
                        return false
                    }
                })
                
            })
            res.write('<h1>Form submitted</h1>')
        }
        res.end()
    })


}).listen(5000)