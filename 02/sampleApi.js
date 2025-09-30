const http = require("http");

const users = [
    {
        username: "Sanjay 1",
        age: 24,
        email: 'sanju1@gmail.com'
    },
    {
        username: "Sanjay2",
        age: 34,
        email: 'sanju2@gmail.com'
    },
    {
        username: "Sanjay 3",
        age: 42,
        email: 'sanju3@gmail.com'
    },
]

http.createServer((req, res) => {
    

    res.setHeader("Content-Type", "application/json");

    res.write(JSON.stringify(users))

    res.end()
}).listen(5000)