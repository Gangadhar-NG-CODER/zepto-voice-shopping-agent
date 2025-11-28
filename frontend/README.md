# Zepto Voice Shopping Agent - Frontend

The web interface for Zepto's voice shopping assistant, built with Next.js 15 and TypeScript.

## 🏗️ Architecture

```
frontend/
├── app/
│   ├── (app)/
│   │   └── page.tsx           # Main app entry point
│   ├── api/
│   │   └── orders/
│   │       └── latest/
│   │           └── route.ts   # API for fetching last order
│   └── layout.tsx             # Root layout
├── components/
│   ├── app/
│   │   ├── welcome-view.tsx   # Landing page
│   │   ├── session-view.tsx   # Voice session UI
│   │   ├── brand-header.tsx   # Zepto logo header
│   │   ├── cart-status-widget.tsx  # Floating cart widget
│   │   ├── cart-drawer.tsx    # Slide-in cart panel
│   │   ├── order-receipt-modal.tsx # Order confirmation
│   │   └── last-order-button.tsx   # View last order
│   └── livekit/              # LiveKit UI components
├── hooks/
│   └── useCartTracking.ts    # Real-time cart tracking
├── styles/
│   └── globals.css           # Global styles
└── app-config.ts             # App configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Voice**: LiveKit Components React
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Setup

1. **Install pnpm** (if not already installed):
```bash
npm install -g pnpm
```

2. **Install dependencies**:
```bash
pnpm install
```

3. **Configure environment**:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
LIVEKIT_API_KEY=devkey
LIVEKIT_API_SECRET=secret
LIVEKIT_URL=ws://127.0.0.1:7880

NEXT_PUBLIC_APP_CONFIG_ENDPOINT=
SANDBOX_ID=
```

## 🚀 Running the App

### Development Mode
```bash
pnpm dev
```

Runs on `http://localhost:3000` with:
- Hot module replacement
- Fast refresh
- Turbopack bundler

### Production Build
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## 🎨 UI Components

### Welcome View

The landing page with two-column layout:

**Left Section**:
- Zepto logo with amber shopping basket icon
- "Groceries in 10 minutes" headline
- Stats: 10 min Delivery, 25,000+ Products, 24/7 Available
- "START SHOPPING" CTA button
- Feature tags with icons

**Right Section**:
- Three feature cards:
  - 📊 Smart Cart
  - 🧾 Recipe Mode
  - ⚡ 10-Min Delivery
- Trust indicators: Secure, 4.8★, 10M+

### Session View

The voice conversation interface:

**Components**:
- Brand header (top-left)
- Chat transcript (center)
- LiveKit video tiles
- Control bar (bottom)
- Cart status widget (bottom-right)
- Last order button (bottom-left)

### Cart Status Widget

Floating widget showing:
- Item count
- Total amount
- Click to open cart drawer

**Features**:
- Hover animation (scale effect)
- Real-time updates
- Purple theme

### Cart Drawer

Slide-in panel from right:

**Features**:
- Full item list with quantities
- Line totals per item
- Subtotal calculation
- Smooth spring animation
- Empty state message
- Close button and backdrop

### Order Receipt Modal

Center modal with:

**Features**:
- Success icon with purple theme
- Order ID and timestamp
- Complete items list
- Total amount highlighted
- Download JSON button (functional!)
- Auto-closes after 10 seconds

### Last Order Button

Bottom-left button:

**Features**:
- View previous order anytime
- Disabled when no orders exist
- Opens receipt modal

## 🔧 Configuration

### App Config

Edit `app-config.ts`:

```typescript
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Zepto',
  pageTitle: 'Zepto Voice Shopping',
  pageDescription: 'Order groceries in 10 minutes using just your voice',
  
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,
  
  logo: '/lk-logo.svg',
  accent: '#9333ea',  // Purple
  startButtonText: 'START SHOPPING',
};
```

### Theme Colors

The app uses a purple theme:
- Primary: `#9333ea` (purple-600)
- Accent: `#a855f7` (purple-500)
- Background: Dark slate (slate-900, slate-800)
- Highlights: Amber/orange for CTAs

## 🎯 Real-Time Cart Tracking

The `useCartTracking` hook parses agent messages to extract cart information:

### Detects:
- ✅ Item additions: "Added 2 Whole Wheat Bread to your cart"
- ✅ Recipe additions: "I've added Maggi, Butter, Onions to your cart"
- ✅ Cart summaries: "You have 3 items in your cart: 1 Maggi at ₹14..."
- ✅ Item removals: "Removed X from your cart"
- ✅ Order placement: "Your order ORD-20251128-145653 has been placed"
- ✅ Cart clearing: "Your cart has been cleared"

### Updates:
- 📊 Cart widget shows live item count and total
- 🎯 Cart drawer displays all items with quantities and prices
- 💰 Automatic total calculation
- 🧾 Order receipt modal pops up automatically
- 📥 Download order as JSON file

### Implementation

```typescript
export function useCartTracking(messages: ReceivedChatMessage[]) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastOrder, setLastOrder] = useState<LastOrder | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Parse messages and update cart state
  useEffect(() => {
    // Extract cart info from agent messages
    // Update UI in real-time
  }, [messages]);
  
  return { cart, lastOrder, orderPlaced, total };
}
```

## 🎨 Styling

### Tailwind CSS

The app uses Tailwind CSS with custom configuration:

**Key Classes**:
- `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900` - Dark background
- `bg-gradient-to-r from-amber-400 to-amber-500` - CTA button
- `bg-slate-800/50 backdrop-blur-sm` - Feature cards
- `border-purple-500/40` - Purple accents

### Global Styles

Edit `styles/globals.css` for:
- CSS variables
- Custom animations
- Font imports
- Base styles

## 🔌 API Routes

### GET /api/orders/latest

Fetches the most recent order from `backend/orders.json`:

```typescript
// Response
{
  "order": {
    "order_id": "ORD-20251128-143022",
    "timestamp": "2025-11-28T14:30:22.123456",
    "customer_name": "Gangadhar",
    "items": [...],
    "order_total": 155.0
  }
}
```

## 🐛 Debugging

### Enable Debug Mode

Set in browser console:
```javascript
localStorage.setItem('livekit-debug', 'true')
```

### View Cart State

The cart tracking hook logs all operations:
```
🛒 Cart Tracking - Processing message: ...
🔍 Parsing cart summary: ...
🔍 Found item: 2x Whole Wheat Bread @ ₹45
```

### Common Issues

**Issue**: Cart not updating
- Check browser console for parsing errors
- Verify agent message format
- Check `useCartTracking.ts` regex patterns

**Issue**: Order modal not showing
- Check if order was successfully placed
- Verify `orderPlaced` state
- Check modal z-index

**Issue**: Styles not applying
- Run `pnpm dev` to rebuild
- Check Tailwind config
- Clear browser cache

## 📱 Responsive Design

The app is fully responsive:

- **Desktop**: Two-column layout with feature cards
- **Tablet**: Stacked layout with adjusted spacing
- **Mobile**: Single column, optimized touch targets

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🚀 Deployment

### Vercel (Recommended)

```bash
pnpm build
vercel deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "start"]
```

### Environment Variables

Set in production:
- `LIVEKIT_API_KEY`
- `LIVEKIT_API_SECRET`
- `LIVEKIT_URL`

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows TypeScript best practices
- Components are properly typed
- Styles use Tailwind classes
- Accessibility is maintained

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

## 👨‍💻 Author

**Gangadhar**
- GitHub: [@Gangadhar-NG-CODER](https://github.com/Gangadhar-NG-CODER)

---

**Part of the Zepto Voice Shopping Agent project**
