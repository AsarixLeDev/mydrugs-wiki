# Fluids and gases

The chemistry side of the mod is built on **two separate transport systems**: a standard fluid system and a custom gas system.

## Fluids

Every registered fluid entry carries:

- an ID
- a tint color
- a drinkable flag
- an optional linked `DrugId`

That is why a bottle can both show the right color and apply a drug effect when drunk.

### Registered fluids in the current snapshot

| Fluid | Drinkable | Drug link |
| --- | --- | --- |
| Starch Mash | No | — |
| Sweet Mash | No | — |
| Wild Yeast | No | — |
| Fermented Mash | No | — |
| Raw Alcohol | Yes | ALCOHOL |
| Vodka | Yes | ALCOHOL |
| Ammoniac | No | — |
| Blood | No | — |
| Murky Extract | No | — |
| Filtered Extract | No | — |
| Coal Tar | No | — |
| Amino Acid | No | — |
| Tryptophan Solution | No | — |
| Waste Biomass | No | — |
| Lysergic Acid | No | — |
| Diethylamine | No | — |
| Ergotamine | No | — |
| Lsd | Yes | LSD |
| Hydrochloric Acid | No | — |
| Acylating Agent | No | — |
| Activated Lysergic Acid | No | — |
| Sulfur Compound | No | — |
| Crack | No | — |

## Gases

The gas system is not just “fluids pretending to be gases.” It has its own:

- `GasType`
- `GasStack`
- `GasTank`
- `IGasHandler`
- block and item capabilities
- transfer utility

### Registered gases

| Gas | Toxic | Flammable |
| --- | --- | --- |
| Chlorine | Yes | No |
| Hydrochloric Gas | Yes | No |
| Sulfur Oxide | Yes | No |
| Sulfur Gas | Yes | No |
| Air | No | No |

## Gas hardware

The current snapshot includes:

- a placeable gas tank block entity
- a gas tank item with persistent internal storage
- a gas pump block entity
- gasifier output into gas handlers
- gas use in the chemical reactor and advanced mixing vat

## Important content note

There is at least one naming mismatch between code and resources:

- Java registers `sulfur_oxide`
- the language file still contains `reactive`

That is worth fixing before public release so the wiki, UI text, and gameplay all use the same gas name.
