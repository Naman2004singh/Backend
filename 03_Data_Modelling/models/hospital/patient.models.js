import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    diagnosedWith : {
        type : String,
        required : true,
    },
    bloodGroup : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : ["M", "F", "Others"],
        required : true
    },
    contactNo : {
        type : Number,
        required : true
    },
    admissionDate : {
        type : Date,
    },
    medicalRecord : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "MedicalRecord"
    },
    checkUpStatus : {
        type : String,
        enum : ["DONE", "ONGOING", "PENDING"],
        default : "PENDING"
    },
    hospital : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }
}, {timestamps : true})

export const Patient = mongoose.model("Patient", patientSchema)