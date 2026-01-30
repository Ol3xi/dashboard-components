# 📊 Dashboard Components

> Professional, type-safe dashboard components for React + TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

![Dashboard Components Preview](screenshots/screenshot-hero.png)

## ✨ Features

- 🎨 **6 Color Variants** - Blue, Green, Purple, Orange, Red, Gray
- 📏 **3 Size Options** - Small, Medium, Large
- 🌓 **Dark Mode** - Built-in dark theme support
- 📱 **Responsive** - Mobile-first design
- ⚡ **TypeScript** - 100% type-safe
- 🎭 **Animated** - Smooth transitions
- ♿ **Accessible** - ARIA compliant

## 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/dashboard-components.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Components

### StatsCard

A versatile card component for displaying statistics and metrics.
```tsx
import { DollarSign } from 'lucide-react';
import { StatsCard } from './components/StatsCard';

<StatsCard
  title="Total Revenue"
  value="$45,231"
  change="+20.1%"
  changeType="positive"
  description="from last month"
  icon={DollarSign}
  variant="green"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title (required) |
| `value` | `string \| number` | - | Main value to display (required) |
| `icon` | `LucideIcon` | - | Icon component |
| `change` | `string` | - | Change percentage |
| `changeType` | `'positive' \| 'negative' \| 'neutral'` | `'neutral'` | Change indicator color |
| `description` | `string` | - | Additional description |
| `variant` | `ColorVariant` | `'blue'` | Color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Card size |
| `animated` | `boolean` | `true` | Enable fade-in animation |
| `onClick` | `() => void` | - | Click handler |

## 🎨 Color Variants

![Color Blue](screenshots/screenshot-color-blue.png)
![Color Gray](screenshots/screenshot-color-gray.png)
![Color Green](screenshots/screenshot-color-green.png)
![Color Orange](screenshots/screenshot-color-orange.png)
![Color Purple](screenshots/screenshot-color-purple.png)
![Color Red](screenshots/screenshot-color-red.png)
Available colors: `blue`, `green`, `purple`, `orange`, `red`, `gray`

## 📱 Responsive Design

![Mobile View](screenshots/screenshot-mobile.png)

Works perfectly on all screen sizes.

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript 5** - Type Safety
- **Tailwind CSS 3** - Styling
- **Vite 5** - Build Tool
- **Lucide React** - Icons

## 📝 Roadmap

- [x] StatsCard component
- [ ] ProgressCard (Coming soon)
- [ ] ChartCard (Coming soon)
- [ ] TableCard (Coming soon)
- [ ] ActivityCard (Coming soon)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📄 License

MIT © ol3xi

## 🔗 Links

- [Live Demo](https://dashboard-components-lilac.vercel.app/)
- [Report Bug](https://github.com/Ol3xi/dashboard-components/issues)
- [Request Feature](https://github.com/Ol3xi/dashboard-components/issues)

---

**Built with ❤️ by ol3xi**

If you found this useful, please give it a ⭐️!