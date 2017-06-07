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
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/cssp';

router.get('/', function(req, res, next){
    res.sendFile(path.join(
    __dirname, '..','..','app','app.html'));
});

/**************** PHYSICAL *****************/
router.get('/getPhysicalClubs', physicalQueries.getPhysicalClubs);
router.get('/getPhysicalResources', physicalQueries.getPhysicalResources);
router.get('/getPhysicalGoals',physicalQueries.getPhysicalGoals);
router.get('/getPhysicalWorkshops',physicalQueries.getPhysicalWorkshops);
router.get('/getPhysicalTutorials',physicalQueries.getPhysicalTutorials);

/***************** EMOTIONAL **************************/
router.get('/getEmotionalClubs', emotionalQueries.getEmotionalClubs);
router.get('/getEmotionalResources', emotionalQueries.getEmotionalResources);
router.get('/getEmotionalGoals', emotionalQueries.getEmotionalGoals);
router.get('/getEmotionalWorkshops', emotionalQueries.getEmotionalWorkshops);
router.get('/getEmotionalTutorials', emotionalQueries.getEmotionalTutorials);

/***************** ASSESSMENT **************************/
router.get('/getAssessmentClubs', assessmentQueries.getAssessmentClubs);
router.get('/getAssessmentResources', assessmentQueries.getAssessmentResources);
router.get('/getAssessmentGoals', assessmentQueries.getAssessmentGoals);
router.get('/getAssessmentWorkshops', assessmentQueries.getAssessmentWorkshops);
router.get('/getAssessmentTutorials', assessmentQueries.getAssessmentTutorials);

/***************** ENVIRONMENTAL **************************/
router.get('/getEnvironmentalClubs', environmentalQueries.getEnvironmentalClubs);
router.get('/getEnvironmentalResources', environmentalQueries.getEnvironmentalResources);
router.get('/getEnvironmentalGoals', environmentalQueries.getEnvironmentalGoals);
router.get('/getEnvironmentalWorkshops', environmentalQueries.getEnvironmentalWorkshops);
router.get('/getEnvironmentalTutorials', environmentalQueries.getEnvironmentalTutorials);

/***************** INTELLECTUAL **************************/
router.get('/getIntellectualClubs', intellectualQueries.getIntellectualClubs);
router.get('/getIntellectualResources', intellectualQueries.getIntellectualResources);
router.get('/getIntellectualGoals', intellectualQueries.getIntellectualGoals);
router.get('/getIntellectualWorkshops', intellectualQueries.getIntellectualWorkshops);
router.get('/getIntellectualTutorials', intellectualQueries.getIntellectualTutorials);

/***************** OCCUPATIONAL **************************/
router.get('/getOccupationalClubs', occupationalQueries.getOccupationalClubs);
router.get('/getOccupationalResources', occupationalQueries.getOccupationalResources);
router.get('/getOccupationalGoals', occupationalQueries.getOccupationalGoals);
router.get('/getOccupationalWorkshops', occupationalQueries.getOccupationalWorkshops);
router.get('/getOccupationalTutorials', occupationalQueries.getOccupationalTutorials);

/***************** SOCIAL **************************/
router.get('/getSocialClubs', socialQueries.getSocialClubs);
//router.get('/getSocialResources', socialQueries.getSocialResources);
//router.get('/getSocialGoals', socialQueries.getSocialGoals);
//router.get('/getSocialWorkshops', socialQueries.getSocialWorkshops);
//router.get('/getSocialTutorials', socialQueries.getSocialTutorials);

/***************** SPIRITUAL **************************/
router.get('/getSpiritualClubs', spiritualQueries.getSpiritualClubs);
router.get('/getSpiritualResources', spiritualQueries.getSpiritualResources);
router.get('/getSpiritualGoals', spiritualQueries.getSpiritualGoals);
router.get('/getSpiritualWorkshops', spiritualQueries.getSpiritualWorkshops);
router.get('/getSpiritualTutorials', spiritualQueries.getSpiritualTutorials);


router.post('/addClubs', clubsQueries.addClubs);
router.post('/addUser', usersQueries.addUser);
router.get('/getUser',usersQueries.getUser);

module.exports = router;
