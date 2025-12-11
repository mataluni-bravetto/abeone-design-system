# Quick Start Guide

## Installation

```bash
npm install @abeone/design-system
```

## Basic Usage

### 1. Create a Living Canvas

```typescript
import { LivingCanvasBuilder } from '@abeone/design-system';

const canvas = LivingCanvasBuilder.create({
  emotion: 'awe',
  content: {
    hook: {
      headline: 'The World Changes Today',
      subheadline: 'BiasGuard 4.0'
    },
    proof: {
      stats: ['32/32 tests', '7 layers', '100%']
    },
    how: {
      steps: [
        'Install the extension',
        'Browse normally',
        'See bias highlighted'
      ]
    },
    who: {
      name: 'Bravetto',
      mission: 'Building AI that serves humanity'
    },
    ask: {
      cta: 'Get Started',
      action: '/signup'
    }
  }
});

// Generate HTML
const html = canvas.toHTML();

// Validate
const validation = canvas.validate();
console.log(validation); // { valid: true, errors: [] }
```

### 2. Use Design Tokens

```typescript
import { CosmicPalette, TypographySystem } from '@abeone/design-system';

// Colors
const loveColor = CosmicPalette.frequencies.love; // #FF69B4
const voidBg = CosmicPalette.void.base; // #0a0a12

// Typography
const heroStyle = TypographySystem.soulVoice.sizes.hero; // clamp(3rem, 8vw, 7rem)
```

### 3. Use Animation Patterns

```typescript
import { getAnimationCode, emotionToAnimation } from '@abeone/design-system';

// Get animation pattern from emotion
const pattern = emotionToAnimation('awe'); // 'emergence-burst'

// Get animation code
const code = getAnimationCode(pattern, {
  intensity: 'high',
  color: '#FF69B4'
});
```

## Next Steps

- Read the [Design Tokens Guide](./design-tokens.md)
- Learn the [Living Canvas Protocol](./living-canvas-protocol.md)
- Explore [Animation Patterns](./animation-patterns.md)
- Check out [Component Templates](./component-templates.md)
