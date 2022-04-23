
const schedule = require('../controller/schedules_controller');


const router = require('express').Router();





////ALL OFFICIALS FUNCTIONALITIES
router.post('/submitSchedule',schedule); ///TIME IN  






module.exports = router;