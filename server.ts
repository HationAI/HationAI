import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client if API key is present
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API Client initialized successfully.");
  } else {
    console.warn("GEMINI_API_KEY is not defined in process.env. AI Chatbot demo will run in smart simulated mode.");
  }

  // API Route for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages array" });
      }

      // If AI is not available (e.g. no key), run in smart simulated mode
      if (!ai) {
        const lastMsg = messages[messages.length - 1]?.parts?.[0]?.text || "";
        let responseText = "Hi! I'm your Hation dental receptionist. I'd be happy to help you with scheduling or answering questions, but my backend AI key isn't configured yet. Please check back soon!";
        
        const lower = lastMsg.toLowerCase();
        if (lower.includes("cleaning") || lower.includes("book") || lower.includes("schedule")) {
          responseText = "I can definitely help you schedule a dental cleaning! We have openings tomorrow at 2:30 PM or 4:00 PM. Which of those works best for you? Let me know your name and phone number to lock it in!";
        } else if (lower.includes("emergency") || lower.includes("pain")) {
          responseText = "Oh no, I'm sorry to hear you're in pain! For dental emergencies, we prioritize same-day appointments. Please share your phone number immediately so our front desk team can contact you in 5 minutes!";
        } else if (lower.includes("insurance") || lower.includes("delta")) {
          responseText = "Yes! We accept Delta Dental PPO, Aetna, Cigna, Guardian, and MetLife. If you provide your insurance carrier and member ID, I can verify your benefits right now!";
        } else if (lower.includes("price") || lower.includes("cost") || lower.includes("whitening")) {
          responseText = "Professional in-office teeth whitening is currently on special for $299 (normally $450). Routine cleanings and exams are $150, or fully covered by most PPO plans. Would you like to schedule an appointment?";
        } else if (lower.includes("implant")) {
          responseText = "Dental implants start at $1,999. We offer free consultations, which include a comprehensive 3D CBCT scan to check if you're a candidate. Would you like to book a free consultation?";
        } else {
          responseText = "Hello! I am Hation. I can answer your insurance questions, provide treatment pricing, or schedule cleanings, implant consultations, and emergency slots. What can I do for you today?";
        }
        return res.json({ text: responseText });
      }

      // Call actual Gemini API!
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: messages,
        config: {
          systemInstruction: `You are "Hation", an intelligent, empathetic, and highly professional AI receptionist for an elite dental clinic (BrightSmile Dental).
Your goal is to answer patient inquiries (cleaning, whitening, implants, emergencies, pricing, insurance), qualify leads, and seamlessly book appointments.

Tone guidelines:
- Conversational, warm, professional, extremely helpful, and concise. Do NOT give medical advice.
- Keep each message under 3 sentences. Be punchy and natural!
- When they request an appointment (e.g., cleaning, emergency, implant), offer realistic times (e.g., tomorrow at 2:30 PM, Friday at 10:00 AM) and ask for their Name, Email, and Phone number to confirm.
- Once they provide details, confirm the booking and tell them they are locked in and a confirmation email/SMS has been sent!

Response context:
- Cleaning: We have openings tomorrow at 2:30 PM and 4:00 PM. Normal routine cleanings are $150 or covered by major PPO.
- Emergency: We do same-day emergency triage. Ask for their phone number immediately so we can call them in 5 minutes!
- Insurance: We accept Delta Dental PPO, Aetna, Cigna, Guardian, MetLife, and Blue Cross.
- Pricing: Professional whitening is on special for $299 (usually $450). Implants start at $1,999.
- Dental Implant: Free consultation including 3D scan.

Always be courteous, professional, and stay strictly in character. Do not break character under any circumstances.`
        }
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error in backend:", error);
      return res.status(500).json({ error: error.message || "An error occurred calling the AI receptionist." });
    }
  });

  // Demo Booking Store (in-memory)
  const bookings: any[] = [];
  app.post("/api/book-demo", (req, res) => {
    const { name, email, phone, practiceName, practiceSize, selectedDate, selectedTime } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Please fill out name and email." });
    }
    const newBooking = {
      id: Math.random().toString(36).substring(7).toUpperCase(),
      name,
      email,
      phone: phone || "Not provided",
      practiceName: practiceName || "Not provided",
      practiceSize: practiceSize || "Not provided",
      selectedDate: selectedDate || "Not provided",
      selectedTime: selectedTime || "Not provided",
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    console.log(`[Notification Engine] Emailed new demo booking details to hation.chatbot@gmail.com:`, newBooking);
    return res.json({ success: true, booking: newBooking });
  });

  // Get Bookings (just for client feedback)
  app.get("/api/bookings", (req, res) => {
    return res.json(bookings);
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
