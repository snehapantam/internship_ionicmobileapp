/**
 * Created by sreen on 5/31/2017.
 */
/**
 * Created by sreen on 5/31/2017.
 */
/**
 * Created by sreen on 5/31/2017.
 */
/**
 * Created by sreen on 5/31/2017.
 */
/**
 * Created by sreen on 5/31/2017.
 */
(function () {
  const express = require('express');
  const router = express.Router();
  const pg = require('pg');
  const path = require('path');
  const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5434/cssp';

  function getSpiritualClubs(req, res, next){
    const results = [];
    console.log("inside queries")
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT * FROM clubs WHERE dimension_id = 41;');
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  module.exports = {
    getSpiritualClubs: getSpiritualClubs
  };
})();
