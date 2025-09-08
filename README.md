Voice Hub – by Synchronia Labs


![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)


Voice Hub est une application web temps réel Voix → Texte → Voix, construite avec Next.js et intégrée à Deepgram pour la transcription. Elle ajoute une étape IA (LLM) pour enrichir la réponse avant synthèse vocale.

✨ Fonctionnalités

🎤 Capture micro → flux audio → Deepgram STT

📝 Transcription texte instantanée affichée à l’écran

🤖 Passage optionnel par un LLM (OpenAI / Claude / Grok)

🔊 Synthèse vocale en retour via TTS

🌐 Démo Web prête sur Vercel (déploiement 1-clic)

🖼️ Démo

👉 Live Demo: https://voice-hub.vercel.app
 (remplacer quand déployé)


⚙️ Installation locale
git clone https://github.com/agent47-coder/voice-hub.git
cd voice-hub
npm install
cp .env.example .env
npm run dev

Exemple .env
DEEPGRAM_API_KEY=dg-xxxx
OPENAI_API_KEY=sk-xxxx       # optionnel
ANTHROPIC_API_KEY=sk-xxxx    # optionnel
GROK_API_KEY=xxxx            # optionnel

📂 Structure
voice-hub/
 ┣ app/           # pages Next.js
 ┣ lib/           # providers & clients
 ┣ public/        # assets statiques
 ┣ .env.example   # config API
 ┣ package.json
 ┗ README.md

🚀 Build & Production
npm run build
npm start


Déploiement simple sur Vercel :

Connecte le repo → “Deploy”

Ajoute tes clés API dans Settings → Environment Variables

🤝 Contribution

Issues/PR bienvenues.
Merci d’ajouter une capture ou vidéo démo si tu forks.

🖋️ Signature

Synchronia Labs / Anarkia 💚
