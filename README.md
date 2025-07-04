# PocketPatient

A web-based medical training platform that lets users practice diagnosing virtual patients and receive AI-generated feedback. Built with Next.js 15 (App Router) and Tailwind CSS, it combines an interactive chat UI, case simulations, and detailed performance evaluations to help students sharpen their clinical reasoning skills.

---

## What is this project for?

PocketPatient is designed for medical and nursing students (and curious learners!) who want hands-on practice without real-world risk.  A learner chats with a virtual patient, submits their diagnosis, and immediately receives an AI-assessed score plus actionable feedback across the following domains:

* Session time
* Diagnosis accuracy
* Procedural thoroughness
* Medical ethics

The app gamifies improvement with leaderboards, percentile charts, and difficulty settings so users can track progress over time.

---

## Getting Started

1. **Install dependencies**

   ```bash
   # with pnpm (recommended)
   pnpm install
   # or npm/yarn/bun if you prefer
   ```

2. **Create environment variables**

   Copy `.env.example` to `.env.local` and fill in the required keys (e.g. OpenAI API key for chat and TTS endpoints).
   OPENAI_API_KEY="YOUR-OPENAI-KEY"
   

3. **Run the dev server**

   ```bash
   pnpm dev
   # visit http://localhost:3000
   ```

4. **Build for production**

   ```bash
   pnpm run build && pnpm start
   ```

---

## Folder Structure

```
├─ app/                 # Next.js App Router routes
│  ├─ (main)/           # Public-facing pages grouped with route 
│
├─ components/          # Reusable UI components
│  ├─ chat/             # Chat interface & modals (messages, submit, etc.)
│  └─ charts/           # Re-usable chart visualisations
│
├─ contexts/            # React context providers (e.g. ChatContext)
├─ lib/                 # Utility helpers (OpenAI wrapper, formatters…)
├─ public/              # Static assets (images, icons, svg)
├─ styles/ or app/globals.css  # Tailwind & global styles
├─ .env.example         # Sample environment variables
├─ next.config.js       # Next.js configuration
└─ README.md            # This file
```

Feel free to explore each folder—most application logic lives in `components` and `contexts`.

---

### Contributions

- Arjhine A. Ty – Lead Developer
- Sean Matthew L. Viacrusis – Business Expert
- Niña Alrica L. Viacrusis – Designer and Marketing Expert

---

© 2025 – PocketPatient Team. Licensed under the MIT License.
