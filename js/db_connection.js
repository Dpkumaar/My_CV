var mysql = require('mysql');

var con = mysql.createConnetion({
	host: "localhost",
	usar: "usarname",
	password: ""
});

con.connect(function(err){
	if (err) throw err;
	console.log("connected!");

});