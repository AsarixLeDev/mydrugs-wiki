# Items

The item layer is richer than a normal content mod because many items store **custom state** with data components.

## Key data components

The mod registers components for:

- `BOTTLE_CONTENT`
- `ROLLED_CONTENT`
- `BLOOD_SAMPLE`
- `BLOOD_AMOUNT`
- `GAS_TANK_CONTENTS`
- `FILLED`

That is what powers the mod’s dynamic containers and item-specific behavior.

## Bottles

The custom glass bottle is a real mini fluid container with **250 mB capacity**.

It can:

- hold tagged fluids
- show stored fluid and amount in the tooltip
- drink fluids whose fluid type is marked drinkable
- take a small ammoniac fill from a ready composter while sneaking

This is one of the mod’s most important bridge items because it turns the fluid system into direct player-use gameplay.

## Syringe

The syringe stores a blood sample and an amount value.

It can:

- draw blood from living targets
- store source identity and source name
- tint itself red when filled
- clear itself when shift-used while filled
- apply the custom `blood_draw` damage type

It excludes several entity types that logically should not provide a normal sample.

## Rolling system

The roller reads:

- paper
- a filter
- three rolling ingredients

From that it creates a `RolledDrugContent` payload.

- if all three ingredients are tobacco, the result is a **cigarette**
- otherwise the result is a **joint**

This makes rolled products composition-aware instead of being fixed one-item recipes.

## Handheld utility items

### Bang

The bang is a one-slot carrier item.

- shift-right-click opens its internal inventory
- normal use charges and consumes the loaded item
- loaded content must support smoking-style drug delivery

### Portable grinder

The portable grinder is another one-slot container item.

- if empty or holding an invalid item, it opens its UI
- if holding a grindable item, using it processes the recipe directly

Together these items give the mod a “portable station” design language.

## Gas tank

The gas tank item stores its own gas stack through `GAS_TANK_CONTENTS` and exposes a proper gas capability. Its current Java capacity is **8,000 units**.

## Space foods

A particularly unusual feature in this snapshot is the **space food** system.

The mod auto-generates variants for most vanilla foods that already have food and consumable components. These copies preserve the base item behavior, then layer drug consumption on top. In the current snapshot, the generated space foods use the weed drug model through an eating strategy.

## Reference pages

Use the appendices for complete item IDs and display names.
