const express = require('express');
const mysql =  require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
    
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected ...');
});


const app = express();

app.get('/createdb',(req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3000', () => {
    console.log('Server Started on port 3000');
})