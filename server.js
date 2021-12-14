const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 2000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {

        if (err) throw err;
        
        let query = url.parse(req.url, true).query;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        
        data = data.replace("{{moi}}", query.name)
        res.end(data);

    }) 
  
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});