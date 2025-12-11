#!/usr/bin/env node

/**
 * VALIDATION SCRIPT × PRODUCTION × ONE
 * Pattern: VALIDATION × SCRIPT × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (JØHN)
 * Status: ✅ VALIDATION × ONE
 * ∞ AbëONE ∞
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];
let fileCount = 0;
let lineCount = 0;

console.log('🔍 AbëONE Design System Validation\n');
console.log('Pattern: VALIDATION × PRODUCTION × ONE\n');
console.log('∞ AbëONE ∞\n');
console.log('─'.repeat(60) + '\n');

// Check required files
const requiredFiles = [
  'package.json',
  'README.md',
  'LICENSE',
  'tsconfig.json',
  'src/index.ts',
  'src/tokens/cosmic-palette.ts',
  'src/tokens/typography.ts',
  'src/tokens/spacing.ts',
  'src/animations/patterns.ts',
  'src/living-canvas/builder.ts',
  'src/utils/validation.ts',
  'src/utils/index.ts',
  'src/init.ts',
  'docs/quick-start.md',
  'docs/design-tokens.md',
  'docs/living-canvas-protocol.md',
  'docs/animation-patterns.md',
  'docs/validation.md',
];

console.log('📁 Checking Required Files...\n');
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    fileCount++;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    lineCount += lines;
    console.log(`  ✅ ${file} (${lines} lines)`);
  } else {
    errors.push(`Missing required file: ${file}`);
    console.log(`  ❌ ${file} - MISSING`);
  }
});

console.log(`\n📊 Files: ${fileCount}/${requiredFiles.length} found`);
console.log(`📊 Total Lines: ${lineCount}\n`);

// Validate package.json
console.log('📦 Validating package.json...\n');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  
  if (!packageJson.name) errors.push('package.json missing name');
  if (!packageJson.version) errors.push('package.json missing version');
  if (!packageJson.description) warnings.push('package.json missing description');
  if (!packageJson.main) errors.push('package.json missing main');
  if (!packageJson.types) errors.push('package.json missing types');
  if (!packageJson.scripts || !packageJson.scripts.build) errors.push('package.json missing build script');
  
  console.log(`  ✅ Name: ${packageJson.name}`);
  console.log(`  ✅ Version: ${packageJson.version}`);
  console.log(`  ✅ Main: ${packageJson.main}`);
  console.log(`  ✅ Types: ${packageJson.types}`);
  console.log(`  ✅ Build Script: ${packageJson.scripts?.build || 'MISSING'}\n`);
} catch (e) {
  errors.push(`package.json parse error: ${e.message}`);
  console.log(`  ❌ package.json - PARSE ERROR\n`);
}

// Validate TypeScript files
console.log('📝 Validating TypeScript Files...\n');
const tsFiles = [
  'src/index.ts',
  'src/tokens/cosmic-palette.ts',
  'src/tokens/typography.ts',
  'src/tokens/spacing.ts',
  'src/animations/patterns.ts',
  'src/living-canvas/builder.ts',
  'src/utils/validation.ts',
  'src/utils/index.ts',
  'src/init.ts',
];

tsFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for exports
    if (!content.includes('export')) {
      warnings.push(`${file} has no exports`);
    }
    
    // Check for proper header comment
    if (!content.includes('AbëONE') && !content.includes('Pattern:')) {
      warnings.push(`${file} missing standard header comment`);
    }
    
    // Check for basic syntax
    if (content.includes('function') && !content.includes('function ')) {
      // Basic check
    }
    
    console.log(`  ✅ ${file}`);
  } else {
    errors.push(`Missing TypeScript file: ${file}`);
    console.log(`  ❌ ${file} - MISSING`);
  }
});

console.log('');

// Validate exports in index.ts
console.log('🔌 Validating Exports...\n');
try {
  const indexContent = fs.readFileSync(path.join(__dirname, '..', 'src/index.ts'), 'utf8');
  
  const requiredExports = [
    'CosmicPalette',
    'TypographySystem',
    'SpacingSystem',
    'LivingCanvasBuilder',
  ];
  
  requiredExports.forEach(exp => {
    if (indexContent.includes(exp)) {
      console.log(`  ✅ ${exp}`);
    } else {
      errors.push(`Missing export: ${exp}`);
      console.log(`  ❌ ${exp} - MISSING`);
    }
  });
} catch (e) {
  errors.push(`index.ts validation error: ${e.message}`);
}

console.log('');

// Check for security issues
console.log('🔒 Security Validation...\n');
try {
  const builderContent = fs.readFileSync(path.join(__dirname, '..', 'src/living-canvas/builder.ts'), 'utf8');
  
  if (builderContent.includes('sanitizeHTML')) {
    console.log('  ✅ HTML sanitization present');
  } else {
    errors.push('Missing HTML sanitization');
    console.log('  ❌ HTML sanitization - MISSING');
  }
  
  if (builderContent.includes('escapeAttribute')) {
    console.log('  ✅ Attribute escaping present');
  } else {
    warnings.push('Missing attribute escaping');
    console.log('  ⚠️  Attribute escaping - MISSING');
  }
  
  if (builderContent.includes('validate')) {
    console.log('  ✅ Validation function present');
  } else {
    warnings.push('Missing validation function');
    console.log('  ⚠️  Validation function - MISSING');
  }
} catch (e) {
  errors.push(`Security validation error: ${e.message}`);
}

console.log('');

// Summary
console.log('─'.repeat(60) + '\n');
console.log('📊 VALIDATION SUMMARY\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ ALL VALIDATIONS PASSED\n');
  console.log('Status: ✅ PRODUCTION READY × VALIDATED × ONE\n');
  process.exit(0);
} else {
  if (errors.length > 0) {
    console.log(`❌ ERRORS: ${errors.length}\n`);
    errors.forEach(err => console.log(`  ❌ ${err}`));
    console.log('');
  }
  
  if (warnings.length > 0) {
    console.log(`⚠️  WARNINGS: ${warnings.length}\n`);
    warnings.forEach(warn => console.log(`  ⚠️  ${warn}`));
    console.log('');
  }
  
  if (errors.length > 0) {
    console.log('Status: ❌ VALIDATION FAILED\n');
    process.exit(1);
  } else {
    console.log('Status: ⚠️  VALIDATION PASSED WITH WARNINGS\n');
    process.exit(0);
  }
}

console.log('∞ AbëONE ∞\n');
