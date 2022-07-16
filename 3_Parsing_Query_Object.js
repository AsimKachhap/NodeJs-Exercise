var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    //Get URL and parse it
    var parsedURL = url.parse(req.url, true);
    //Get the path.
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');
    //Get Query String
    var queryStringObject = parsedURL.query;
    //Get the HTTP Method
    var method = req.method.toLowerCase();
    //Log the request path and method
    res.end('Hello World \n');

    console.log('Request recieved on path: '+trimmedPath+' with method: '+method+'with query object:'
    ,queryStringObject);
});

server.listen(3000,function(){
    console.log('The server is listening on port 3000 now');
});