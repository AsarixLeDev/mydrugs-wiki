# Technical architecture

## Entrypoint

`MyDrugs` is the main mod entrypoint. It registers:

- blocks
- items
- block entities
- recipe serializers and types
- menus
- data components
- fluids and fluid blocks/items
- sound events
- player attachments
- shader registration
- TerraBlender hooks

It also initializes the main `DrugService` and populates the `DrugRegistry`.

## Recipe system

The mod defines dedicated recipe types and serializers for:

- grinding
- stomp crafting
- advanced furnace
- mixing vat
- distiller
- drying
- sieving
- fluid filtering
- evaporation tray
- centrifuge
- growth chamber
- biochemical reactor
- chemical reactor
- gasifier
- advanced mixing vat

## Networking and sync

The snapshot includes multiple payload-driven systems for gameplay sync, including examples such as:

- in-game effect application
- sieve shaking
- headphones state
- addiction severity / symptom sync

## Data-driven + code-driven balance

The mod uses a healthy split:

- **Code-driven** for systems, registries, machine logic, capabilities, and player-state simulation
- **Data-driven** for recipes, worldgen JSON, language, loot, blockstates, models, sounds, and shaders

## Command hook

The command package registers a debug-style command:

- `/mydrugs shader <effect>`

That is useful for testing shader effects without going through the full gameplay pipeline.

## Known mismatches / cleanup notes from this snapshot

A few details look like they should be normalized before public documentation goes live:

- `sulfur_oxide` in Java vs `reactive` in the language file
- `lsd_bottle` assets exist in resources, but the provided Java snapshot does not obviously register a matching item
- there is a `cocaine_shard.json` model file even though the main content name is `crack_shard`
- one custom death message string for `blood_draw` looks like a private/internal placeholder rather than release text

These are not blockers for the wiki, but they are good polish targets.
