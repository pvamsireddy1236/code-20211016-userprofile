const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const mariadb = require('mariadb');
const bodyParser = require('body-parser');



const app = express();
app.use(cors())
app.use(bodyParser.json());

const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: 'root',
     port:'3307',
     connectionLimit: 5,
     database:'usersdb',
});
app.use('/login',async function (req, res) {
  let userLoginDetails = req.body; 
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * from user where email='${userLoginDetails.email}' and password='${userLoginDetails.password}'`);
    res.send(rows)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
});


app.use('/userdetails',async function (req, res) {
  let userLoginDetails = req.body; 
  console.log('userLoginDetails >>',userLoginDetails)
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * from user where id='${userLoginDetails[0].id}'`);  
    res.send(rows.sort((a, b) => a.name > b.name && 1 || -1))
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
});

const sortList = (rows) =>{
  let list = rows.sort((a, b) => a.name > b.name && 1 || -1)
  return list;
}

app.use('/userdetailslist',async function (req, res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * from user`);  
    res.send(sortList(rows))
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
});



app.use('/test',async function (req, res) {
  let conn;
  let response;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * from user");
    response=rows
    res.send(response)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
});




app.listen(4000);

module.exports = {
  sortList,
}
