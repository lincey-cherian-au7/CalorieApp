const mongoose = require('mongoose');

const schema = mongoose.Schema;

const calorieSchema = new schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    calories:{
        type:Number ,
        required:true
    },
    date:{
        type: Date ,
        required:true
    }
},{
        timestamps:true,
    }
)

const calorie = mongoose.model('CalorieIntake',calorieSchema);

module.exports = calorie;