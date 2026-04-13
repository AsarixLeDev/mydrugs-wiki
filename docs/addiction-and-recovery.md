# Addiction and recovery

This is one of the deepest systems in the mod.

## What is tracked per player

Player addiction data is stored as an attachment and serialized through `PlayerAddictionStats`.

For each drug category, the system tracks values such as:

- addiction value
- withdrawal meter
- tolerance
- last use time
- relapse state
- peak historical addiction

At the player level it also tracks:

- genetic factor
- resilience
- stress level
- temporary recovery effects
- therapy / hint / sleep-related timers

## What happens when a player consumes a drug

On use, the system:

1. computes addiction gain from dose, configuration, genetics, and tolerance
2. applies relapse multipliers
3. updates last-use timing
4. raises tolerance
5. lowers withdrawal temporarily as short-term relief
6. stores the peak addiction history for that category

So consumption does not just fire an effect; it mutates a long-term recovery model.

## Tick-based withdrawal simulation

`AddictionManager.tickPlayer()` runs the main recovery loop.

Its inputs include:

- time since use
- whether the player is in combat
- nearby companions
- whether the player is in a safe zone
- resilience and stress

Its outputs include:

- withdrawal progression
- addiction decay
- tolerance decay
- relapse decay
- global severity calculation
- stress updates
- symptom application
- client synchronization

## Recovery systems in gameplay

### Safe spaces

A **recovery anchor** creates a safe-zone check in an 8-block radius. Safe zones can reduce the pressure of severe withdrawal and contribute to resilience recovery.

### Therapy layer

The content snapshot includes:

- `therapist_desk`
- a therapist point-of-interest type
- a therapist villager profession

That gives the recovery theme a world-embedded role, not just an item-based one.

### Recovery items

- **Personal diary**: grants calm / thought-suppression style temporary effects and plays a writing sound.
- **Headphones**: toggleable comfort item with track cycling and continuous state syncing.
- **Herbal tea**: reduces stress and lowers withdrawal meters across categories.
- **Calming mixture**: stronger stress relief plus diary/sleep bonuses.
- **Sleeping aid**: clears sleep blocks and adds a sleep-oriented bonus window.

### Ordinary needs also matter

The manager code also references sleep, food, health, social relief, hints, and safe-zone behavior. That makes recovery feel systemic rather than isolated to one block or item.

## Feedback to the player

Withdrawal is communicated through both gameplay and presentation:

- server-side symptoms and stress damage
- global severity syncing
- intrusive whispers and hallucination cues
- heartbeat effects
- tunnel / dissociation-style shaders
- HUD-driven feedback and tension

## Damage types

The resources define custom damage types for:

- `blood_draw`
- `stress_overload`

The second one is especially important because it shows that severe internal state can become direct mechanical danger.
