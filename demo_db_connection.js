var mysql = require('mysql');

// create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// simple query
con.query(
  'SELECT * FROM `usertable` ',
  function(err, results, fields) {
    if (err) throw err;
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
    
  }
  
);


