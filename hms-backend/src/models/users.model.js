import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    password:{
        type: String,
        required: true
    },

    role:{
        type: String,
        enum: ["admin","doctor","reception","lab","pharmacy"],
        default: "reception"
    }

});

const User = mongoose.model("User",userSchema);

export default User;