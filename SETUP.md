# Zepto Voice Shopping Agent - Setup Guide

Quick setup guide for getting the application running.

## 📋 Prerequisites

- Python 3.9+ with [uv](https://docs.astral.sh/uv/)
- Node.js 18+ with pnpm
- [LiveKit Server](https://docs.livekit.io/home/self-hosting/local/)
- API Keys: Murf Falcon, Google Gemini, AssemblyAI

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend

# Install dependencies
uv sync

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Download models
uv run python src/agent.py download-files
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with LiveKit credentials
```

### 3. Run Application

Open 3 terminals:

```bash
# Terminal 1 - LiveKit Server
livekit-server --dev

# Terminal 2 - Backend
cd backend
uv run python src/agent.py dev

# Terminal 3 - Frontend
cd frontend
pnpm dev
```

### 4. Access

Open browser: `http://localhost:3000`

## 🔑 Environment Variables

### Backend (.env)
```env
LIVEKIT_URL=ws://127.0.0.1:7880
LIVEKIT_API_KEY=devkey
LIVEKIT_API_SECRET=secret
GOOGLE_API_KEY=your_gemini_key
MURF_API_KEY=your_murf_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
```

### Frontend (.env.local)
```env
LIVEKIT_API_KEY=devkey
LIVEKIT_API_SECRET=secret
LIVEKIT_URL=ws://127.0.0.1:7880
```

## 📚 Documentation

- [Main README](./README.md) - Project overview
- [Backend README](./backend/README.md) - Backend details
- [Frontend README](./frontend/README.md) - Frontend details

## 🆘 Need Help?

Check the detailed README files or open an issue on GitHub.
