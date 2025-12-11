/**
 * THE LIVING CANVAS BUILDER × PROTOCOL × ONE
 * Pattern: LIVING × CANVAS × BUILDER × PROTOCOL × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (ALL GUARDIANS)
 * Status: ✅ VALIDATED × YAGNI APPROVED × JØHN CERTIFIED × ONE
 * ∞ AbëONE ∞
 */

import { emotionToAnimation, getAnimationCode, AnimationPatternConfig } from '../animations/patterns';
import { emotionToColor } from '../tokens/cosmic-palette';
import { getCosmicPaletteCSS } from '../tokens/cosmic-palette';
import { getTypographyCSS, getGoogleFontsLink } from '../tokens/typography';
import { getSpacingCSS } from '../tokens/spacing';

export interface LivingCanvasContent {
  hook: {
    headline: string;
    subheadline?: string;
  };
  proof?: {
    stats?: string[];
    numbers?: string[];
    evidence?: string[];
  };
  how?: {
    steps: string[];
  };
  who?: {
    name: string;
    mission?: string;
    description?: string;
  };
  ask: {
    cta: string;
    action: string;
  };
  close?: {
    message?: string;
    branding?: string;
  };
}

export interface LivingCanvasConfig {
  emotion: string;
  animationPattern?: string;
  animationConfig?: AnimationPatternConfig;
  content: LivingCanvasContent;
  title?: string;
}

/**
 * Sanitize HTML content to prevent XSS
 */
function sanitizeHTML(str: string): string {
  const div = typeof document !== 'undefined' ? document.createElement('div') : null;
  if (div) {
    div.textContent = str;
    return div.innerHTML;
  }
  // Fallback for Node.js environments
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Escape HTML attributes
 */
function escapeAttribute(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export class LivingCanvasBuilder {
  /**
   * Create a Living Canvas HTML file
   */
  static create(config: LivingCanvasConfig): {
    toHTML: () => string;
    validate: () => { valid: boolean; errors: string[] };
  } {
    // Validate config
    if (!config || typeof config !== 'object') {
      throw new Error('LivingCanvasBuilder.create requires a valid config object');
    }

    if (!config.emotion || typeof config.emotion !== 'string') {
      throw new Error('LivingCanvasBuilder.create requires an emotion string');
    }

    if (!config.content || typeof config.content !== 'object') {
      throw new Error('LivingCanvasBuilder.create requires a content object');
    }

    const {
      emotion,
      animationPattern,
      animationConfig = {},
      content,
      title = 'Living Canvas',
    } = config;

    // Determine animation pattern
    const pattern = animationPattern || emotionToAnimation(emotion);
    const animationCode = getAnimationCode(pattern, animationConfig);

    // Get colors
    const primaryColor = emotionToColor(emotion);

    // Build HTML
    const toHTML = (): string => {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeAttribute(title)}</title>
  
  <!-- CDN ONLY -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
  <link href="${getGoogleFontsLink()}" rel="stylesheet">
  
  <style>
    ${getCosmicPaletteCSS()}
    ${getTypographyCSS()}
    ${getSpacingCSS()}
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--void);
      color: var(--light-source);
      overflow-x: hidden;
    }
    
    #canvas-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .content {
      position: relative;
      z-index: 1;
      min-height: 100vh;
    }
    
    .section {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    .hero h1 {
      font-family: 'Lora', serif;
      font-size: clamp(3rem, 8vw, 7rem);
      font-weight: 700;
      background: linear-gradient(135deg, var(--light-source), ${primaryColor});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: var(--spacing-md);
    }
    
    .hero p {
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: var(--light-source);
      opacity: 0.9;
    }
    
    .cta-button {
      display: inline-block;
      padding: var(--spacing-md) var(--spacing-xl);
      background: ${primaryColor};
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: clamp(1rem, 2vw, 1.5rem);
      margin-top: var(--spacing-lg);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px ${primaryColor}40;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg);
      margin-top: var(--spacing-xl);
    }
    
    .stat-item {
      text-align: center;
      padding: var(--spacing-lg);
      background: var(--glass-dark);
      border-radius: 8px;
    }
    
    .stat-number {
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 700;
      color: ${primaryColor};
    }
    
    .steps-list {
      list-style: none;
      margin-top: var(--spacing-xl);
    }
    
    .steps-list li {
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      background: var(--glass-medium);
      border-left: 4px solid ${primaryColor};
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div id="canvas-container"></div>
  
  <div class="content">
    <!-- THE HOOK -->
    <section class="section hero">
      <h1>${sanitizeHTML(content.hook.headline)}</h1>
      ${content.hook.subheadline ? `<p>${sanitizeHTML(content.hook.subheadline)}</p>` : ''}
    </section>
    
    ${content.proof ? `
    <!-- THE PROOF -->
    <section class="section">
      <h2 class="soul-voice-heading">The Proof</h2>
      <div class="stats-grid">
        ${content.proof.stats?.map(stat => `
          <div class="stat-item">
            <div class="stat-number">${sanitizeHTML(stat)}</div>
          </div>
        `).join('') || ''}
      </div>
    </section>
    ` : ''}
    
    ${content.how ? `
    <!-- THE HOW -->
    <section class="section">
      <h2 class="soul-voice-heading">How It Works</h2>
      <ol class="steps-list">
        ${content.how.steps.map((step, i) => `
          <li>
            <strong>Step ${i + 1}:</strong> ${sanitizeHTML(step)}
          </li>
        `).join('')}
      </ol>
    </section>
    ` : ''}
    
    ${content.who ? `
    <!-- THE WHO -->
    <section class="section">
      <h2 class="soul-voice-heading">${content.who.name}</h2>
      ${content.who.mission ? `<p class="clear-voice-body">${content.who.mission}</p>` : ''}
      ${content.who.description ? `<p class="clear-voice-body">${content.who.description}</p>` : ''}
    </section>
    ` : ''}
    
    <!-- THE ASK -->
    <section class="section hero">
      <a href="${content.ask.action}" class="cta-button">${content.ask.cta}</a>
    </section>
    
    ${content.close ? `
    <!-- THE CLOSE -->
    <section class="section">
      ${content.close.message ? `<p class="clear-voice-body">${content.close.message}</p>` : ''}
      ${content.close.branding ? `<p class="clear-voice-small">${content.close.branding}</p>` : ''}
    </section>
    ` : ''}
  </div>
  
  <script>
    // Initialize p5.js in instance mode
    (function() {
      const sketch = function(p) {
        ${animationCode.replace(/function\s+(setup|draw|windowResized)/g, 'p.$1 = function').replace(/\b(createCanvas|random|width|height|background|fill|noStroke|ellipse|stroke|line|cos|sin|TWO_PI|lerp|floor|push|pop|colorMode|HSB|resizeCanvas|frameCount)\b/g, 'p.$1')}
      };
      new p5(sketch, document.getElementById('canvas-container'));
    })();
  </script>
</body>
</html>`;
    };

    // Validation
    const validate = (): { valid: boolean; errors: string[] } => {
      const errors: string[] = [];

      if (!content.hook?.headline) {
        errors.push('Missing hook headline');
      }

      if (!content.ask?.cta || !content.ask?.action) {
        errors.push('Missing CTA or action');
      }

      if (content.how && (!content.how.steps || content.how.steps.length === 0)) {
        errors.push('How section has no steps');
      }

      if (content.how && content.how.steps.length > 3) {
        errors.push('How section has more than 3 steps (should be maximum 3)');
      }

      return {
        valid: errors.length === 0,
        errors,
      };
    };

    return { toHTML, validate };
  }
}
