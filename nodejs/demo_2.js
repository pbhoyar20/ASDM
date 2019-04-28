var http =require("http");

 var server= http.createServer(function(req,resp)
 {
	resp.write("Hello World");
	resp.write("welcome to iacsd");
	resp.write("okay bye");
	resp.end("done");
	
	
 });
 server.listen(2000);
 console.log("server is listening");