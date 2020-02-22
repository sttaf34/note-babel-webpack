var http = require("http");
var mysql = require("mysql");

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("hello, Node.js world!");

  var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST || "db",
    user     : process.env.MYSQL_USER || "root",
    password : process.env.MYSQL_PASSWORD || "password",
    database : process.env.MYSQL_DATABASE || "sample",
  });

  connection.connect(function(error) {
    if (error) {
      console.error('error connecting: ' + error.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('show databases;', function (error, results) {
    console.log(error);
    console.log(results);
  });
});

var port = process.env.PORT || 9000;
server.listen(port, function() {
  console.log(`Serving on ${port}...`);
});
