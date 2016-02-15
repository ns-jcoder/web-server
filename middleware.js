//middleware.js

var middleware = {
 requireAuthentication: function (req, res, next){
 	console.log('private route hit!');
 	next();
 },logger:function (req,res, next){
 	console.log('Request method: ' + new Date().toString() + ' ' + req.method+ ' '+ req.originalUrl);
 	next();
 }
};

module.exports = middleware;