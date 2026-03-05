import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },

        age:{
            type: Number,
            required: true
        },

        mobileno:{
            type: String,
            required: true
        },

        gender:{
            type: String,
            required: true
        },

        disease:{
            type: String,
            required: true
        },

        status:{
            type: String,
            default: "waiting"
        }
    },
    { timestamps:  true}
);

const Patient = mongoose.model("Patient",patientsSchema);

export default Patient;