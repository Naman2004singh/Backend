import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Patient"
    },
    description : {
        type : String
    },
    disease : {
        type : String
    },
    diagonisis : {
        type : String,
        enum : ["CURED", "ONGOING", "NONE"]
    },
    previousRecord : {
        type : String,
    }
}, {timestamps : true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)