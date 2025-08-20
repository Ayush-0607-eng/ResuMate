import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    personalInfo: {
        name: String,
        email: String,
        phone: String,
        address: String,
    },
    skills: {
        type: Map,
        of: [String], // e.g. { "Technical": ["JavaScript", "React"], "Soft": ["Leadership"] }
    },
    education: [
        {
            degree: String,
            institution: String,
            startYear: String,
            endYear: String,
            gpa: String,
        },
    ],
    certifications: [
        {
            name: String,
            year: String,
        },
    ],
    experience: {
        type: Object, // single object in your case
        default: {},
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Resume", resumeSchema);
