# MyDrugs Mod Wiki

Welcome to the wiki for the uploaded **MyDrugs** snapshot.

This site documents the mod as it exists in the Java and resource archives you shared. It covers the current gameplay loop, the machine chain, the drug framework, the addiction system, and the supporting assets that make the snapshot playable and documentable.

!!! note
    This wiki describes a **snapshot**, not a finished public release. Some blocks, items, and systems are fully wired and craftable; others already exist in code and assets but do not yet have a crafting recipe or survival obtain path.

## What kind of mod is this?

MyDrugs is a survival-and-chemistry mod built around four connected layers:

- **processing** — crops, drying, grinding, sieving, mixing, distilling, filtering, evaporation, gas handling, and reactors
- **consumption** — powders, shards, mushrooms, rolls, bottles, injectables, and drinkable fluids
- **long-term player state** — category-based addiction, tolerance, withdrawal, stress, and recovery
- **presentation** — custom shaders, audio cues, visual distortions, and stateful items and machines

## Suggested reading order

If you are new to the snapshot, this route gives the clearest overview:

1. **[Getting Started](getting-started.md)** for the overall progression
2. **[Machines](machines.md)** for the stations and reactors
3. **[Recipes & Production](recipes-and-production.md)** for the main processing chains
4. **[Drugs](drugs.md)** and **[Addiction & Recovery](addiction-and-recovery.md)** for the player-facing systems

## Quick links

### Early processing
- [Mortar](machines.md#mortar)
- [Dryer](machines.md#dryer)
- [Sieve](machines.md#sieve)
- [Mixing Vat](machines.md#mixing-vat)
- [Stomp Crafter](machines.md#stomp-crafter)

### Chemistry and fluid line
- [Advanced Furnace](machines.md#advanced-furnace)
- [Distiller](machines.md#distiller)
- [Fluid Filterer](machines.md#fluid-filterer)
- [Evaporation Tray](machines.md#evaporation-tray)
- [Centrifuge](machines.md#centrifuge)

### Gas and late-game reactors
- [Gas Tank](machines.md#gas-tank)
- [Gas Pump](machines.md#gas-pump)
- [Gasifier](machines.md#gasifier)
- [Chemical Reactor](machines.md#chemical-reactor)
- [Advanced Mixing Vat](machines.md#advanced-mixing-vat)
- [Biochemical Reactor](machines.md#biochemical-reactor)
- [Growth Chamber](machines.md#growth-chamber)

## Snapshot highlights

- A full **drug registry** with delivery strategies for eating, smoking, sniffing, and injecting
- A layered **addiction and recovery** simulation with stress, relapse, resilience, therapy items, and safe-zone blocks
- A full **fluid chemistry chain** for alcohol, coca extraction, and lysergic processing
- A separate **gas system** with tanks, pumps, gasifiers, and reactor inputs
- A major **client layer** with shaders, audio, HUD feedback, and stateful item rendering

## Known snapshot caveats

A few parts of the upload are clearly still in development:

- several late-game machines exist in code and assets but have **no crafting recipe** yet
- some names drift between code and assets, such as the `sulfur_oxide` / `reactive` naming mismatch
- some content is resource-backed but still thinly surfaced in the current recipe set

That does not make the systems undocumented. It just means the wiki distinguishes between **implemented** and **currently obtainable** content.
