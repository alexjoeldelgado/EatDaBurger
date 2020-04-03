const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    
    insertOne: (columns, values, cb) => {
        orm.insertOne("burgers", columns, values, res => {
            cb(res);
        });
    },

    updateOne: (columnsAndValues, condition, cb) => {
        orm.updateOne("burgers", columnsAndValues, condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;