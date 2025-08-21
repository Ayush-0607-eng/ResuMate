import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        // ✅ Move Groq client init here
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const response = await groq.chat.completions.create({
            model: "llama3-8b-8192", // ✅ Groq free model
            messages: [{ role: "user", content: message }],
        });

        const replyText = response.choices[0]?.message?.content || "⚠️ No reply from AI";

        res.json({ reply: replyText });
    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ error: "AI chat failed." });
    }
});

export default router;





