var path = require('path');
var express = require('express');
var os = require("os");
var app = express();
console.log("express created");
app.use(express.static(path.join(__dirname, 'web')));
console.log("getting index.html");

app.get('/:id', function(req, res){
	console.log("rendering index.html");
	var cust_id=req.params.id;
	console.log(cust_id);
    res.sendFile(__dirname +'/web/index.html',{custid:cust_id});
});

 g  
var host = os.hostname();
console.log('Listening on port ' +port);

app.listen(port);

console.log('Listening at host ' +host);