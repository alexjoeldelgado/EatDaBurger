const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});
  
connection.connect(function(err) {
    if (err) {
        console.error("Could not connect due to: " + err.stack);
    return;
    }
    console.log("Connected at ID: " + connection.threadId);
});
  

module.exports = connection;
  