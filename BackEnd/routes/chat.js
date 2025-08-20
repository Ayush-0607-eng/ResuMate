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
// import ollama from "ollama"; // temporarily commented out

const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        // TEMPORARY: Echo back user message
        // Later you can uncomment Ollama integration
        // const response = await ollama.chat({
        //     model: "llama3",
        //     messages: [{ role: "user", content: message }],
        // });

        // Send back a dummy AI response
        const dummyReply = `You said: "${message}"`;
        res.json({ reply: dummyReply });

    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

export default router;

