var express =require('express');
var app = express();
var port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/index.html');
});

app.get('/contact',function(req,res){
console.log('Serving Contact');
 res.render('./public/contact.html');
});

app.listen(port);
console.log('Server Listening at port'+port);