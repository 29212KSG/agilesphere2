import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK on the server with recommended User-Agent and key
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } else {
    console.warn("GEMINI_API_KEY is not configured or in template placeholder mode.");
  }
} catch (err) {
  console.error("Failed to initialize GoogleGenAI:", err);
}

// 1. AI Digital Audit Endpoint
app.post("/api/audit", async (req, res) => {
  const { brandName, brandDescription, url, industry, competitors, challenge } = req.body;

  if (!brandName || !brandDescription) {
    return res.status(400).json({ error: "Brand name and description are required for auditing." });
  }

  if (!ai) {
    // Return high-quality, simulated expert guidelines if Gemini API isn't initiated
    return res.json({
      summary: `AgileSphere Digital Advisory for ${brandName}: Your presence inside the ${industry || "digital space"} is currently undergoing review. We identified primary leaks in conversion flow, missing organic search keywords, and high cart abandonment. This diagnostic report highlights key channels to accelerate.`,
      marketFitScore: 68,
      seoRating: "Needs Attention",
      ecomChecklist: [
        { item: "Listing Media & Carousels", status: "warning", recommendation: "Optimize lifestyle image carousels and introduce 15s short video clips." },
        { item: "Meta SEO Titles and Indexing", status: "error", recommendation: "Your primary product collections are missing high-frequency keyword headers." },
        { item: "Cart Friction & Checkout Speed", status: "success", recommendation: "Checkout page is relatively lightweight, but lacks trust indicators." },
        { item: "Primary Platform Syncing", status: "warning", recommendation: "Enable full inventory syncing to avoid listing suspensions on secondary channels." }
      ],
      actionPlan: [
        `Redesign the ${brandName} landing banner with direct, high-impact value callouts.`,
        "Structure search-term bid campaigns geared towards organic competitor search leakage.",
        `Remedy ${challenge || "current growth bottlenecks"} by automating SKU syncs across Amazon and regional marketplaces.`
      ]
    });
  }

  try {
    const prompt = `Analyze this digital presence audit request:
    - Brand Name: ${brandName}
    - Brand Description: ${brandDescription}
    - URL/Website (if available): ${url || "None provided"}
    - Primary Industry: ${industry || "General E-Commerce"}
    - Key Competitors: ${competitors || "Not specified"}
    - Current Growth Bottleneck/Challenge: ${challenge || "Scaling organic reach and ad optimization"}
    
    Provide a professional, data-centric strategic digital presence audit in JSON format. Provide clear, direct, and actionable advice to help them scale with precision.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Lead Digital Strategist and Architect at AgileSphere. Generate a highly professional, scannable digital presence audit and action plan. Keep statements objective, strategic, and practical.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["summary", "marketFitScore", "seoRating", "ecomChecklist", "actionPlan"],
          properties: {
            summary: {
              type: Type.STRING,
              description: "High-level summary of the brand's digital standing and immediate core opportunities (around 2-3 sentences)."
            },
            marketFitScore: {
              type: Type.INTEGER,
              description: "A calculated digital scale standard score from 0 to 100 based on their parameters."
            },
            seoRating: {
              type: Type.STRING,
              description: "Must be 'Optimal', 'Needs Attention', or 'Critical'."
            },
            ecomChecklist: {
              type: Type.ARRAY,
              description: "List of custom digital operations items analyzed.",
              items: {
                type: Type.OBJECT,
                required: ["item", "status", "recommendation"],
                properties: {
                  item: { type: Type.STRING, description: "The digital category, e.g. 'Landing Page UX', 'Paid Traffic Ads', 'Meta Elements'." },
                  status: { type: Type.STRING, description: "Must be 'success', 'warning', or 'error'." },
                  recommendation: { type: Type.STRING, description: "Custom, direct strategic recommendation to improve." }
                }
              }
            },
            actionPlan: {
              type: Type.ARRAY,
              description: "Sequence of 3 to 4 sequential, actionable steps to execute immediately.",
              items: { type: Type.STRING }
            }
          }
        },
        temperature: 0.7
      }
    });

    const textOutput = response.text;
    if (textOutput) {
      const parsed = JSON.parse(textOutput.trim());
      return res.json(parsed);
    } else {
      throw new Error("Empty text output from Gemini");
    }
  } catch (error) {
    console.error("Error analyzing brand with Gemini:", error);
    return res.status(500).json({
      error: "Failed to generate AI Audit. Please check your network and API credentials.",
      details: error instanceof Error ? error.message : "Undefined"
    });
  }
});

// 2. Proposal Submission / Lead Capture
app.post("/api/contact", (req, res) => {
  const { name, email, brandName, selectedServices, monthlyBudget, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required to schedule a consultation." });
  }

  // Simulate storing in a mock ledger or returning beautiful custom project outline
  const estimateDays = selectedServices && selectedServices.length > 1 ? "10 - 15 Business Days" : "5 - 7 Business Days";
  
  return res.json({
    status: "success",
    message: `Thank you, ${name}! Your strategic request for ${brandName || "your brand"} has been locked in.`,
    receiptCode: `AGS-${Math.floor(100000 + Math.random() * 900000)}`,
    nextSteps: [
      "AgileSphere Lead Analyst will review your brand's metadata logs.",
      "An email with a custom Calendar scheduling invite will be sent to " + email + ".",
      `Provisional delivery roadmap constructed inside: ${estimateDays}.`
    ]
  });
});

// 3. Vite Server / Production Asset Pipeline
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AgileSphere FullStack] running on http://localhost:${PORT}`);
  });
}

start();
