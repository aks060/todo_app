const config_file=require("../config");
const session=require('express-session');
const path = require('path');
const bcrypt=require("bcryptjs");

const mysql=require('mysql');

const conn=mysql.createConnection(
    {
        host: config_file.dbHost,
        user: config_file.dbUser,
        password: config_file.dbPass,
        database: config_file.dbName
      }
);

conn.connect(function(err){
    if (err) throw err;
    console.log('DB Connected');
});

module.exports={
    conn: conn
}