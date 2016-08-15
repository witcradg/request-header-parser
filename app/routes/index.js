'use: strict';

module.exports = function (router) {
    // Provide all routes here, this is for Home page.
    router.get("/",function(req,res) {
    	var headers = req.headers;
        var language = headers["accept-language"];
        var software = headers["user-agent"].replace('(','|').replace(')','|').split('|')[1];
        
	    var obj = {
   	    	"ipaddress": headers['x-forwarded-for'],
   	     	"language": language.split(',')[0],
   	     	"software": software
   		};
	  	//res.send("<pre>"+JSON.stringify(obj, null, ' ')+"</pre>");
	  	res.send(JSON.stringify(obj, null, ' '));
	});
}
