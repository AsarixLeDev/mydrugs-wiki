# Machines

The mod mixes tactile, hands-on stations with more industrial processing blocks.

## Manual / tactile stations

| Machine | Role |
| --- | --- |
| Grinding Bowl / Mortar | Single-item grinding recipes with manual work input. |
| Stomp Crafter | Crafts by converting player fall impact into work. |
| Dryer | Turns raw plant inputs into dry processing ingredients. |
| Sieve | Shake-driven recipe station with optional bonus results. |
| Mixing Vat | Manual stirring recipes for fluid chemistry and mash preparation. |
| Evaporation Tray | Converts fluids into solid items over time. |
| Roller | Special-purpose UI for cigarettes and joints. |

## Industrial / advanced machines

| Machine | Role |
| --- | --- |
| Advanced Furnace | Converts solid inputs into cooked outputs plus a fluid byproduct. |
| Distiller | Splits one fluid into two outputs; used for fermented mash. |
| Fluid Filterer | Manual filtering machine for murky extract → filtered extract. |
| Centrifuge | Splits amino acid fluid into tryptophan and waste biomass. |
| Growth Chamber | Item + biomass + water growth pipeline for fungal culture and ergot. |
| Biochemical Reactor | Heat-gated biochemical processing for ergotamine. |
| Gasifier | Turns powders into registered gases. |
| Chemical Reactor | Gas + gas reactions with heat requirements. |
| Advanced Mixing Vat | Multi-input fluid / gas mixing for late chemistry. |

## Machine UX layer

The client package contains dedicated machine screens for:

- `AbstractMachineScreen`
- `AdvancedFurnaceScreen`
- `AdvancedMixingVatScreen`
- `BiochemicalReactorScreen`
- `CentrifugeScreen`
- `ChemicalReactorScreen`
- `DistillerScreen`
- `FluidFiltererScreen`
- `GasifierScreen`
- `GrowthChamberScreen`
- `RollerScreen`
- `SieveScreen`
- `SingleSlotMenuScreen`

The block entity renderer package also contains custom renderers for visible process blocks:

- `DryerRenderer`
- `EvaporationTrayRenderer`
- `GrindingBowlRenderer`
- `MixingVatRenderer`
- `SieveRenderer`
- `StompCrafterRenderer`

## Common architecture pattern

Across the machine layer, the code reuses several patterns:

- synced item handlers
- synced fluid handlers
- gas handlers where needed
- container data for screen synchronization
- recipe-type-specific serializers
- side-aware transfer helpers

That makes the machine layer feel like a framework instead of a pile of one-off blocks.
