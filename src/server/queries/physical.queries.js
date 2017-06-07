(function () {
    const express = require('express');
    const router = express.Router();
    const pg = require('pg');
    const path = require('path');
    const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/cssp';

    function getPhysicalClubs(req, res, next){
        const results = [];
        pg.connect(connectionString, function(err, client, done){
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
          const query = client.query('SELECT d.name, c.name, c.contact_name, c.phone, c.email, c.category from clubs c ,dimension d WHERE c.dimension_id = d.id and d.name="Physical";');
            query.on('row', function(row){
                results.push(row);
            });
            query.on('end', function(){
                done();
                return res.json(results);
            });
        });
    }

  function getPhysicalResources(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }

      var qryStg="SELECT d.name, c.name, c.phone, c.web, c.email, c.contacts, c.location from campus_resource c ,dimension d WHERE c.dimension_id = d.id and d.name='Physical';"
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

  function getPhysicalGoals(req, res, next){
    const results = [];
    var search=req._parsedUrl.query;
    search = search.substring(0, search.length - 1);
    console.log("search value",search)
    queryStr = "SELECT * from goal g ,dimension d WHERE g.dimension_id = d.id and d.name='Physical' and g.user_id="+search+";"
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

  function getPhysicalWorkshops(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT d.name, c.name, c.location, c.date, c.start time, c.stop time, c.url from workshops c ,dimension d WHERE c.dimension_id = d.id and d.name="Physical";');
      query.on('row', function(row){
        results.push(row);
      });
      query.on('end', function(){
        done();
        return res.json(results);
      });
    });
  }

  function getPhysicalTutorials(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query('SELECT d.name, c.url from tutorials c ,dimension d WHERE c.dimension_id = d.id and d.name="Physical";');
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
      getPhysicalClubs: getPhysicalClubs,
      getPhysicalResources:getPhysicalResources,
      getPhysicalGoals:getPhysicalGoals,
      getPhysicalWorkshops: getPhysicalWorkshops,
      getPhysicalTutorials: getPhysicalTutorials
    };
})();
