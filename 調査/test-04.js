var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1 ',
  user     : 'root@localhost',
  password : '',
});

connection.connect();

connection.query('SELECT * FROM makechart.chart', function (error, results, fields) {

});

connection.end();