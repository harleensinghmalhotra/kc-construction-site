# KingColeman Construction Website

A premium, production-ready construction company website built with React, TypeScript, and Tailwind CSS.

## Features

- **Clean White Header**: Professional navigation with smooth scrolling
- **Stunning Hero Section**: Full-screen hero with premium construction imagery
- **Interactive Before/After Sliders**: Showcase project transformations
- **Services Grid**: Clean, hoverable service cards
- **Contact CTA Section**: QR code integration and clear call-to-actions
- **Responsive Design**: Optimized for all device sizes
- **Professional Color Scheme**: Black, White, Brick Red (#8B3A3A), and Gold (#C9A961)

## Color Palette

- **Black**: #000000 (logo, text, navigation)
- **White**: #FFFFFF (backgrounds, cards)
- **Brick Red**: #8B3A3A (primary CTA buttons, accents)
- **Gold**: #C9A961 (accent lines, hover states)
- **Light Gray**: #F8F8F8 (section backgrounds)
- **Dark Gray**: #2A2A2A (footer)
- **Medium Gray**: #666666 (body text)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Fixed navigation header
│   ├── Hero.tsx             # Full-screen hero section
│   ├── BeforeAfterSlider.tsx # Interactive image comparison
│   ├── Projects.tsx         # Project showcase grid
│   ├── Services.tsx         # Services grid
│   ├── ContactCTA.tsx       # Contact section with QR code
│   └── Footer.tsx           # Footer with links
├── App.tsx                  # Main application
├── index.css               # Custom styles and slider CSS
└── main.tsx                # Entry point

public/
├── images/
│   ├── logo/
│   │   └── landingsite_logo.png
│   └── projects/
│       ├── 1.jpg (used as hero background)
│       ├── 2.jpg
│       ├── 3.jpg
│       └── 4.jpg
```

## Development

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Customization

### Update Contact Information

Edit `src/components/ContactCTA.tsx` and `src/components/Footer.tsx`:
- Phone: (123) 456-7890
- Email: info@kingcoleman.com

### Update Hero Image

The hero uses a premium Pexels stock photo. To customize with your own construction photo:

1. Add your high-quality image to `public/images/`
2. Update `src/components/Hero.tsx`:

```tsx
backgroundImage: 'url(/images/your-hero-image.jpg)'
```

**Recommended Hero Image Specs:**
- Dimensions: 1920px × 1080px minimum
- Format: JPG (optimized, < 500KB)
- Content: Finished construction project (interior or exterior)
- Quality: Professional photography with good lighting

### Add More Projects

Edit `src/components/Projects.tsx` and add to the projects array:

```tsx
{
  beforeImage: '/images/projects/before-5.jpg',
  afterImage: '/images/projects/after-5.jpg',
  title: 'Your Project Title',
  description: 'Your project description.',
}
```

## Before/After Slider

The custom-built slider supports:
- Mouse drag interaction
- Touch/swipe on mobile
- Smooth animations
- BEFORE/AFTER labels
- Visual divider with handle

## Performance

- Lazy loading for images below the fold
- Optimized assets (< 200KB total)
- Fast build times
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 KingColeman Construction. All rights reserved.
