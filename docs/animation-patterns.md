# Animation Patterns

## 5 Core Patterns

### 1. Particle Field (Ambient Life)

**Use for:** Calm, meditative, peaceful, minimalist

```typescript
import { getAnimationCode } from '@abeone/design-system';

const code = getAnimationCode('particle-field', {
  particleCount: 50,
  speed: 0.2,
  color: 'rgba(255, 255, 255, 20)'
});
```

**Emotion Mapping:**
- calm → particle-field
- meditative → particle-field
- peaceful → particle-field

### 2. Orbital System (Relationships)

**Use for:** Love, connections, relationships, networks

```typescript
const code = getAnimationCode('orbital-system', {
  particleCount: 10,
  speed: 0.02,
  color: 'rgba(255, 105, 180, 200)'
});
```

**Emotion Mapping:**
- love → orbital-system
- connection → orbital-system
- relationships → orbital-system

### 3. Transformation Wave (Change)

**Use for:** Transformation, evolution, growth, before/after

```typescript
const code = getAnimationCode('transformation-wave', {
  particleCount: 100,
  speed: 0.02,
  color: 'rgba(255, 105, 180, 150)'
});
```

**Emotion Mapping:**
- transformation → transformation-wave
- evolution → transformation-wave
- growth → transformation-wave

### 4. Energy Flow (Transfer)

**Use for:** Process, journey, flow, transfer

```typescript
const code = getAnimationCode('energy-flow', {
  particleCount: 20,
  speed: 0.02,
  color: 'rgba(255, 105, 180, 200)'
});
```

**Emotion Mapping:**
- process → energy-flow
- journey → energy-flow
- flow → energy-flow

### 5. Emergence Burst (Creation)

**Use for:** Launches, revelations, breakthroughs, explosions

```typescript
const code = getAnimationCode('emergence-burst', {
  intensity: 'high',
  color: 'rgba(255, 105, 180, 200)'
});
```

**Emotion Mapping:**
- awe → emergence-burst
- breakthrough → emergence-burst
- launch → emergence-burst
- creation → emergence-burst

## Emotion to Animation Mapping

```typescript
import { emotionToAnimation } from '@abeone/design-system';

emotionToAnimation('awe');           // 'emergence-burst'
emotionToAnimation('love');          // 'orbital-system'
emotionToAnimation('transformation'); // 'transformation-wave'
emotionToAnimation('calm');          // 'particle-field'
emotionToAnimation('process');       // 'energy-flow'
```

## Pattern Selection

The animation pattern should **embody the emotion**:

- **Particles flowing** = transformation happening
- **Light expanding** = love growing
- **Orbits connecting** = relationships forming
- **Chaos → Order** = evolution occurring
- **Explosion bursts** = breakthrough moment

**THE CODE PERFORMS THE MEANING.**
