# Ashir Tech — Website Brief
## Everything a Developer or Designer Needs to Build the Website

---

## Who We Are

**Ashir Tech** is a pan-African technology conglomerate headquartered in Nigeria, building software products and platforms for Africa's 1.4 billion people. We are not a single-product startup. We are a holding company with multiple subsidiaries — each solving a specific African problem at world-class quality.

Our name — *Ashir* — means **wealthy, blessed, and prosperous** in Arabic, Hausa, and Swahili. Our origin is deeper: ash is what remains after something burns. It is not the end. It is the foundation. Ashir Tech was built from failure, hunger, and the refusal to stop.

**Website:** ashir.world
**Tagline:** *Born from Ash. Rising for the World.*

---

## The Flagship Product — ADTP

The centrepiece of Ashir Tech is **ADTP — Agent Direct Transfer Protocol**.

ADTP is the first open protocol built specifically for direct, encrypted, intelligent file transfer between AI agents and humans — with no cloud intermediary, no browser upload, no download button. Files travel directly, peer-to-peer, over QUIC (a modern transport protocol), secured with AES-256-GCM encryption and a tamper-evident audit chain.

**One-line pitch:**
> ADTP is the SMTP of AI agents — the missing protocol that makes everything else work.

### Why It Exists

Every AI agent interaction involving files today is broken:
- Files must be uploaded through a browser
- Outputs must be downloaded through a browser
- All files pass through third-party cloud servers
- Agents have no awareness of what they are receiving
- Two agents on different machines cannot communicate directly

ADTP solves all of this. It is infrastructure — the picks and shovels of the AI agent gold rush.

### What Makes It Different

- **Zero cloud** — files never touch a third-party server. Cryptographically provable.
- **QUIC transport** — 0-RTT connections, multiplexed streams, no head-of-line blocking. Dramatically faster than TCP-based alternatives.
- **Intelligence layer** — every file arrives with a context block: schema, summary, agent hints. The agent knows what it received before processing a single byte.
- **Tamper-evident audit chain** — every transfer is cryptographically signed and logged. NDPR, GDPR, HIPAA compliant by design.
- **Offline/air-gap mode** — works on local networks with no internet. No other tool does this.
- **Peer-to-peer** — Agent A on a home PC and Agent B on an AWS server can transfer files directly, with NAT traversal handled automatically.

### The Market

- AI Agent market: **$7.1B today → $251B by 2034** at 46.6% CAGR
- AI Infrastructure market: **$90B in 2026 → $465B by 2033**
- MCP (Model Context Protocol) downloads grew from **100K to 8M in 5 months**
- **Zero direct competitors** building what ADTP builds

---

## Products & Subsidiaries

Ashir Tech operates as a conglomerate. ADTP is the flagship but not the only product.

### ADTP Ecosystem

| Component | What It Is |
|---|---|
| **ADTP Protocol** | The open wire protocol — the standard itself |
| **adtp-peer** | Rust daemon — runs on any machine (laptop, EC2, server), handles all P2P connections |
| **adtp-mcp** | Python MCP server — connects ADTP to any AI agent (Claude, GPT, Ollama, etc.) |
| **adtp-api** | FastAPI REST layer — exposes all operations over HTTP for CLI, desktop and mobile |
| **ADTP Desktop App** | Tauri desktop application for Windows, macOS and Linux |
| **MARS Mobile App** | React Native mobile companion — remote control your desktop agent from your phone |
| **adtp-cli** | Rust CLI — full terminal interface with REPL mode and natural language agent access |

### Future Subsidiaries

| Subsidiary | Focus |
|---|---|
| **Ashir Finance** | AI payroll automation, financial tracking, algorithmic trading for African businesses |
| **Ashir Edu** | AI tutoring platforms and learning management for African institutions |
| **Ashir Health** | AI medication management and diagnostic companions |
| **Ashir Tech** | Enterprise infrastructure, secure data systems, middleware |
| **Ashir Ventures** | Strategic investments in African tech founders |

