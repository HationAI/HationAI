# Hation AI

**AI automation systems for 3PL & e-commerce fulfillment.**

We build production-grade AI agents that automate repetitive operational workflows — starting with the highest-volume, highest-cost support ticket in logistics: **"Where is my order?" (WISMO)**.

Our systems connect to WMS platforms, classify intent, look up real shipment data, draft grounded replies, and either auto-send or route to a human for review. The goal is simple: fewer manual hours, faster response times, and measurable ROI for fulfillment teams.

🌐 **[hation.xyz](https://hation.xyz)** · 📧 hation.chatbot@gmail.com

---

## What we build

| Capability | Description |
|------------|-------------|
| **AI customer-support agents** | Intent classification, grounded reply generation, auto-send + human-in-the-loop approval |
| **WMS / API integrations** | Provider-agnostic seam (ShipStation today) with rate limiting, caching, and tenant isolation |
| **Email automation** | Gmail/IMAP intake via n8n, idempotent processing, sent-archive hygiene |
| **n8n workflows** | Production-ready WF1 (intake + classifier), WF2 (processor + auto-send), WF3 (human-send webhook) |
| **Operational dashboards** | Authenticated console for review, edit, approve, team management, and settings |
| **ROI & demo tools** | Interactive savings calculator + public-safe AI pipeline playground |

---

## Featured projects

### 🤖 [3PL AI Tools](https://github.com/HationAI/3pl-ai-tools) 
Portfolio showcase of the core AI pipeline and an interactive ROI calculator.

- **Pipeline demo** — Next.js playground: intent → WMS lookup → reply draft (mocked offline by default; live Groq mode available)
- **ROI calculator** — static, zero-dependency estimator of hours and $ saved from WISMO automation  
  → Live: [3pl-ai-media.vercel.app](https://3pl-ai-media.vercel.app)
- Architecture docs describing the full production system

```bash
git clone https://github.com/HationAI/3pl-ai-tools.git
cd 3pl-ai-tools && npm run install:all && npm run dev
# → http://localhost:3000
```

### 🔌 Production system 

| Repo | Role |
|------|------|
| [3pl-ai-services](https://github.com/HationAI/3pl-ai-services) | Node 22 + Express API: AI pipeline, WMS seam, send/record endpoints |
| [3pl-ai-dashboard](https://github.com/HationAI/3pl-ai-dashboard) | Next.js 14 console: review drafts, approve/send, inbox, team & settings |
| [3pl-ai-core](https://github.com/HationAI/3pl-ai-core) | Earlier core iteration (services + dashboard + docs) |

**Reliability & security highlights**
- Idempotent processing (atomic `pending → processing` claim — emails never double-handled)
- Tenant isolation on every DB query
- Draft vs. final-sent logging for continuous prompt improvement
- App-managed auth (scrypt + HMAC session cookies, role-based access: admin / operator / reviewer)
- Production credential gate (no plaintext ShipStation fallback)
- Optional PII-free Slack failure alerts

### 🌐 [hation-ai-web](https://github.com/HationAI/hation-ai-web) 
Marketing / product site (Vite + React + Tailwind).

---

## How the AI pipeline works

```
Customer email (Gmail / IMAP)
        │
        ▼
n8n WF1 — Intake + WISMO LLM classifier
        │  only WISMO emails become "pending"
        ▼
n8n WF2 — Processor (polls pending)
        │  POST /process-email
        ▼
┌─────────────────────────────────────┐
│  Node services                      │
│  1. Intent (LLM JSON mode + Zod)    │
│  2. WMS lookup (ShipStation seam)   │
│  3. Generator (grounded draft only) │
└─────────────────────────────────────┘
        │
        ▼
  Auto-send (if enabled)  or  Dashboard review → Approve & Send
        │
        ▼
n8n WF3 — Gmail delivery
```

The reply generator is strictly grounded in WMS data — it is prompted (and validated) **never** to invent a tracking number, carrier, or delivery date.

---

## Stack

| Layer | Technology |
|-------|------------|
| Dashboard | Next.js 14 (App Router), React, TypeScript, Tailwind |
| Services | Node 22 (ESM), Express |
| Database | Supabase (PostgreSQL) |
| AI | Groq (Llama 3.3 70B) — any OpenAI-compatible provider via env |
| WMS | ShipStation (provider-agnostic interface) |
| Orchestration | n8n (self-hosted / Docker) |
| Hosting | Vercel · Railway · Supabase |
| Tooling | Zod validation · Vitest · Docker |

---

## Why it matters

3PL and e-commerce teams spend a large share of support capacity answering the same question. Automating WISMO with real order data:

- Cuts handle time dramatically
- Improves first-response SLA
- Frees operators for exceptions and higher-value work
- Provides an auditable trail of AI drafts vs. final sends for continuous improvement

---

## Get in touch

- Website: [hation.xyz](https://hation.xyz)
- Email: hation.chatbot@gmail.com
- Location: Spain

---

<p align="center">
  <sub>Built for logistics teams · AI that stays grounded in real data</sub>
</p>
