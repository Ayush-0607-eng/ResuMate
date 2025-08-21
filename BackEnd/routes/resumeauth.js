import express from "express";
import Resume from "../models/resume.js";
import PDFDocument from "pdfkit";
import Groq from "groq-sdk";

const router = express.Router();

// Save resume
router.post("/create", async (req, res) => {
    try {
        const resumeData = req.body;
        const newResume = new Resume(resumeData);
        await newResume.save();
        console.log("✅ Resume saved successfully");
        res.status(201).json({ message: "Resume saved successfully!", resume: newResume });
    } catch (err) {
        console.error("❌ Error saving resume:", err);
        res.status(500).json({ message: "Error saving resume", error: err });
    }
});

// Generate Resume with Groq
router.post("/generate", async (req, res) => {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const userData = req.body;

        const prompt = `
        You are a professional resume writer. 
        Rewrite the following resume data into clear bullet points with simple text.
        Do NOT use symbols like *, —, •, or fancy quotes.
        Use plain English only.
        Sections must be: Education, Experience, Skills, Certifications, Work Approach & Capabilities
        Dont add start year and end year as a section.
        Add by yourself a section at the end "Work Approach & Capabilities" and add points like  "Can work both independently and collaboratively in team environment" , "Organized and committed to consistent improvement and delivery" and others by yourself. make it proffesional.
        Make section names clear and bold.
        ${JSON.stringify(userData)}
        `;

        const response = await groq.chat.completions.create({
            model: "llama3-8b-8192",
            messages: [{ role: "user", content: prompt }],
        });

        let resumeText = response.choices[0]?.message?.content || "No content generated.";

        // 🧹 Clean unwanted symbols (keep only ASCII letters, numbers, punctuation)
        resumeText = resumeText.replace(/[^\x00-\x7F]/g, "");
        resumeText = resumeText.replace(/\*/g, "").replace(/•/g, "").trim();

        // Split into sections
        const sections = resumeText.split(/\n(?=[A-Z][A-Za-z ]+:)/);

        // Generate PDF
        const doc = new PDFDocument({ margin: 50 });
        let buffers = [];
        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => {
            let pdfData = Buffer.concat(buffers);
            res.writeHead(200, {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=resume.pdf",
                "Content-Length": pdfData.length,
            }).end(pdfData);
        });

        // Header
        doc.font("Helvetica-Bold").fontSize(22).text(userData.personalInfo?.name || "Your Name", { align: "center" });
        doc.font("Helvetica").fontSize(12).text(
            `${userData.personalInfo?.email || ""} | ${userData.personalInfo?.phone || ""}`,
            { align: "center" }
        );
        doc.moveDown(2);

        // Add Sections
        sections.forEach(section => {
            const [header, ...contentLines] = section.split("\n");
            if (header && contentLines.length > 0) {
                doc.font("Helvetica-Bold").fontSize(14).text(header.trim(), { underline: true });
                doc.moveDown(0.5);
                doc.font("Helvetica").fontSize(12).text(contentLines.join("\n").trim(), { align: "left" });
                doc.moveDown(1);
            }
        });

        doc.end();
    } catch (error) {
        console.error("❌ Error in /generate:", error);
        res.status(500).json({ error: "Resume generation failed" });
    }
});

export default router;








// import OpenAI from "openai";

// // Route: Generate Resume with AI
// router.post("/generate", async (req, res) => {
//     try {
//         const userData = req.body;

//         // ✅ Initialize OpenAI here (AFTER dotenv is loaded in server.js)
//         const openai = new OpenAI({
//             apiKey: process.env.OPENAI_API_KEY,
//         });

//         // 1. Ask AI to create bullet points and professional phrasing
//         const prompt = `
//         You are a professional resume writer.
//         Rewrite and improve the following resume data into polished bullet points and professional phrasing.
//         Output should be plain text (no markdown, no headings):
//         ${JSON.stringify(userData)}
//         `;

//         const completion = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [
//                 { role: "system", content: "You are an expert career coach and resume writer." },
//                 { role: "user", content: prompt },
//             ],
//         });

//         const resumeText = completion.choices[0]?.message?.content || "No content generated.";

//         // 2. Generate PDF
//         const doc = new PDFDocument({ margin: 50 });
//         let buffers = [];
//         doc.on("data", buffers.push.bind(buffers));
//         doc.on("end", () => {
//             let pdfData = Buffer.concat(buffers);
//             res.writeHead(200, {
//                 "Content-Type": "application/pdf",
//                 "Content-Disposition": "attachment; filename=resume.pdf",
//                 "Content-Length": pdfData.length,
//             }).end(pdfData);
//         });

//         // Header
//         doc.fontSize(22).text(userData.personalInfo?.name || "Your Name", { align: "center" });
//         doc.fontSize(12).text(
//             `${userData.personalInfo?.email || ""} | ${userData.personalInfo?.phone || ""}`,
//             { align: "center" }
//         );
//         doc.text(userData.personalInfo?.address || "", { align: "center" });
//         doc.moveDown(2);

//         // AI Polished Resume
//         doc.fontSize(14).text(resumeText, { align: "left" });

//         doc.end();
//     } catch (error) {
//         console.error("❌ Error in /generate:", error);
//         res.status(500).json({ error: "Resume generation failed" });
//     }
// });


