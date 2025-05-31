import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
        trim: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: false
    }
})
export default mongoose.model("user",userSchema)
