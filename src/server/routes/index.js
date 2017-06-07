const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const physicalQueries = require('../queries/physical.queries.js');
const emotionalQueries = require('../queries/emotional.queries');
const assessmentQueries = require('../queries/assessment.queries');
const environmentalQueries = require('../queries/environmental.queries');
const intellectualQueries = require('../queries/intellectual.queries');
const occupationalQueries = require('../queries/occupational.queries');
const socialQueries = require('../queries/social.queries');
const spiritualQueries = require('../queries/spiritual.queries');
const clubsQueries = require('../queries/clubs.queries');
const usersQueries = require('../queries/users.queries');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5434/cssp';

router.get('/', function(req, res, next){
    res.sendFile(path.join(
    __dirname, '..','..','app','app.html'));
});

/**************** PHYSICAL *****************/
router.get('/getPhysicalClubs', physicalQueries.getPhysicalClubs);
router.get('/getPhysicalRecources', physicalQueries.getPhysicalResources);
router.get('/getPhysicalGoals',physicalQueries.getPhysicalGoals);

/***************** EMOTIONAL **************************/
router.get('/getEmotionalClubs', emotionalQueries.getEmotionalClubs);
router.get('/getEmotionalResources', emotionalQueries.getEmotionalResources);

/***************** ASSESSMENT **************************/
router.get('/getAssessmentClubs', assessmentQueries.getAssessmentClubs);

/***************** ENVIRONMENTAL **************************/
router.get('/getEnvironmentalClubs', environmentalQueries.getEnvironmentalClubs);
router.get('/getEnvironmentalResources', environmentalQueries.getEnvironmentalResources);

/***************** INTELLECTUAL **************************/
router.get('/getIntellectualClubs', intellectualQueries.getIntellectualClubs);

/***************** OCCUPATIONAL **************************/
router.get('/getOccupationalClubs', occupationalQueries.getOccupationalClubs);

/***************** SOCIAL **************************/
router.get('/getSocialClubs', socialQueries.getSocialClubs);

/***************** SPIRITUAL **************************/
router.get('/getSpiritualClubs', spiritualQueries.getSpiritualClubs);


router.post('/addClubs', clubsQueries.addClubs);
router.post('/addUser', usersQueries.addUser);
router.get('/getUser',usersQueries.getUser);

module.exports = router;
