const connection = require("./connection");

const orm = {
    selectAll: (table, cb) => {
    const query = `SELECT * from ${table}`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
    },

    insertOne: (table, columns, values, cb) => {
    if (columns.length === values.length){
        const query = `INSERT INTO ${table} (${columns}) VALUE ("${values}")`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
    });
    } else {
        console.log("The number of columns and values do not match!");
    };    
    },

    updateOne: (table, columnsAndValues, condition, cb) => {
        const query = `UPDATE ${table} SET ${columnsAndValues} WHERE ${condition}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
    });
    }
};


module.exports = orm;