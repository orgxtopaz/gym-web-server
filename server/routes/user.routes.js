
const schedule = require('../controller/schedules_controller');
const displaySchedule = require('../controller/display_controller');


const router = require('express').Router();





////ALL OFFICIALS FUNCTIONALITIES
router.post('/submitSchedule',schedule); ///TIME IN  
router.get('/displaySchedule',displaySchedule); ///TIME IN  






module.exports = router;
