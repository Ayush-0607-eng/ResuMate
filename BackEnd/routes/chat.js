// import express from "express";
// import ollama from "ollama";

// const router = express.Router();

// router.post("/chat", async (req, res) => {
//     const { message } = req.body;

//     try {
//         const response = await ollama.chat({
//             model: "llama3", // or llama2, etc.
//             messages: [{ role: "user", content: message }],
//         });

//         res.json({ reply: response.message.content });
//     } catch (error) {
//         console.error("Chat error:", error);
//         res.status(500).json({ error: "Something went wrong." });
//     }
// });

// export default router;



import express from "express";
import ollama from "ollama";

const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await ollama.chat({
            model: "llama3", // or llama2, etc.
            messages: [{ role: "user", content: message }],
        });

        console.log("OLLAMA RESPONSE:", response); // ✅ Debug full response

        // Check if content exists
        const replyText = response?.message?.content;
        if (!replyText || replyText.trim() === "") {
            // fallback if empty
            res.json({ reply: `❌ AI returned empty. You said: "${message}"` });
        } else {
            res.json({ reply: replyText });
        }

    } catch (error) {
        console.error("Chat error:", error);
        // fallback response
        res.json({ reply: `❌ Error: Could not connect. You said: "${message}"` });
    }
});

export default router;

