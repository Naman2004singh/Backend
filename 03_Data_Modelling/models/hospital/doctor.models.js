import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    hospital : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    },
    durationInHours : {
        type : String,
        default : 0
    }
})

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    experienceInYear : {
        type : Number,
        default : 0
    },
    worksInHospitals : [hospitalSchema]
}, {timestamps : true})

export const Doctor = mongoose.model("Doctor", doctorSchema)