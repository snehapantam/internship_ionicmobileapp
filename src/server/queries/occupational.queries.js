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
  const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/cssp';

  function getOccupationalClubs(req, res, next){
    const results = [];
    console.log("inside queries")
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }

      var qryStg="SELECT d.name, c.name, c.contact_name, c.phone, c.email, c.category from clubs c ,dimension d WHERE c.dimension_id = d.id and d.name='Occupational';"
      const query = client.query(qryStg);
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  function getOccupationalResources(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT d.name, c.name, c.phone, c.web, c.email, c.contacts, c.location from campus_resource c ,dimension d WHERE c.dimension_id = d.id and d.name="Occupational";');
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  function getOccupationalGoals(req, res, next){
    const results = [];
    var search=req._parsedUrl.query;
    search = search.substring(0, search.length - 1);
    console.log("search value",search)
    var queryStr = "SELECT * from goal g ,dimension d WHERE g.dimension_id = d.id and d.name='Occupational' and g.user_id="+search+";"
    console.log(queryStr)
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query(queryStr);
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }
  function getOccupationalWorkshops(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT d.name, c.name, c.location, c.date, c.start time, c.stop time, c.url from workshops c ,dimension d WHERE c.dimension_id = d.id and d.name="Occupational";');
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  function getOccupationalTutorials(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT d.name, c.url from tutorials c ,dimension d WHERE c.dimension_id = d.id and d.name="Occupational";');
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
    getOccupationalClubs: getOccupationalClubs,
    getOccupationalResources: getOccupationalResources,
    getOccupationalGoals: getOccupationalGoals,
    getOccupationalWorkshops: getOccupationalWorkshops,
    getOccupationalTutorials: getOccupationalTutorials
  };
})();
