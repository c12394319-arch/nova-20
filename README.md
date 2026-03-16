<div align="center">

<img src="static/assets/favicon.svg" width="80" alt="Nova Logo" />

# ✦ NOVA

**A sleek, fast, unblocked proxy — browse freely from anywhere.**

[![GitHub stars](https://img.shields.io/github/stars/conmancloss/nova-20?style=flat-square&color=ffffff&labelColor=0a0a14)](https://github.com/conmancloss/nova-20/stargazers)
[![License](https://img.shields.io/badge/license-MIT-white?style=flat-square&labelColor=0a0a14)](LICENSE)
[![Node](https://img.shields.io/badge/node-18%2B-white?style=flat-square&labelColor=0a0a14)](https://nodejs.org)

---

*Browse freely. Play anything. Bypass the boring.*

</div>

---

## ⚡ Features

- 🌐 **Full Web Proxy** — powered by Ultraviolet (UV), works with Google, YouTube, Discord, and more
- 🎮 **320+ Games** — instant browser games, no installs, organized and searchable
- 📱 **Apps Page** — social, streaming, tools, and Android via Now.GG
- 🔍 **Unified Search** — search games AND apps from the home page in real time
- 📱 **Mobile Ready** — fully responsive layout for any screen size
- 🌙 **Dark / Light Theme** — smooth toggle, persisted across sessions
- ⚡ **Panic Key** — one keypress to instantly redirect to a decoy page
- 🕵️ **About Blank Mode** — hide Nova inside an about:blank tab
- ⭐ **Favorites** — star games and apps, they pin to the top
- 🔒 **Password Protection** — optional basic auth for shared deployments
- 📢 **Admin Panel** — broadcast messages, block URLs, manage users via Redis

---

## 🚀 Quick Start

\`\`\`bash
git clone https://github.com/conmancloss/nova-20.git
cd nova-20
npm install
npm start
\`\`\`

Open **http://localhost:8080** — that's it.

> To use a different port: \`PORT=3000 npm start\`

---

## 🗂️ Project Structure

\`\`\`
nova-20/
├── index.js                  — Express server, proxy routes, admin API
├── config.js                 — Password protection config
├── static/
│   ├── index.html            — Main UI (all pages in one file)
│   ├── games.json            — Games list
│   ├── apps.json             — Apps list
│   ├── favicon.webp          — Site icon
│   ├── css/
│   │   └── nova.css          — All styles (dark/light, mobile, animations)
│   ├── js/
│   │   └── nova.js           — All client logic (proxy, games, apps, search)
│   ├── proxy/
│   │   ├── sw.js             — UV service worker
│   │   └── config.js         — UV + Dynamic proxy config
│   ├── html/
│   │   ├── admin.html        — Admin dashboard
│   │   ├── 404.html          — Error page
│   │   └── playground.html   — Scramjet playground
│   └── assets/
│       ├── mathematics/      — UV bundle, handler, config
│       ├── history/          — Dynamic proxy worker
│       ├── json/             — a.json, g.json (full app/game lists)
│       └── media/            — Icons, backgrounds, favicons
\`\`\`

---

## 🔧 How the Proxy Works

\`\`\`
Browser → /a/<encoded-url>
            ↓
      Service Worker (sw.js)
            ↓
    UV decodes the URL
            ↓
  Bare Server at /ca/ (WebSocket)
            ↓
      Target website
\`\`\`

1. The service worker intercepts all requests under \`/a/\`
2. UV decodes the encoded URL and rewrites the page content
3. External requests route through the bare server at \`/ca/\` over WebSocket
4. Responses are rewritten on the fly so the site behaves normally inside the proxy

---

## 🔐 Password Protection

Edit \`config.js\` to enable:

\`\`\`js
const config = {
  challenge: true,
  users: {
    admin: "yourpassword",
  },
};
\`\`\`

Multiple users are supported — just add more key/value pairs.

---

## 🛠️ Environment Variables

| Variable | Description | Default |
|---|---|---|
| \`PORT\` | Port to run the server on | \`8080\` |
| \`UPSTASH_REDIS_REST_URL\` | Redis URL for admin features | — |
| \`UPSTASH_REDIS_REST_TOKEN\` | Redis auth token | — |

> Admin features (broadcast, blocked URLs, activity log) require Upstash Redis. The proxy and games work fine without it.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Server | Node.js + Express |
| Proxy Engine | [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet) |
| Transport | [@nebula-services/bare-server-node](https://github.com/nickseel/bare-server-node) |
| Storage | [Upstash Redis](https://upstash.com) (optional) |
| Frontend | Vanilla JS + CSS (no frameworks) |

---

<div align="center">

**Made with ✦ by Nova**

*Star the repo if you find it useful*

</div>
