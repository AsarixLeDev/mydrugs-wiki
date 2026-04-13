# Addiction & Recovery

This is one of the deepest systems in the entire snapshot.

## What is tracked per player

Player addiction data is stored as an attachment and serialized through `PlayerAddictionStats`.

For each drug category, the system tracks:

- addiction value
- withdrawal meter
- tolerance
- last use time
- relapse memory
- historical peak addiction

At the player level it also tracks wider state such as resilience, stress, temporary recovery bonuses, and therapy-related timers.

## What happens when a player consumes a drug

Drug consumption does more than apply an effect. It also:

1. computes addiction gain
2. raises tolerance
3. updates last-use time
4. lowers withdrawal temporarily as short-term relief
5. records peak addiction state for that category

That means every dose affects both the immediate experience and the long-term recovery model.

## Tick-based simulation

`AddictionManager.tickPlayer()` is the main update loop. It coordinates:

- withdrawal progression
- addiction decay
- tolerance decay
- relapse decay
- global severity calculation
- stress changes
- symptom application
- resilience recovery in safe conditions
- regular client sync

The system also reacts to context such as time since last use, combat, nearby companions, safe zones, sleep, and food.

## Recovery content

The uploaded snapshot already includes a meaningful recovery layer.

### Blocks and world support
- Recovery Anchor
- Therapist Desk
- therapist villager profession
- therapist point of interest

### Recovery items
- Personal Diary
- Headphones
- herbal tea
- calming mixture
- sleeping aid

These are not just lore props. They interact directly with stress, withdrawal, calm windows, or sleep support.

## Feedback to the player

Withdrawal and severity are communicated through both mechanics and presentation:

- status effects and stress damage
- hallucination cues
- intrusive whispers
- heartbeat effects
- tunnel and distortion shaders
- HUD feedback

## Damage types

The resources define at least two custom damage types tied to the broader system:

- `blood_draw`
- `stress_overload`

The second one is especially important because it shows the internal recovery model can become direct gameplay danger.
