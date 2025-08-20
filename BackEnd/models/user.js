import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     fullName: { type: String, required: true },
//     dob: { type: Date, required: true },
//     age: { type: Number, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

const userSchema = new mongoose.Schema({
    fullName: String,
    dob: Date,
    age: Number,
    email: { type: String, unique: true },
    password: String,
    photo: String, // URL or base64
    hobbies: String,
    score10: String,
    score12: String,
    collegeScore: String,
    achievements: String,
});


const User = mongoose.model("User", userSchema);

export default User;
