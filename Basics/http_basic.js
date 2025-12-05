const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
    if(req.url === '/users'){
        res.writeHead(200,{"content-type": "application/json"});
        res.end(JSON.stringify({name:"thub"}));
    }
    else{
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello! This is a basic HTTP server.");
    res.end();
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
