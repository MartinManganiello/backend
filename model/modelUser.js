import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    birthDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isEnabled: {type: Boolean, default: true},
    isAdmin: {type: Boolean, default: false},
})

const User = mongoose.model("User", userSchema);

export default User;