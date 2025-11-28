# Zepto Voice Shopping Agent - Backend

The backend service for Zepto's voice shopping assistant, built with LiveKit Agents and Python.

## 🏗️ Architecture

```
backend/
├── src/
│   ├── agent.py           # Main voice agent with LLM integration
│   └── cart_manager.py    # Cart operations and order management
├── catalog.json           # Product catalog (20 items)
├── recipes.json           # Recipe-to-ingredients mapping
├── orders.json            # Saved orders (generated)
├── pyproject.toml         # Python dependencies
├── .env                   # Environment variables
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: LiveKit Agents 1.3.2+
- **Python**: 3.9+
- **Package Manager**: uv
- **LLM**: Google Gemini 2.0 Flash
- **TTS**: Murf Falcon
- **STT**: AssemblyAI
- **VAD**: Silero
- **Turn Detection**: Multilingual Model

## 📦 Installation

### Prerequisites

- Python 3.9 or higher
- [uv](https://docs.astral.sh/uv/) package manager
- LiveKit Server running locally or remotely

### Setup

1. **Install uv** (if not already installed):
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. **Install dependencies**:
```bash
uv sync
```

3. **Configure environment**:
```bash
cp .env.example .env
```

Edit `.env` with your API keys:
```env
LIVEKIT_URL=ws://127.0.0.1:7880
LIVEKIT_API_KEY=devkey
LIVEKIT_API_SECRET=secret

GOOGLE_API_KEY=your_gemini_api_key
MURF_API_KEY=your_murf_api_key
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
```

4. **Download required models**:
```bash
uv run python src/agent.py download-files
```

## 🚀 Running the Agent

### Development Mode
```bash
uv run python src/agent.py dev
```

This starts the agent in development mode with:
- File watching (auto-reload on code changes)
- Debug logging
- Local LiveKit server connection

### Production Mode
```bash
uv run python src/agent.py start
```

## 🎯 Agent Features

### Function Tools

The agent exposes 7 function tools that the LLM can call:

#### 1. add_to_cart
```python
async def add_to_cart(item_name: str, quantity: int = 1)
```
Adds items to the shopping cart by name.

#### 2. remove_from_cart
```python
async def remove_from_cart(item_name: str)
```
Removes an item completely from the cart.

#### 3. update_cart_quantity
```python
async def update_cart_quantity(item_name: str, quantity: int)
```
Updates the quantity of an existing cart item.

#### 4. list_cart
```python
async def list_cart()
```
Returns current cart contents and total price.

#### 5. add_ingredients_for_dish
```python
async def add_ingredients_for_dish(dish_name: str, servings: int = 1)
```
Adds all ingredients for a recipe to the cart.

#### 6. place_order
```python
async def place_order(customer_name: str, customer_address: str = "", delivery_instructions: str = "")
```
Finalizes and saves the order to `orders.json`.

#### 7. clear_cart
```python
async def clear_cart()
```
Empties the entire cart.

## 📊 Data Files

### catalog.json

Product catalog with 20 items across categories:

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

**Categories**:
- Groceries (bread, milk, eggs, rice, oil, etc.)
- Snacks (chips, biscuits, chocolate, nuts)
- Prepared Food (pizza, pasta, noodles, sandwiches)
- Beverages (coffee)

### recipes.json

Maps dish names to item IDs:

```json
{
  "peanut butter sandwich": ["bread_whole_wheat", "peanut_butter_jar"],
  "pasta for two": ["pasta_pack", "pasta_sauce_jar", "cheese_block"],
  "maggi": ["maggi_noodles", "butter_salted", "onion_fresh"],
  "breakfast combo": ["bread_whole_wheat", "eggs_pack", "butter_salted"]
}
```

### orders.json

Stores completed orders (auto-generated):

```json
{
  "order_id": "ORD-20251128-143022",
  "timestamp": "2025-11-28T14:30:22.123456",
  "customer_name": "Gangadhar",
  "customer_address": "123 Main Street",
  "delivery_instructions": "",
  "items": [
    {
      "item_id": "bread_whole_wheat",
      "name": "Whole Wheat Bread",
      "quantity": 2,
      "unit_price": 45.0,
      "line_total": 90.0
    }
  ],
  "order_total": 155.0
}
```

## 🔧 Cart Manager

The `CartManager` class handles all cart operations:

### Key Methods

- `add_to_cart(item_id, quantity)` - Add item to cart
- `remove_from_cart(item_id)` - Remove item from cart
- `update_quantity(item_id, quantity)` - Update item quantity
- `list_cart()` - Get cart summary
- `clear_cart()` - Empty cart
- `find_item_by_name(name)` - Fuzzy search for items
- `add_ingredients_for_dish(dish_name, servings)` - Add recipe ingredients
- `save_order(customer_name, address, instructions)` - Save order to JSON

### Features

- **Fuzzy Matching**: Finds items even with partial or misspelled names
- **Recipe Support**: Automatically adds all ingredients for dishes
- **Order Persistence**: Saves orders with timestamps and customer details
- **Cart State Management**: Maintains cart state across conversation

## 🎨 Customization

### Adding New Products

Edit `catalog.json`:

```json
{
  "id": "new_product_id",
  "name": "Product Name",
  "category": "groceries",
  "price": 99.0,
  "brand": "Brand Name",
  "unit": "1 unit",
  "tags": ["tag1", "tag2", "tag3"]
}
```

### Adding New Recipes

Edit `recipes.json`:

```json
{
  "new dish name": ["item_id_1", "item_id_2", "item_id_3"]
}
```

### Modifying Agent Behavior

Edit the `instructions` parameter in `src/agent.py`:

```python
class Assistant(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions="""Your custom instructions here...""",
        )
```

## 🐛 Debugging

### Enable Debug Logging

Set environment variable:
```bash
export LIVEKIT_LOG_LEVEL=debug
```

### View Agent Logs

The agent logs all operations with emoji indicators:
- 🛒 Cart operations
- 📋 Cart listings
- 📖 Recipe additions
- 💾 Order placements
- 🗑️ Removals/clears

### Common Issues

**Issue**: Agent not connecting to LiveKit
- Check `LIVEKIT_URL` in `.env`
- Ensure LiveKit server is running
- Verify API key and secret

**Issue**: Items not found in catalog
- Check item name spelling
- Verify item exists in `catalog.json`
- Check fuzzy matching logic in `cart_manager.py`

**Issue**: Orders not saving
- Check write permissions for `orders.json`
- Verify JSON format is valid
- Check logs for error messages

## 📚 API Documentation

### LiveKit Agents
- [Official Docs](https://docs.livekit.io/agents)
- [Python SDK](https://docs.livekit.io/agents/python)

### Integrations
- [Google Gemini](https://ai.google.dev/gemini-api/docs)
- [Murf API](https://murf.ai/api/docs)
- [AssemblyAI](https://www.assemblyai.com/docs)

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows PEP 8 style guide
- All functions have type hints
- New features include logging
- Tests pass (if applicable)

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

## 👨‍💻 Author

**Gangadhar**
- GitHub: [@Gangadhar-NG-CODER](https://github.com/Gangadhar-NG-CODER)

---

**Part of the Zepto Voice Shopping Agent project**
