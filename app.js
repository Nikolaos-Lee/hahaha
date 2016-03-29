var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


var item =
{
	pic:
	['i00001.jpg','i00002.jpg','i00003.jpg','i00004.jpg','i00005.jpg','i00006.jpg','i00007.jpg','i00008.jpg','i00009.jpg','i00010.jpg','i00011.jpg','i00012.jpg'],
		name:['A','B','C','D','E','F','G','H','I','J','K','L']
}



app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});
app.get('/', function(req, res) {
	res.render('index',item);
});
app.listen(port);