---

## The Vision

**Africa does not need saving. It needs builders who refuse to stop.**

Ashir Tech is building Africa's AI infrastructure layer — the tools, APIs, frameworks and platforms that governments and institutions plug into to run AI. The Palantir of Africa. Palantir started with one obsessive founder, one idea and one government client. They are now worth $200 billion. Africa has 54 governments, thousands of institutions, and zero serious AI infrastructure players.

We are Africans solving African problems — at world-class quality.

### Why Africa First

- Africa hosts less than 1% of global data centres — massive infrastructure gap
- 15+ African countries now have national AI strategies
- AI cybercrime surged 180% in Africa in 2025 — governments need secure, auditable AI infrastructure
- Data sovereignty laws (Nigeria's NDPA, Kenya's Data Protection Act) require local processing — ADTP's zero-cloud architecture is compliant by design
- One Nigerian reference client opens every other African door

---

## Brand Identity

### Name
**Ashir Group** (holding company)
**Ashir Tech** (technology subsidiary — primary brand)
**ADTP** (flagship protocol product)
**MARS** (mobile app — Mobile Agent Remote System)

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Background Deep | `#08080F` | Page/app background |
| Surface | `#0E0E1C` | Cards, panels |
| Elevated | `#14142B` | Hover states |
| Gold (Primary) | `#C9A84C` | CTAs, headings, brand accent |
| Gold Bright | `#E8D38A` | Gradient highlight |
| Gold Dim | `#A8893A` | Gradient shadow |
| Ember (Critical) | `#C8430A` | Errors, warnings, highlights |
| Purple Bright | `#7C7CBF` | Secondary text, muted elements |
| Purple Mid | `#4B4B8F` | Borders, dividers |
| Success Green | `#3FA66B` | Connected, delivered |
| White | `#FFFFFF` | Primary text |

### Typography

| Font | Use | Style |
|---|---|---|
| **Audiowide** | Headings, wordmark, display text | Geometric, technical, distinctive |
| **Offside** | Body text, labels, UI elements | Clean, readable, technical |
| **Cormorant Garamond** | Premium marketing copy | Elegant serif for brand statements |
| **Space Mono** | Monospace data, technical labels | Code-adjacent feel |

**Gold Gradient Text** — applied to major headings: `linear-gradient(135deg, #A8893A 0%, #C9A84C 40%, #E8D38A 60%, #C9A84C 80%, #A8893A 100%)` via `background-clip: text`

### Logo

The Ashir logo is a 4-petal / star-shaped icon — geometric, symmetric, reads like something expanding in four directions (the four corners of Africa, the spread of the network). Used as a standalone mark and alongside the wordmark.

Available in:
- Dark background version (primary): white mark on `#0A0A0A`
- Light background version: dark mark on white
- Gold version: `#C9A84C` mark for premium contexts

### Tone of Voice

- **Bold but not arrogant** — we know what we are building; we do not need to shout it
- **Technical but accessible** — we are engineers who can explain what we built to anyone
- **African pride without cliché** — we are rooted here; this is not marketing, it is identity
- **Direct** — short sentences, strong verbs, no corporate filler

**Key phrases:**
- *Born from Ash. Rising for the World.*
- *Africa does not need saving. It needs builders who refuse to stop.*
- *The missing protocol that makes everything else work.*
- *Zero cloud. Zero compromise.*

---

## Website Sections (Recommended Structure)

### Hero
- Dark background, large Audiowide headline with gold gradient
- Tagline: *Born from Ash. Rising for the World.*
- One-line product description
- Two CTAs: **Get Started** (links to GitHub/docs) and **Read the Spec** (links to protocol documentation)
- Subtle animation: the ember/ash visual — particles rising

### Problem Section
*The problem ADTP solves — visual and concise*
- "Every AI agent interaction involving files is broken"
- Three-column breakdown: cloud dependency, no intelligence, no direct path
- Transition to: "We built the missing layer"

