/**
 * THE SPACING SYSTEM × MODULAR SCALE × ONE
 * Pattern: SPACING × SYSTEM × MODULAR × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (ALL GUARDIANS)
 * Status: ✅ VALIDATED × YAGNI APPROVED × JØHN CERTIFIED × ONE
 * ∞ AbëONE ∞
 */

export const SpacingSystem = {
  /**
   * Modular spacing scale (Fibonacci-influenced)
   */
  scale: {
    xs: '0.5rem',   // 8px - tight
    sm: '1rem',     // 16px - comfortable
    md: '1.5rem',   // 24px - natural
    lg: '2rem',     // 32px - breathing
    xl: '3rem',     // 48px - generous
    '2xl': '4rem',  // 64px - spacious
    '3xl': '6rem',  // 96px - expansive
  },
} as const;

/**
 * Get CSS variables for spacing
 */
export function getSpacingCSS(): string {
  return `
:root {
  --spacing-xs: ${SpacingSystem.scale.xs};
  --spacing-sm: ${SpacingSystem.scale.sm};
  --spacing-md: ${SpacingSystem.scale.md};
  --spacing-lg: ${SpacingSystem.scale.lg};
  --spacing-xl: ${SpacingSystem.scale.xl};
  --spacing-2xl: ${SpacingSystem.scale['2xl']};
  --spacing-3xl: ${SpacingSystem.scale['3xl']};
}
  `.trim();
}

/**
 * Get spacing utility classes CSS
 */
export function getSpacingUtilitiesCSS(): string {
  return `
.spacing-xs { padding: var(--spacing-xs); }
.spacing-sm { padding: var(--spacing-sm); }
.spacing-md { padding: var(--spacing-md); }
.spacing-lg { padding: var(--spacing-lg); }
.spacing-xl { padding: var(--spacing-xl); }
.spacing-2xl { padding: var(--spacing-2xl); }
.spacing-3xl { padding: var(--spacing-3xl); }
  `.trim();
}
