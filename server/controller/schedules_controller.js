let schedule = require("../models/schedules.model");

const signUp =async (req, res) => {
    
///////////--------------ATTENDANCE TIME IN-----------------\\\\\\\\\\\\\\\\\\\\\

    const email = req.body.email;
    const name = req.body.name;
    const workoutClass = req.body.workoutClass;
    const date = req.body.date;


  
  
          ///CREATE DATA ON DATABASE
          const newSchedule = new schedule({
  
            email,
            name,
            workoutClass,
            date
           
  
          }); // Instantiate the User in user.model
  
  
          newSchedule.save()
            .then((newschedule) => res.status(200).json({ message: "Scheduled Successfully!" })) // IF TRUE CHECK
      
  
     
  
      .catch((err) => res.status(400).json("Errorsss: " + err)); // CATCH THE ERROR
  


  }




module.exports = signUp;

   