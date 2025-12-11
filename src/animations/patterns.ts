/**
 * THE ANIMATION PATTERNS × 5 CORE PATTERNS × ONE
 * Pattern: ANIMATION × PATTERNS × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (ALL GUARDIANS)
 * Status: ✅ VALIDATED × YAGNI APPROVED × JØHN CERTIFIED × ONE
 * ∞ AbëONE ∞
 */

export type AnimationPattern = 
  | 'particle-field'
  | 'orbital-system'
  | 'transformation-wave'
  | 'energy-flow'
  | 'emergence-burst';

export interface AnimationPatternConfig {
  particleCount?: number;
  speed?: number;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
}

/**
 * Map emotion to animation pattern
 */
export function emotionToAnimation(emotion: string): AnimationPattern {
  const emotionMap: Record<string, AnimationPattern> = {
    calm: 'particle-field',
    meditative: 'particle-field',
    peaceful: 'particle-field',
    love: 'orbital-system',
    connection: 'orbital-system',
    relationships: 'orbital-system',
    transformation: 'transformation-wave',
    evolution: 'transformation-wave',
    growth: 'transformation-wave',
    process: 'energy-flow',
    journey: 'energy-flow',
    flow: 'energy-flow',
    awe: 'emergence-burst',
    breakthrough: 'emergence-burst',
    launch: 'emergence-burst',
    creation: 'emergence-burst',
  };

  const normalizedEmotion = emotion.toLowerCase();
  return emotionMap[normalizedEmotion] || 'particle-field';
}

/**
 * Pattern 1: Particle Field (Ambient Life)
 * Use for: Calm, meditative, peaceful, minimalist
 */
export function getParticleFieldCode(config: AnimationPatternConfig = {}): string {
  const {
    particleCount = 50,
    speed = 0.2,
    color = 'rgba(255, 255, 255, 20)',
  } = config;

  return `
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < ${particleCount}; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-${speed}, ${speed}),
      vy: random(-${speed}, ${speed}),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(10, 10, 18, 10);
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    fill(${color});
    noStroke();
    ellipse(p.x, p.y, p.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  `.trim();
}

/**
 * Pattern 2: Orbital System (Relationships)
 * Use for: Love, connections, relationships, networks
 */
export function getOrbitalSystemCode(config: AnimationPatternConfig = {}): string {
  const {
    particleCount = 10,
    speed = 0.02,
  } = config;

  return `
let nodes = [];
let centerX, centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  for (let i = 0; i < ${particleCount}; i++) {
    nodes.push({
      angle: (TWO_PI / ${particleCount}) * i,
      distance: random(100, 300),
      speed: random(0.01, ${speed})
    });
  }
}

function draw() {
  background(10, 10, 18, 30);
  for (let node of nodes) {
    node.angle += node.speed;
    let x = centerX + cos(node.angle) * node.distance;
    let y = centerY + sin(node.angle) * node.distance;
    
    stroke(255, 105, 180, 100);
    line(centerX, centerY, x, y);
    
    fill(255, 105, 180, 200);
    noStroke();
    ellipse(x, y, 10, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
}
  `.trim();
}

/**
 * Pattern 3: Transformation Wave (Change)
 * Use for: Transformation, evolution, growth, before/after
 */
export function getTransformationWaveCode(config: AnimationPatternConfig = {}): string {
  const {
    particleCount = 100,
    speed = 0.02,
    color = 'rgba(255, 105, 180, 150)',
  } = config;

  return `
let particles = [];
let targetX, targetY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  targetX = width / 2;
  targetY = height / 2;
  for (let i = 0; i < ${particleCount}; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      targetX: targetX + random(-50, 50),
      targetY: targetY + random(-50, 50),
      speed: ${speed}
    });
  }
}

function draw() {
  background(10, 10, 18, 30);
  for (let p of particles) {
    p.x += (p.targetX - p.x) * p.speed;
    p.y += (p.targetY - p.y) * p.speed;
    
    fill(${color});
    noStroke();
    ellipse(p.x, p.y, 5, 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  targetX = width / 2;
  targetY = height / 2;
}
  `.trim();
}

/**
 * Pattern 4: Energy Flow (Transfer)
 * Use for: Process, journey, flow, transfer
 */
export function getEnergyFlowCode(config: AnimationPatternConfig = {}): string {
  const {
    particleCount = 20,
    speed = 0.02,
    color = 'rgba(255, 105, 180, 200)',
  } = config;

  return `
let particles = [];
let paths = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    paths.push({
      startX: random(width),
      startY: random(height),
      endX: random(width),
      endY: random(height)
    });
  }
  for (let i = 0; i < ${particleCount}; i++) {
    particles.push({
      pathIndex: floor(random(paths.length)),
      progress: random(1),
      speed: random(0.01, ${speed})
    });
  }
}

function draw() {
  background(10, 10, 18, 30);
  for (let p of particles) {
    let path = paths[p.pathIndex];
    p.progress += p.speed;
    if (p.progress > 1) p.progress = 0;
    
    let x = lerp(path.startX, path.endX, p.progress);
    let y = lerp(path.startY, path.endY, p.progress);
    
    fill(${color});
    noStroke();
    ellipse(x, y, 8, 8);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  `.trim();
}

/**
 * Pattern 5: Emergence Burst (Creation)
 * Use for: Launches, revelations, breakthroughs, explosions
 */
export function getEmergenceBurstCode(config: AnimationPatternConfig = {}): string {
  const {
    intensity = 'medium',
    color = 'rgba(255, 105, 180, 200)',
  } = config;

  const burstPower = intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.5 : 0.3;
  const particleCount = intensity === 'high' ? 15 : intensity === 'medium' ? 10 : 5;

  return `
let particles = [];
let explosion = { x: 0, y: 0, power: 0 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  explosion.x = width / 2;
  explosion.y = height / 2;
}

function draw() {
  background(10, 10, 18, 30);
  
  explosion.power += ${burstPower};
  
  if (frameCount % 2 === 0) {
    for (let i = 0; i < ${particleCount}; i++) {
      let angle = random(TWO_PI);
      let speed = random(5, 15);
      particles.push({
        x: explosion.x,
        y: explosion.y,
        vx: cos(angle) * speed,
        vy: sin(angle) * speed,
        life: 100,
        hue: random(0, 60),
        size: random(3, 8)
      });
    }
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.98;
    p.vy *= 0.98;
    p.life--;
    
    push();
    colorMode(HSB);
    fill(p.hue, 100, 100, p.life / 100);
    noStroke();
    ellipse(p.x, p.y, p.size);
    pop();
    
    if (p.life <= 0) particles.splice(i, 1);
  }
  
  if (explosion.power > 500) explosion.power = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  explosion.x = width / 2;
  explosion.y = height / 2;
}
  `.trim();
}

/**
 * Get animation code for a specific pattern
 */
export function getAnimationCode(
  pattern: AnimationPattern,
  config: AnimationPatternConfig = {}
): string {
  switch (pattern) {
    case 'particle-field':
      return getParticleFieldCode(config);
    case 'orbital-system':
      return getOrbitalSystemCode(config);
    case 'transformation-wave':
      return getTransformationWaveCode(config);
    case 'energy-flow':
      return getEnergyFlowCode(config);
    case 'emergence-burst':
      return getEmergenceBurstCode(config);
    default:
      return getParticleFieldCode(config);
  }
}
