
let schedule = require("../models/schedules.model");

const displaySchedule =async (req, res) => {
    schedule.find() // PROMISE IF ELSE
    .then((user) => res.json(user)) // IF TRUE CHECK
    .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

}


module.exports = displaySchedule;

   

