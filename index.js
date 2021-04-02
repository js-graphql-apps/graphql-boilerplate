var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"})

    const url = req.url;
    console.log('url ----', url);

    if(url == '/employees') {
        const employees = [{id: 101, name: 'Paul bryant'}, {id: 102, name: 'Ning'}]
        //  res.write(employees);
        res.end(JSON.stringify(employees));
    }
});




var port = process.env.PORT || 3002;
server.listen(port, '', function(){
    console.info(`Node app is running at ${port}`);
});

