const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    email:{

        type:String,
        required:true,
        trim:true , // removing the first space in value input   

    },
    workoutClass:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    date:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    }



},{timestamps:true})// date  and time of the data being passed

      
   


const User= mongoose.model('schedules',userSchema);

module.exports = User;