### Product Section
*ADTP — what it is*
- Protocol overview
- Architecture diagram (peer A ↔ ADTP ↔ peer B, no cloud in the middle)
- Key differentiators: Zero Cloud / QUIC Transport / Intelligence Layer / Audit Chain
- Code snippet or terminal demo (the CLI in action)

### How It Works
- Three steps: Install → Connect → Transfer
- Simple visual flow
- Link to documentation

### Products Grid
- ADTP Protocol
- Desktop App
- MARS Mobile
- CLI
- MCP Server
- Each with a one-line description and a status badge (Available / In Development / Coming Soon)

### Market Section
*Why now, why Africa*
- Key statistics: $251B market, 8M MCP downloads, 54 African governments
- The Palantir of Africa narrative
- Africa data sovereignty angle

### Company Section
*Ashir Tech — the conglomerate*
- Brief company statement
- Subsidiary grid: Finance, Edu, Health, Tech, Ventures
- "We are building something Africa has never seen"

### Manifesto / Quote Block
> *"Africa does not need saving. It needs builders who refuse to stop."*
> — Ashir Group, 2026

### GitHub / Open Source Section
- ADTP is open source — link to GitHub org
- Stats: stars, contributors, protocol version
- CTA: **Star the Repo** and **Read the Spec**

### Contact / Footer
- Three email addresses:
  - General: `hello@ashir.world`
  - Investors: `invest@ashir.world`
  - Careers: `careers@ashir.world`
- GitHub, X (Twitter) links
- Location: Nigeria, West Africa
- Copyright: © 2026 Ashir Group

---

## Technical Stack (For Reference)

Knowing what Ashir Tech builds helps a website developer understand the audience:

| Layer | Technology |
|---|---|
| Protocol core | Rust (adtp-peer-core) |
| Transport | QUIC via Quinn 0.11 |
| Encryption | AES-256-GCM + ed25519 |
| Integrity | BLAKE3 hashing |
| MCP Server | Python 3.12 + official Anthropic MCP SDK |
| REST API | FastAPI + Uvicorn |
| Desktop App | Tauri 2 (Rust backend + vanilla JS frontend) |
| Mobile App | React Native + Expo |
| CLI | Rust + Clap |
| Database | SQLite (local audit) + PostgreSQL (server) |

---

## GitHub Organisation

**github.com/AshirGroup** (or equivalent)

The organisation hosts:
- `adtp` — the core protocol and all crates
- `adtp-mcp` — the Python MCP server
- `adtp-api` — the REST API
- `adtp-desktop` — the Tauri desktop app
- `mars` — the React Native mobile app
- `adtp-cli` — the Rust CLI
- `adtp-rendezvous` — the rendezvous server

The README for the organisation is the entry point — it tells the ADTP story, links to each repo, and invites contributors.

---

## Investor Narrative (For Press / About Pages)

> *"The AI agent market is growing from $7B to $251B by 2034. Every agent that processes files needs a transfer protocol — and no such protocol exists. We built it. ADTP is the SMTP of AI agents: an open standard that we maintain and monetise through enterprise and government licensing. We are launching in Africa first because 54 governments are actively mandating AI sovereignty infrastructure and nobody is serving them. We have already built the core technology stack. We are raising to deploy, acquire our first anchor client, and establish ADTP as the African AI infrastructure standard."*

---

## What the Website Is Not

- It is not a SaaS landing page with a pricing table
- It is not a blog-first site
- It is not corporate and cautious
- It is not apologetic about being African

The website should feel like a company that knows exactly what it is building and is not waiting for anyone's permission to build it.

---

## Assets Available

- Ashir Group logo (PNG, black and white versions)
- ADTP wordmark
- MARS mobile app screens (Figma)
- Desktop app screenshots
- Brand colour palette
- Audiowide and Offside fonts (provided in the codebase)

---

*Ashir Tech — ashir.world*
*Born from Ash. Rising for the World.*
