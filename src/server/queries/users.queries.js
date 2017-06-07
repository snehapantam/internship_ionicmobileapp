(function () {
  const express = require('express');
  const router = express.Router();
  const pg = require('pg');
  const path = require('path');
  const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/cssp';
  var rowcount;


  function addUser(req, res, next){
    console.log("user",req.body.data)
    const data = req.body.data;
    const results = [];

    pg.connect(connectionString, function(err, client, done){
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      var count = client.query('SELECT * FROM users ;',function (err,result) {
        rowcount = result.rows.length
        console.log(rowcount)
        add(rowcount);
      });

      function add(rowcount) {
        console.log("rowcount",rowcount)
        // SQL Query > Insert Data
        const query = client.query('INSERT INTO users(id,name, password, email, role, major, minor) VALUES ($1,$2,$3,$4,$5,$6,$7);',
          [rowcount+1,data.name, data.password, data.email,data.role,data.major,data.minor]);
        query.on('end', function(){
          done();
        });
      }

    });
  }


  function getUser(req, res, next){
    const results = [];
    var search=req._parsedUrl.query;
    search = search.substring(0, search.length - 1);
    queryStr = "SELECT * FROM users u WHERE u.email ='"+ search +"';"
    console.log(queryStr)
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log("eroorrrrr",err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query(queryStr);
      query.on('row', function(row){
        console.log("inside")
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  module.exports = {
    addUser: addUser,
    getUser:getUser
  };
})();

