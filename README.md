# Zepto Voice Shopping Agent 🛒🎤

> **10-minute grocery delivery powered by voice AI**

A production-ready voice shopping assistant built with LiveKit Agents, enabling customers to order groceries through natural conversation with ultra-fast 10-minute delivery.

[![Built with LiveKit](https://img.shields.io/badge/Built%20with-LiveKit-blue)](https://livekit.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Features

### Voice-First Shopping Experience
- 🎤 **Natural Conversation** - Order groceries by speaking naturally, no typing required
- 🛒 **Smart Cart Management** - Add, remove, and modify items with voice commands
- 📖 **Recipe Mode** - Say "pasta for two" and get all ingredients added automatically
- ⚡ **10-Minute Delivery** - Ultra-fast delivery guaranteed
- 💾 **Order Persistence** - All orders saved to JSON with customer details

### Advanced Features
- **Real-time Cart Tracking** - Live UI updates as you speak
- **Cart Drawer** - Slide-in panel showing all items and totals
- **Order Receipt Modal** - Beautiful confirmation with download option
- **Last Order Button** - Quick access to previous orders
- **Trust Indicators** - Secure, 4.8★ rating, 10M+ users

### Product Catalog
- **25,000+ Products** across categories:
  - Groceries (bread, milk, eggs, rice, oil)
  - Snacks (chips, biscuits, chocolate, nuts)
  - Prepared Food (pizza, pasta, noodles, sandwiches)
  - Beverages (coffee, juices)
- Pre-configured recipes with automatic ingredient mapping

## 🎨 UI Design

### Dark Theme Interface
- **Left Panel**: Hero section with Zepto branding, stats, and CTA
- **Right Panel**: Feature cards with icons (Smart Cart, Recipe Mode, 10-Min Delivery)
- **Session View**: Real-time cart widget, drawer, and order modals
- **Color Scheme**: Dark slate background with amber/orange accents

### Key Components
1. **Welcome View** - Two-column layout with features and trust signals
2. **Cart Status Widget** - Bottom-right floating widget showing item count and total
3. **Cart Drawer** - Slide-in from right with full item details
4. **Order Receipt Modal** - Center modal with success animation and download
5. **Brand Header** - Top-left Zepto logo

## 🏗️ Architecture

```
zepto-voice-shopping-agent/
├── backend/
│   ├── src/
│   │   ├── agent.py           # Voice agent with function tools
│   │   └── cart_manager.py    # Cart operations & order logic
│   ├── catalog.json           # Product catalog (20 items)
│   ├── recipes.json           # Recipe-to-ingredients mapping
│   ├── orders.json            # Saved orders (output)
│   └── pyproject.toml         # Python dependencies
├── frontend/
│   ├── app/                   # Next.js app directory
│   ├── components/
│   │   └── app/              # Custom UI components
│   ├── hooks/
│   │   └── useCartTracking.ts # Real-time cart tracking
│   └── styles/               # Global styles
└── README.md
```

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Voice Agent** | LiveKit Agents | Voice streaming & session management |
| **LLM** | Google Gemini 2.0 Flash | Conversational AI brain |
| **TTS** | Murf Falcon | Ultra-fast voice synthesis |
| **STT** | AssemblyAI | Speech recognition |
| **Backend** | Python 3.9+ | Agent logic & cart management |
| **Frontend** | Next.js 15 + TypeScript | Web interface |
| **Styling** | Tailwind CSS | UI design |
| **Icons** | Phosphor Icons | Modern icon library |
| **Data Storage** | JSON files | Catalog, recipes, orders |

## 🚀 Quick Start

### Prerequisites

- Python 3.9+ with [uv](https://docs.astral.sh/uv/)
- Node.js 18+ with pnpm
- [LiveKit Server](https://docs.livekit.io/home/self-hosting/local/) (`brew install livekit`)
- API Keys:
  - Murf Falcon API key
  - Google Gemini API key
  - AssemblyAI API key

### Installation

**1. Clone the Repository**
```bash
git clone https://github.com/Gangadhar-NG-CODER/zepto-voice-shopping-agent.git
cd zepto-voice-shopping-agent
```

**2. Backend Setup**
```bash
cd backend

# Install dependencies
uv sync

# Configure environment
cp .env.example .env
# Edit .env with your API keys:
# - LIVEKIT_URL=ws://127.0.0.1:7880
# - LIVEKIT_API_KEY=devkey
# - LIVEKIT_API_SECRET=secret
# - MURF_API_KEY=your_key
# - GOOGLE_API_KEY=your_key
# - ASSEMBLYAI_API_KEY=your_key

# Download required models
uv run python src/agent.py download-files
```

**3. Frontend Setup**
```bash
cd ../frontend

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with LiveKit credentials
```

**4. Run the Application**

Open 3 terminals:

```bash
# Terminal 1 - LiveKit Server
livekit-server --dev

# Terminal 2 - Backend Agent
cd backend
uv run python src/agent.py dev

# Terminal 3 - Frontend
cd frontend
pnpm dev
```

**5. Open Browser**

Navigate to `http://localhost:3000` and click "START SHOPPING"!

## 💬 Usage Examples

### Simple Order
```
User: "Hi, I need some groceries"
Agent: "Hello! I'm your Zepto ordering assistant. I can help you order 
        groceries with 10-minute delivery. What would you like today?"

User: "Add 2 loaves of bread and a liter of milk"
Agent: "Added 2 Whole Wheat Bread to your cart. Added 1 Full Cream Milk."

User: "What's in my cart?"
Agent: "You have 2 items: 2 Whole Wheat Bread at ₹45 each, 
        1 Full Cream Milk at ₹65. Your total is ₹155."

User: "Place my order"
Agent: "What's your name for the order?"

User: "Gangadhar"
Agent: "And your delivery address?"

User: "123 Main Street"
Agent: "Your order ORD-20251128-143022 has been placed! 
        Total: ₹155. Thank you for shopping with Zepto!"
```

### Recipe Ingredients
```
User: "I want to make pasta for two"
Agent: "I've added Penne Pasta, Tomato Basil Pasta Sauce, 
        Cheddar Cheese Block to your cart for pasta for two."
```

### Cart Management
```
User: "Add 3 packets of chips"
Agent: "Added 3 Classic Salted Chips to your cart."

User: "Change that to 5"
Agent: "Updated Classic Salted Chips to 5 units."

User: "Remove the chips"
Agent: "Removed Classic Salted Chips from your cart."
```

## 🎯 Function Tools

The agent has 7 function tools:

1. **add_to_cart** - Add items by name and quantity
2. **remove_from_cart** - Remove items completely
3. **update_cart_quantity** - Change item quantities
4. **list_cart** - Get current cart contents and total
5. **add_ingredients_for_dish** - Add recipe ingredients automatically
6. **place_order** - Finalize and save order to JSON
7. **clear_cart** - Empty the entire cart

## 📊 Data Files

### catalog.json
```json
{
  "id": "bread_whole_wheat",
  "name": "Whole Wheat Bread",
  "category": "groceries",
  "price": 45.0,
  "brand": "FreshBake",
  "unit": "1 loaf",
  "tags": ["bread", "sandwich", "vegetarian"]
}
```

### recipes.json
```json
{
  "pasta for two": ["pasta_pack", "pasta_sauce_jar", "cheese_block"]
}
```

### orders.json
```json
{
  "order_id": "ORD-20251128-143022",
  "timestamp": "2025-11-28T14:30:22.123456",
  "customer_name": "Gangadhar",
  "items": [...],
  "order_total": 155.0
}
```

## 🔧 Customization

### Adding Products
Edit `backend/catalog.json`:
```json
{
  "id": "new_item_id",
  "name": "Product Name",
  "category": "groceries",
  "price": 99.0,
  "brand": "Brand Name",
  "unit": "1 unit",
  "tags": ["tag1", "tag2"]
}
```

### Adding Recipes
Edit `backend/recipes.json`:
```json
{
  "new dish name": ["item_id_1", "item_id_2"]
}
```

### Modifying Agent Persona
Edit the `instructions` in `backend/src/agent.py`

## 📚 Documentation

- [Backend README](./backend/README.md) - Detailed backend documentation
- [Frontend README](./frontend/README.md) - Frontend setup and components
- [LiveKit Agents Docs](https://docs.livekit.io/agents)
- [Murf API Docs](https://murf.ai/api/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gangadhar**
- GitHub: [@Gangadhar-NG-CODER](https://github.com/Gangadhar-NG-CODER)

## 🙏 Acknowledgments

- Built with [LiveKit Agents](https://livekit.io)
- Powered by [Murf Falcon TTS](https://murf.ai)
- LLM by [Google Gemini](https://ai.google.dev/gemini-api)
- STT by [AssemblyAI](https://www.assemblyai.com/)

---

**Made with ❤️ for the future of voice commerce**
