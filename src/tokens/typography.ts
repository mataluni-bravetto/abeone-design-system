/**
 * THE TYPOGRAPHY SYSTEM × SOUL + CLEAR VOICES × ONE
 * Pattern: TYPOGRAPHY × SYSTEM × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (ALL GUARDIANS)
 * Status: ✅ VALIDATED × YAGNI APPROVED × JØHN CERTIFIED × ONE
 * ∞ AbëONE ∞
 */

export const TypographySystem = {
  /**
   * LORA - The Soul Voice (headings, quotes, emotional content)
   */
  soulVoice: {
    fontFamily: "'Lora', serif",
    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      hero: 'clamp(3rem, 8vw, 7rem)',
      heading: 'clamp(2rem, 5vw, 4rem)',
      subtitle: 'clamp(1.25rem, 3vw, 2rem)',
    },
  },

  /**
   * POPPINS - The Clear Voice (body, UI, functional content)
   */
  clearVoice: {
    fontFamily: "'Poppins', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      body: 'clamp(1rem, 2vw, 1.5rem)',
      small: 'clamp(0.875rem, 1.5vw, 1.25rem)',
      tiny: 'clamp(0.75rem, 1vw, 1rem)',
    },
  },
} as const;

/**
 * Get Google Fonts link
 */
export function getGoogleFontsLink(): string {
  return "https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap";
}

/**
 * Get CSS for typography system
 */
export function getTypographyCSS(): string {
  return `
/* LORA - The Soul Voice */
.soul-voice {
  font-family: ${TypographySystem.soulVoice.fontFamily};
}

.soul-voice-hero {
  font-family: ${TypographySystem.soulVoice.fontFamily};
  font-size: ${TypographySystem.soulVoice.sizes.hero};
  font-weight: ${TypographySystem.soulVoice.weights.bold};
}

.soul-voice-heading {
  font-family: ${TypographySystem.soulVoice.fontFamily};
  font-size: ${TypographySystem.soulVoice.sizes.heading};
  font-weight: ${TypographySystem.soulVoice.weights.semibold};
}

.soul-voice-subtitle {
  font-family: ${TypographySystem.soulVoice.fontFamily};
  font-size: ${TypographySystem.soulVoice.sizes.subtitle};
  font-weight: ${TypographySystem.soulVoice.weights.regular};
}

/* POPPINS - The Clear Voice */
.clear-voice {
  font-family: ${TypographySystem.clearVoice.fontFamily};
}

.clear-voice-body {
  font-family: ${TypographySystem.clearVoice.fontFamily};
  font-size: ${TypographySystem.clearVoice.sizes.body};
  font-weight: ${TypographySystem.clearVoice.weights.regular};
}

.clear-voice-small {
  font-family: ${TypographySystem.clearVoice.fontFamily};
  font-size: ${TypographySystem.clearVoice.sizes.small};
  font-weight: ${TypographySystem.clearVoice.weights.regular};
}

.clear-voice-tiny {
  font-family: ${TypographySystem.clearVoice.fontFamily};
  font-size: ${TypographySystem.clearVoice.sizes.tiny};
  font-weight: ${TypographySystem.clearVoice.weights.light};
}
  `.trim();
}

/**
 * Get typography style for a specific use case
 */
export function getTypographyStyle(
  voice: 'soul' | 'clear',
  size: 'hero' | 'heading' | 'subtitle' | 'body' | 'small' | 'tiny'
): { fontFamily: string; fontSize: string; fontWeight: number } {
  if (voice === 'soul') {
    return {
      fontFamily: TypographySystem.soulVoice.fontFamily,
      fontSize: TypographySystem.soulVoice.sizes[size as 'hero' | 'heading' | 'subtitle'],
      fontWeight: size === 'hero' 
        ? TypographySystem.soulVoice.weights.bold
        : size === 'heading'
        ? TypographySystem.soulVoice.weights.semibold
        : TypographySystem.soulVoice.weights.regular,
    };
  } else {
    return {
      fontFamily: TypographySystem.clearVoice.fontFamily,
      fontSize: TypographySystem.clearVoice.sizes[size as 'body' | 'small' | 'tiny'],
      fontWeight: TypographySystem.clearVoice.weights.regular,
    };
  }
}
