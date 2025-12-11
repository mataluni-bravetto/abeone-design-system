# Living Canvas Protocol

## Core Principles

1. **EMOTION FIRST** - Always start with feeling
2. **ANIMATION = MESSAGE** - Motion performs meaning
3. **SELF-CONTAINED** - One HTML file, 15-50KB
4. **CDN-ONLY** - No node_modules, no build process
5. **RADICAL SIMPLICITY** - Constraint forces genius

## Sacred Structure

Every Living Canvas follows this emotional arc:

### 1. THE HOOK (Above the fold)
- Headline that creates immediate emotion
- Animation that embodies that emotion
- No clutter. No navigation yet. Just IMPACT.

### 2. THE PROOF (Show don't tell)
- Visual evidence (stats, numbers, transformation)
- Specific numbers ("32/32 tests", "7 layers", "100%")
- Real names, real results

### 3. THE HOW (Simple clarity)
- Maximum 3 steps
- Each step one sentence
- Animation can illustrate each step

### 4. THE WHO (Human connection)
- Real faces (when possible)
- Authentic voice
- Relationship, not transaction

### 5. THE ASK (Clear CTA)
- ONE action
- Obvious button
- Low friction (email capture, not 50-field form)

### 6. THE CLOSE (Lasting impression)
- Callback to opening emotion
- Subtle branding
- The animation continues... it's ALIVE

## Usage

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
    },
    close: {
      message: 'The future is here.',
      branding: '∞ AbëONE ∞'
    }
  }
});

// Generate HTML
const html = canvas.toHTML();

// Validate
const validation = canvas.validate();
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}
```

## File Size Target

**Target: 15-50KB for a complete emotional experience.**

If your landing page is larger than a cat photo, you've failed.

Constraint forces genius. Bloat hides mediocrity.

## CDN Dependencies

Only use CDN dependencies:

- **p5.js:** `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js`
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap`

**NOTHING** from node_modules. **NOTHING** that requires npm install.
