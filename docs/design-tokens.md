# Design Tokens Guide

## Cosmic Palette

The cosmic palette provides universal colors based on emotional frequencies.

### Colors

```typescript
import { CosmicPalette } from '@abeone/design-system';

// The Void (backgrounds)
CosmicPalette.void.base;      // #0a0a12
CosmicPalette.void.soft;       // #12121a

// The Light (foregrounds)
CosmicPalette.light.source;    // #FFF8DC
CosmicPalette.light.pure;      // #FFFFFF

// Frequencies (emotional colors)
CosmicPalette.frequencies.love;    // #FF69B4 (528 Hz)
CosmicPalette.frequencies.truth;  // #9B59B6 (777 Hz)
CosmicPalette.frequencies.power;  // #6366f1 (999 Hz)
CosmicPalette.frequencies.warmth; // #FFB347
CosmicPalette.frequencies.growth; // #10B981
CosmicPalette.frequencies.calm;   // #6a9bcc
```

### Emotion to Color Mapping

```typescript
import { emotionToColor } from '@abeone/design-system';

emotionToColor('love');        // #FF69B4
emotionToColor('awe');         // #6366f1
emotionToColor('transformation'); // #6366f1
```

## Typography System

Two fonts. That's it.

### Soul Voice (Lora)

Used for headings, quotes, emotional content.

```typescript
import { TypographySystem } from '@abeone/design-system';

TypographySystem.soulVoice.fontFamily;  // 'Lora', serif
TypographySystem.soulVoice.sizes.hero;  // clamp(3rem, 8vw, 7rem)
TypographySystem.soulVoice.sizes.heading; // clamp(2rem, 5vw, 4rem)
TypographySystem.soulVoice.sizes.subtitle; // clamp(1.25rem, 3vw, 2rem)
```

### Clear Voice (Poppins)

Used for body, UI, buttons, forms, functional content.

```typescript
TypographySystem.clearVoice.fontFamily; // 'Poppins', sans-serif
TypographySystem.clearVoice.sizes.body;  // clamp(1rem, 2vw, 1.5rem)
TypographySystem.clearVoice.sizes.small; // clamp(0.875rem, 1.5vw, 1.25rem)
```

## Spacing System

Modular spacing scale (Fibonacci-influenced).

```typescript
import { SpacingSystem } from '@abeone/design-system';

SpacingSystem.scale.xs;   // 0.5rem (8px)
SpacingSystem.scale.sm;   // 1rem (16px)
SpacingSystem.scale.md;   // 1.5rem (24px)
SpacingSystem.scale.lg;   // 2rem (32px)
SpacingSystem.scale.xl;   // 3rem (48px)
SpacingSystem.scale['2xl']; // 4rem (64px)
SpacingSystem.scale['3xl']; // 6rem (96px)
```

## CSS Variables

Get CSS variables for all tokens:

```typescript
import { getCosmicPaletteCSS, getTypographyCSS, getSpacingCSS } from '@abeone/design-system';

const css = `
${getCosmicPaletteCSS()}
${getTypographyCSS()}
${getSpacingCSS()}
`;
```
