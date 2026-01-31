# Mier Immobilien

Modern real estate website built with Astro, React, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Astro 5.17 + React 19 + Tailwind CSS 3.4
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Fast Performance**: Static site generation for optimal loading speeds
- **Trust-Focused**: Professional design with testimonials and trust indicators
- **Interactive Components**: React-powered navigation, forms, and interactions

## 📦 Project Structure

```
/
├── public/          # Static assets (favicon, images)
├── src/
│   ├── components/  # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Properties.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layouts/     # Astro layouts
│   │   └── Layout.astro
│   └── pages/       # Page components
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:4321/`

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to customize the color scheme:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    // ... customize your brand colors
  },
}
```

### Content

- **Properties**: Edit `src/components/Properties.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`

## 📝 License

Copyright © 2026 Mier Immobilien. All rights reserved.
