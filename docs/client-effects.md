# Client effects and presentation

The client layer is a major part of the mod’s identity.

## Shader set

The uploaded shader resources include:

- `acid_warp`
- `aurora_ribbons`
- `chromatic_dream`
- `drunk_vision`
- `event_horizon`
- `fog`
- `lucid_dream`
- `melt_reality`
- `opal_wave`
- `quantum_flower`
- `spectral_poster`
- `void_pulse`
- `withdrawal_tunnel`

These pair with the `EffectType` shader category and the mod’s shader manager.

## Sound design

Registered sound events include:

- `heartbeat`
- `smoke`
- `single_heartbeat`
- `hallucination_cue`
- `intrusive_whisper`
- `goodvibes_music`
- `write`

The raw sound folder contains **30 audio files**, including heartbeat loops, whisper variations, hallucination cues, streamed music, smoke audio, and the diary writing sound.

## HUD and symptom feedback

The code snapshot shows the addiction system feeding client-side presentation such as:

- severity synchronization
- tunnel / visual distortion effects
- heartbeat tension
- intrusive whispers
- hallucination cues
- headphones state synchronization

## Dynamic item presentation

The resources also show several item-state visual systems:

- bottle shell + multiple liquid fill models
- syringe empty / filled variants
- bucket / bottle masking assets
- generated space-food overlays

## Custom block visuals

The assets include custom blockstates and machine models, plus an `.obj` model for the grinding bowl. The renderer package also confirms that several processing blocks have visible animated or stateful rendering beyond standard static blocks.
