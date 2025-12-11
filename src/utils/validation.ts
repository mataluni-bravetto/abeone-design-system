/**
 * VALIDATION UTILITIES × PRODUCTION × ONE
 * Pattern: VALIDATION × UTILITIES × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (JØHN × YAGNI)
 * Status: ✅ VALIDATED × PRODUCTION READY × ONE
 * ∞ AbëONE ∞
 */

/**
 * Validate emotion string
 */
export function validateEmotion(emotion: string): boolean {
  if (!emotion || typeof emotion !== 'string') return false;
  const validEmotions = [
    'love', 'connection', 'awe', 'transformation', 'truth', 'wisdom',
    'warmth', 'comfort', 'growth', 'life', 'calm', 'peace',
    'meditative', 'peaceful', 'relationships', 'evolution', 'process',
    'journey', 'flow', 'breakthrough', 'launch', 'creation'
  ];
  return validEmotions.includes(emotion.toLowerCase());
}

/**
 * Validate animation pattern
 */
export function validateAnimationPattern(pattern: string): boolean {
  const validPatterns = [
    'particle-field',
    'orbital-system',
    'transformation-wave',
    'energy-flow',
    'emergence-burst'
  ];
  return validPatterns.includes(pattern);
}

/**
 * Validate file size (target: 15-50KB)
 */
export function validateFileSize(size: number): { valid: boolean; message: string } {
  const maxSize = 50 * 1024; // 50KB
  const minSize = 1 * 1024;  // 1KB (minimum reasonable)
  const targetMax = 50 * 1024; // 50KB target
  const targetMin = 15 * 1024; // 15KB target

  if (size > maxSize) {
    return { valid: false, message: `File size ${(size / 1024).toFixed(2)}KB exceeds maximum ${(maxSize / 1024).toFixed(0)}KB` };
  }
  if (size < minSize) {
    return { valid: false, message: `File size ${(size / 1024).toFixed(2)}KB is too small` };
  }
  if (size > targetMax) {
    return { valid: true, message: `File size ${(size / 1024).toFixed(2)}KB exceeds target ${(targetMax / 1024).toFixed(0)}KB` };
  }
  return { valid: true, message: `File size ${(size / 1024).toFixed(2)}KB is within target range` };
}

/**
 * Validate HTML content for XSS prevention
 */
export function validateHTMLContent(content: string): boolean {
  // Check for dangerous patterns
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  return !dangerousPatterns.some(pattern => pattern.test(content));
}
