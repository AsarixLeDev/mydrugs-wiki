# Items

The item layer is one of the most distinctive parts of the snapshot. It is not just a flat list of consumables; many items carry custom state through modern data components.

## Processing tools

### Pestle
Used with the **[Mortar](machines.md#mortar)** to advance grinding recipes manually.

### Rolling Gadget
A handheld rolling station with slots for paper, a filter, and up to three ingredients. It creates:

- cigarettes when all three ingredients are tobacco
- joints for other valid smoking mixtures

### Bang
A handheld smoking tool with a one-slot internal container.

### Portable Grinder
A single-slot handheld processor stored directly on the item through container components.

## Stateful containers

### Glass Bottle
A real fluid container with a 250 mB capacity. It can:

- store custom fluids
- display liquid color
- drink fluids that are marked drinkable
- interact with some world sources such as ammoniac collection
- fill and empty machine tanks

### Syringe
Stores blood-source data, blood amount, and visual fill state. It can draw blood from living entities and uses a custom `blood_draw` damage type.

### Gas Tank
The portable gas tank item preserves internal gas contents when moved, placed, or picked back up.

## Drug items

The snapshot exposes drugs through many different item forms:

- mushrooms and mushroom powder
- powders and shards
- joints and cigarettes
- LSD drops
- bottle-based drinkables
- space-food variants of vanilla food items

## Recovery items

The recovery side of the mod also has dedicated items:

- **Personal Diary**
- **Headphones**
- herbal tea
- calming mixture
- sleeping aid

These do not just provide flavor. They hook directly into stress, withdrawal, and recovery logic.

## Space foods

One of the most unusual systems in the codebase is the automatic generation of `space_...` variants for many vanilla foods. These are not just reskins. They are real items with custom overlay rendering and weed-linked consumption behavior.

## See also

For a complete ID-to-name list, see **[Item Reference](appendices/item-reference.md)**.

## Recipe visuals

Every craftable item and block from the uploaded snapshot is now exposed in **[Recipes & Production](recipes-and-production.md)** with a 9×9 visual recipe grid.
