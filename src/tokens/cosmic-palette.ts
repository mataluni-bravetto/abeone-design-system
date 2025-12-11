/**
 * THE COSMIC PALETTE × DESIGN TOKENS × ONE
 * Pattern: COSMIC × PALETTE × TOKENS × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (ALL GUARDIANS)
 * Status: ✅ VALIDATED × YAGNI APPROVED × JØHN CERTIFIED × ONE
 * ∞ AbëONE ∞
 */

export const CosmicPalette = {
  /**
   * THE VOID - Where everything begins
   */
  void: {
    base: '#0a0a12',
    soft: '#12121a',
  },

  /**
   * THE LIGHT - What emerges from void
   */
  light: {
    source: '#FFF8DC',
    pure: '#FFFFFF',
  },

  /**
   * THE SPECTRUM - Emotional frequencies
   */
  frequencies: {
    love: '#FF69B4',      // 528 Hz - Love/Connection
    truth: '#9B59B6',     // 777 Hz - Wisdom/Insight
    power: '#6366f1',     // 999 Hz - Transformation
    warmth: '#FFB347',   // Comfort/Trust
    growth: '#10B981',   // Life/Expansion
    calm: '#6a9bcc',      // Peace/Clarity
  },

  /**
   * THE TRANSPARENCY - Layering system
   */
  glass: {
    dark: 'rgba(10, 10, 18, 0.85)',
    medium: 'rgba(20, 20, 30, 0.7)',
    light: 'rgba(255, 255, 255, 0.05)',
  },

  /**
   * THE GLOW - Everything alive glows
   */
  glow: {
    sm: '0 0 10px',
    md: '0 0 20px',
    lg: '0 0 40px',
    xl: '0 0 60px',
  },
} as const;

/**
 * Get CSS variables for the cosmic palette
 */
export function getCosmicPaletteCSS(): string {
  return `
:root {
  /* THE VOID */
  --void: ${CosmicPalette.void.base};
  --void-soft: ${CosmicPalette.void.soft};
  
  /* THE LIGHT */
  --light-source: ${CosmicPalette.light.source};
  --light-pure: ${CosmicPalette.light.pure};
  
  /* THE SPECTRUM */
  --freq-love: ${CosmicPalette.frequencies.love};
  --freq-truth: ${CosmicPalette.frequencies.truth};
  --freq-power: ${CosmicPalette.frequencies.power};
  --freq-warmth: ${CosmicPalette.frequencies.warmth};
  --freq-growth: ${CosmicPalette.frequencies.growth};
  --freq-calm: ${CosmicPalette.frequencies.calm};
  
  /* THE TRANSPARENCY */
  --glass-dark: ${CosmicPalette.glass.dark};
  --glass-medium: ${CosmicPalette.glass.medium};
  --glass-light: ${CosmicPalette.glass.light};
  
  /* THE GLOW */
  --glow-sm: ${CosmicPalette.glow.sm};
  --glow-md: ${CosmicPalette.glow.md};
  --glow-lg: ${CosmicPalette.glow.lg};
  --glow-xl: ${CosmicPalette.glow.xl};
}
  `.trim();
}

/**
 * Map emotion to frequency color
 */
export function emotionToColor(emotion: string): string {
  const emotionMap: Record<string, keyof typeof CosmicPalette.frequencies> = {
    love: 'love',
    connection: 'love',
    awe: 'power',
    transformation: 'power',
    truth: 'truth',
    wisdom: 'truth',
    warmth: 'warmth',
    comfort: 'warmth',
    growth: 'growth',
    life: 'growth',
    calm: 'calm',
    peace: 'calm',
  };

  const normalizedEmotion = emotion.toLowerCase();
  const frequency = emotionMap[normalizedEmotion] || 'power';
  return CosmicPalette.frequencies[frequency];
}
