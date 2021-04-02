import { createServer } from 'http';

var server = createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"})

    const url = req.url;

    if(url == '/employees') {
        const employees = [{id: 101, name: 'Paul bryant'}, {id: 102, name: 'Ning'}]
        
        res.end(JSON.stringify(employees));
    } else {
        res.end('Illegal request')
    }
});

var port = process.env.PORT || 3002;
server.listen(port, '', function(){
    console.info(`Node app is running at ${port}`);
});

