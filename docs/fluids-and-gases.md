# Fluids & Gases

The chemistry side of the snapshot is split across **two different transport systems**:

- a standard fluid system
- a custom gas system

That split matters, because gases are not faked as ordinary fluids.

## Fluids

Each registered fluid entry carries:

- an ID
- a tint color
- a drinkable flag
- an optional linked `DrugId`

That is why a bottle can display the correct liquid color and still apply a drug effect when drunk.

### Registered fluid families

#### Alcohol line
- starch mash
- sweet mash
- wild yeast
- fermented mash
- raw alcohol
- vodka

#### Coca extraction line
- murky extract
- filtered extract
- crack

#### Lysergic line
- amino acid
- tryptophan solution
- waste biomass
- ergotamine
- hydrochloric acid
- sulfur compound
- acylating agent
- lysergic acid
- activated lysergic acid
- LSD

#### Utility and world fluids
- ammoniac
- blood
- coal tar

### Drinkable fluids

The uploaded code and resources clearly mark some fluids as drinkable:

- raw alcohol
- vodka
- LSD

## Gases

The gas system has its own:

- `GasType`
- `GasStack`
- `GasTank`
- gas capability system
- gas containers
- gas transfer utilities

### Registered gases

| Gas | Toxic | Flammable |
| --- | --- | --- |
| Chlorine | Yes | No |
| Hydrochloric Gas | Yes | No |
| Sulfur Oxide | Yes | No |
| Sulfur Gas | Yes | No |
| Air | No | No |

## Gas hardware

The current snapshot includes dedicated gas infrastructure:

- **[Gas Tank](machines.md#gas-tank)**
- **[Gas Pump](machines.md#gas-pump)**
- portable gas tank item support
- gas output from the **[Gasifier](machines.md#gasifier)**
- gas consumption in the **[Chemical Reactor](machines.md#chemical-reactor)** and **[Advanced Mixing Vat](machines.md#advanced-mixing-vat)**

## Snapshot note

There is a visible naming drift between some resources and code. The most obvious example is the `sulfur_oxide` gas, where some assets still carry older `reactive` wording. The implementation is still understandable, but the names should be unified before a polished public release.
