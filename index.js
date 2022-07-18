//making a server

const http = require("http");

const server = http.createServer((req,res)=>
{
    if(req.url === "/")
    {
        res.end("<h1>come home babe</h1>");
    }
    else if(req.url === "/about")
    {
        res.end("<h1>about love</h1>");
    }
    else if(req.url === "/contact")
    {
        res.end("<h1>contact me baby!</h1>");
    }
    else
    {
        res.end("<h1> 404:page not found")
    }
})

server.listen(3000,"localhost",()=>
{
    console.log("server is working on http://localhost:3000")
})

