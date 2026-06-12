# AgileSphere 🌌

AgileSphere is a high-fidelity digital presence scaling platform designed to bridge abstract creative branding with modular retail engineering. Built with **React 19**, **Vite**, **Express**, and integrated with the **Gemini 3.5 Flash** server-side engine, it equips modern brands with custom growth calculations, visual presets sandboxes, and instant, AI-generated strategic audits.

The application reflects a strictly modern, premium aesthetic—utilizing a **Cosmic Slate Theme** with generous negative space, dense metadata layouts, sharp geometric design structures, and responsive micro-animations powered by **Motion**.

---

## 🎨 Visual Identity & Typography

AgileSphere enforces a distinctive, high-contrast visual design that avoids generic template layouts in favor of intentional craft:

*   **Color Theme:** Cosmic Slate—a dark base canvas (`#050505` to `#0c0c0c`) structured by crisp borders (`border-white/10`), thin geometric dividers, and high-impact neon orange (`#f97316`) accents.
*   **Typography Pairings:**
    *   **Display Header Typography:** Space Grotesk / Inter-Bold with subtle uppercase letter tracking (`tracking-[0.2em]`) and aggressive skew transformations to convey energy.
    *   **Body & Copy Typography:** Standard Inter sans-serif supporting legibility across fluid padding containers.
    *   **Data & System Typography:** JetBrains Mono for technical statistics, diagnostic status badges, and terminal verification outputs.
*   **Layout Continuity:** Complete avoidance of rounded card borders, shadows, or purple gradients. Instead, the interface relies on unified, razor-sharp rectangular borders, custom interactive box overlays, and elegant stagger transitions.

---

## 🧩 Key Capabilities & Interactive Modules

### 1. Unified Modular Views
The application is organized into a desktop-first responsive navigation bar:
*   **`HomeView`**: Implements a bold brand positioning statements panel, general operations grids, and an interactive, client-side **Revenue & Conversion Uplift Calculator**.
*   **`EcomView`**: Showcases standard growth channel roadmaps, multi-tiered service agreements (SLA), and dynamic conversion index sliders.
*   **`MarketingView`**: Hosts a live, server-side digital presence audit desk where visitors can submit their current challenges and retrieve real-time evaluations.
*   **`CreativeView`**: Integrates a dynamic **Design Archetype Sandbox** with real-time style indicators (Tech, Editorial, Brutalist, Playful), permitting visitors to instantly copy style hexadecimal color codes into their designer dashboard clipboard.
*   **`AboutView`**: Details the platform's core growth metrics, managed GMV ($12M+), SLA accuracy track logs, and an integrated **High-Density Proposal Request Builder**.

### 2. Live AI-Powered Strategic Presence Audits
Behind the scenes, AgileSphere integrates the `@google/genai` TypeScript SDK. The audit dashboard passes user brand names, URLs, business archetypes, and bottlenecks to the server where they are processed by a system-instructed **Gemini 3.5 Flash** model. 
*   **Deterministic Schema Extraction:** Gemini outputs strict, structural JSON schema logs (summary statements, a computed 0-100 market standing score, color-coordinated status check indicators, and sequential tactical roadmaps).
*   **Robust Fallback Capability:** If the required `GEMINI_API_KEY` is not present, the endpoint smoothly transitions to a detailed, simulated expert strategist analysis—ensuring zero service disruption during onboarding review phases.

---

## 🏗️ Technical Architecture Diagram

```
[ Client Browser: React 19 SPA ]
        │
        ▼ (Standard HTTPS JSON Payload)
┌───────────────────────────────────────┐
│ Express Server (Port 3000)            │
│                                       │
│ ├── POST /api/audit  ───────────────┼──► [ Google Gemini 3.5 Flash ]
│ │   (Brand Diagnostic Evaluation)     │    (Strict JSON Schema Response)
│                                       │
│ └── POST /api/contact                 │
│     (Proposal & Lead Capture Hash)    │
└───────────────────────────────────────┘
```

### Full-Stack Directory Layout
*   `/server.ts` — Standalone Node.js entry point containing JSON body parsers, API endpoints, Gemini SDK integrations, and static assets delivery fallback.
*   `/metadata.json` — Workspace configuration metadata registering major capabilities (`MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`).
*   `/src/main.tsx` & `App.tsx` — Client entry script mounting root layouts, dynamic modals, tab-state routers, and interactive state triggers.
*   `/src/components/` — Modular, isolated component view matrices keeping file structures highly maintainable:
    *   `Navbar.tsx` & `Footer.tsx` — Persistent layouts supporting active views and quick modals.
    *   `HomeView.tsx`, `EcomView.tsx`, `MarketingView.tsx`, `CreativeView.tsx`, `AboutView.tsx` — Multi-layered interactive views.

---

## 🖥️ Local Quick Start

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your developer machine.

### 2. Installation
Clone the repository and install project packages:
```bash
npm install
```

### 3. Environment Environment Config
Configure your local secure variables by copying the example environment file:
```bash
cp .env.example .env
```
Open `.env` and add your required key:
```env
# Secure Gemini Access Token
GEMINI_API_KEY="your-actual-api-key-here"
```

### 4. Running the Development Server
This boots up the application with hot module replacement and client proxying:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** inside your browser to interact with the sandbox.

---

## 📦 Production Bundling & Service Strategy

To prevent standard Node runtime ES Module relative path import errors, the repository compiles into pre-verified standalone assets:

1.  **Build Command:**
    ```bash
    npm run build
    ```
    This script runs concurrently:
    *   Compiles tailwind custom assets and client-side web static assets inside `/dist`.
    *   Uses **esbuild** to bundle the `/server.ts` TypeScript file into a single, light, self-contained CommonJS target (`dist/server.cjs`).
2.  **Start Command (Node production container):**
    ```bash
    npm run start
    ```
    This directly boots the single accumulated bundle on port `3000` via node.

---

## 🔒 Security & Data Masking Compliance

*   **Server-Side Credentials Gatekeeping:** The Gemini API Key is never loaded into browser contexts. All strategic prompts are securely aggregated, filtered, and run exclusively behind the Express reverse-proxy.
*   **Durable Data Integrity:** Standard submission receipt IDs (e.g. `AGS-XXXXXX`) are computed on-the-fly and returned with encrypted-grade logs, preventing credential exposure or listing security issues.


# Run and deploy your app

This contains everything you need to run your app locally.

View the app in AI Studio: https://ai.studio/apps/13208eec-8b74-4853-a82f-b55987a505f1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env](.env) to your Gemini API key
3. Run the app:
   `npm run dev`
