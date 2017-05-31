var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5434/puppies';
var db = pgp(connectionString);

function getCampusResources(req, res, next){
    const results = [];
    pg.connect(connectionString, function(err, client, done){
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        const query = client.query('SELECT * FROM campus_resource ORDER BY id ASC;');
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
    getAllRec: getAllPuppies,
    //getSinglePuppy: getSinglePuppy,
    //createPuppy: createPuppy,
   // updatePuppy: updatePuppy,
    //removePuppy: removePuppy
};
