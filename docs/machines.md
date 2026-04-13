# Machines

This page documents the block-based stations, processors, and gas hardware present in the uploaded snapshot.

The structure of each entry is intentionally practical:

- what the block is for
- how to obtain it in the current snapshot
- how to use it in-game
- the current recipes or role that justify its existence

!!! note
    If an **Obtaining** section is empty, the uploaded snapshot contains no crafting recipe or survival obtain path for that machine yet.

## Mortar

The **Mortar** is the block registered as `mydrugs:grinding_bowl`. It is the earliest manual processor in the current snapshot and pairs with the **Pestle** item.

### Obtaining

#### Crafting

| Ingredients | Pattern |
| --- | --- |
| Brick ×5 | `A A`<br>`AAA` |

### Usage

Right-click the Mortar with a valid input item to place **one** ingredient into it. Then use the **Pestle** on the block to add manual grinding progress. When the recipe completes, the stored stack turns into the result stack. Right-click the block with an empty hand to take the contents back out.

The current grinding recipes include:

- wheat → flour
- dried tobacco leaf → tobacco handful
- dried cannabis leaf → cannabis powder
- dried coca leaf → coca paste
- malt → malt powder
- magic mushroom → magic mushroom powder
- cocaine plate → cocaine dust
- crack plate → crack shard
- meth shard → meth powder
- wheat seeds → plant biomass

### Data values

- Block ID: `mydrugs:grinding_bowl`

---

## Stomp Crafter

The **Stomp Crafter** is a physical recipe station that turns stomping into machine work.

### Obtaining

### Usage

Accepted ingredients are inserted by right-clicking the block with matching items. The crafter only accepts partial combinations that could still become a valid stomp-crafting recipe. Once loaded, the player must **fall onto the block** to add work. Bigger falls add more progress. When enough work is accumulated, the result is spawned above the block.

At the moment, the uploaded recipe set contains one stomp recipe:

- 10 × cannabis resin → hash brick

### Data values

- Block ID: `mydrugs:stomp_crafter`

---

## Advanced Furnace

The **Advanced Furnace** is a furnace-like machine that combines item processing with a fluid byproduct tank.

### Obtaining

#### Crafting

| Ingredients | Pattern |
| --- | --- |
| Iron Ingot ×4, Glass Bottle ×4, Furnace ×1 | `ABA`<br>`BCB`<br>`ABA` |

### Usage

Open the GUI with an empty hand. The machine has:

- two input slots
- one fuel slot
- two item output slots
- one fluid output tank
- one output container slot for bottling or bucketing the fluid result

The machine burns ordinary furnace fuels. In code it can process both:

- custom **advanced furnace** recipes
- normal vanilla smelting recipes

The custom recipes currently visible in the uploaded resources are:

- coal → cobblestone + 100 mB coal tar
- potato → baked potato + 100 mB starch mash

That makes the block a bridge between normal furnace behavior and the mod’s fluid chemistry line.

### Data values

- Block ID: `mydrugs:advanced_furnace`

---

## Distiller

The **Distiller** separates one input fluid into two output fluids.

### Obtaining

### Usage

Right-click the block with a fluid container to load the input tank, or open the menu with an empty hand. The Distiller has:

- one input container slot
- two output container slots
- one input tank
- two output tanks

Processing is **manual-speed driven**. Pressing the run button adds recent click timestamps; the machine calculates clicks per second from those presses and only gains useful progress once the click rate rises above the built-in threshold. The faster the clicking, the faster the batch runs.

The current snapshot contains one distilling recipe:

- 1000 mB fermented mash → 700 mB raw alcohol + 300 mB water

### Data values

- Block ID: `mydrugs:distiller`

---

## Mixing Vat

The **Mixing Vat** is the main hand-operated fluid-and-item mixer in the early and mid game.

### Obtaining

#### Crafting

| Ingredients | Pattern |
| --- | --- |
| Iron Ingot ×8, Stick ×1 | `A A`<br>`ABA`<br>`AAA` |

### Usage

The block accepts:

- up to four item types
- up to two input fluids
- one pending result item or result fluid

Right-click with items to add them. Right-click with a fluid container to insert or extract fluids. Right-click with an empty hand to interact in the following order:

1. take a finished result item, if one is present
2. otherwise add one **stir**
3. otherwise pull the most recently stored ingredient item back out

Recipes do not advance over time. They advance by **stir count**. Each matching recipe defines how many stirs are required before the contents are consumed and the result is created.

The current recipe set includes:

- flour + water → wild yeast
- malt powder + starch mash → sweet mash
- sweet mash + wild yeast → fermented mash
- coca paste + raw alcohol → murky extract
- plant biomass + malt + water → amino acid
- raw alcohol + ammoniac → diethylamine
- sulfur compound + hydrochloric acid → acylating agent
- lysergic acid + acylating agent → activated lysergic acid
- activated lysergic acid + diethylamine → LSD

### Data values

- Block ID: `mydrugs:mixing_vat`

---

## Fluid Filterer

The **Fluid Filterer** turns one dirty or intermediate fluid into a cleaner fluid plus residue.

### Obtaining

### Usage

Open the machine GUI with an empty hand. The machine has:

- one input fluid container slot
- one output fluid container slot
- one filter slot
- one residue slot
- one input tank
- one output tank

The current implementation is **button-held manual work**. The block watches whether the run button is being held, then consumes progress while the player can afford the recipe’s hunger cost. In other words, filtering is not only a machine action; it also costs player stamina.

The only uploaded fluid filtering recipe is:

- 1000 mB murky extract → 850 mB filtered extract + 1 plant waste  
  requires 14 clicks of progress and 1 hunger per tick of active work

A filter item is required in the dedicated filter slot.

### Data values

- Block ID: `mydrugs:fluid_filterer`

---

## Dryer

The **Dryer** is a simple passive rack with four independent slots.

### Obtaining

#### Crafting

| Ingredients | Pattern |
| --- | --- |
| Planks ×5, Stone ×1 | `ABA`<br>`AAA` |

### Usage

Each quarter of the top surface maps to one slot. Right-click a quadrant with a valid input item to insert a full stack into that slot. Right-click the same quadrant with an empty hand to remove the stack.

Each slot dries independently over time. When a slot finishes, the full inserted stack is replaced by the full output stack.

Current drying recipes include:

- coca leaf → dried coca leaf
- cannabis leaf → cured cannabis leaf
- tobacco leaf → dried tobacco leaf
- kelp → dried kelp

### Data values

- Block ID: `mydrugs:dryer`

---

## Sieve

The **Sieve** is a manual shaking machine with one input, one main output, and one bonus output.

### Obtaining

#### Crafting

| Ingredients | Pattern |
| --- | --- |
| String ×3, Paper ×1, Leather ×1, Planks ×3 | `AAA`<br>`BCB`<br>`DDD` |

### Usage

Open the menu by right-clicking the block. Put a valid ingredient into the input slot. The recipe does not progress automatically. Instead, the block consumes **shake input** sent from the client through the sieve interaction system. When enough shake progress has been built up, the main output and optional bonus output are produced.

Current recipes include:

- cured cannabis leaf → dried cannabis leaf, with a 20% chance of cannabis resin
- gravel → flint, with a 15% chance of an iron nugget

### Data values

- Block ID: `mydrugs:sieve`

---

## Evaporation Tray

The **Evaporation Tray** is a one-fluid, one-result open-air processor.

### Obtaining

### Usage

Right-click the tray with a fluid container to load it. The tray stores one fluid type up to 4000 mB and begins processing automatically if a matching recipe exists. When the timer completes, the fluid is consumed and replaced by a visible result item that can be taken by hand.

Current recipes include:

- 1000 mB filtered extract → cocaine plate
- 1000 mB crack → crack plate
- 1000 mB tryptophan solution → 4 tryptophan powder
- 1000 mB water → clay ball

### Data values

- Block ID: `mydrugs:evaporation_tray`

---

## Centrifuge

The **Centrifuge** is a fuel-powered fluid separator with one input tank and two output tanks.

### Obtaining

### Usage

The machine accepts:

- one input fluid container slot
- two output fluid container slots
- one fuel slot

It consumes fuel to build burn time, then processes matching centrifuge recipes into two fluid outputs. The menu also includes dump controls for each tank.

The current uploaded recipe is:

- 1000 mB amino acid → 50 mB tryptophan solution + 950 mB waste biomass

### Data values

- Block ID: `mydrugs:centrifuge`

---

## Growth Chamber

The **Growth Chamber** is a two-stage biological processor with water support.

### Obtaining

### Usage

The Growth Chamber has five slots:

- water input container
- input slot
- biomass slot
- middle-result slot
- final-result slot

A matching recipe first produces a **middle result**, then advances through a second maturation stage into the final result. Water is consumed from the internal tank during the process.

The current uploaded recipes are:

- fungal culture + rye seeds + water → infected rye → ergot
- ergot + plant biomass + water → fungal fiber → fungal culture

### Data values

- Block ID: `mydrugs:growth_chamber`

---

## Gas Tank

The **Gas Tank** is the basic placeable storage block for the custom gas system.

### Obtaining

### Usage

The block stores up to **8000 units** of a single gas type. Its contents are preserved through the block’s data components, so a filled tank can be picked up and placed again without losing its gas.

This block is infrastructure rather than a processor. It is used to buffer or move gases for systems such as the Gas Pump, Gasifier, Chemical Reactor, and Advanced Mixing Vat.

### Data values

- Block ID: `mydrugs:gas_tank`

---

## Gas Pump

The **Gas Pump** is a directional transfer block for the custom gas system.

### Obtaining

### Usage

The pump reads gas from the side opposite its facing and pushes gas out through the facing side. If no gas source is present on the input side, the buffer can fill itself with **ambient air** instead. It transfers up to **250 units per tick** through its internal buffer.

This makes it useful both for:

- moving produced gases through a setup
- injecting ordinary air into recipes that require it

### Data values

- Block ID: `mydrugs:gas_pump`

---

## Gasifier

The **Gasifier** converts powder items into stored gas using fuel.

### Obtaining

### Usage

The Gasifier has three slots:

- input
- fuel
- export container

It burns furnace fuel, processes the input item, and stores the result in an internal gas tank. The export slot can automatically fill compatible gas containers.

Current recipes include:

- salt powder → chlorine gas
- sulfur powder → sulfur gas

### Data values

- Block ID: `mydrugs:gasifier`

---

## Chemical Reactor

The **Chemical Reactor** is the main heat-based gas reactor in the current snapshot.

### Obtaining

### Usage

The machine accepts:

- charcoal fuel
- a primary gas transfer container
- a secondary gas transfer container
- a secondary fluid transfer container
- a gas output transfer container
- a fluid output transfer container

Internally it tracks:

- primary gas tank
- secondary gas tank
- secondary fluid tank
- gas output tank
- fluid output tank
- heat and progress

The uploaded recipes are both gas-output reactions:

- air + chlorine → hydrochloric gas
- air + sulfur gas → sulfur oxide

Both recipes require a minimum heat level and drain heat while running, so the machine is positioned as a true reactor rather than a passive converter.

### Data values

- Block ID: `mydrugs:chemical_reactor`

---

## Advanced Mixing Vat

The **Advanced Mixing Vat** is the automatic multi-input counterpart to the hand-operated Mixing Vat.

### Obtaining

### Usage

The machine supports:

- four item recipe slots
- three fluid input tanks
- one fluid output tank
- one gas input tank
- dedicated transfer slots for all fluid and gas lines

Unlike the basic vat, this machine does not rely on manual stirring. Once the inputs match a recipe and the outputs have room, it processes automatically.

The current uploaded recipes include:

- water + sulfur oxide gas → sulfur compound
- water + hydrochloric gas → hydrochloric acid
- ergotamine + hydrochloric acid + water → lysergic acid
- cocaine dust + water + ammoniac → crack

### Data values

- Block ID: `mydrugs:advanced_mixing_vat`

---

## Biochemical Reactor

The **Biochemical Reactor** is a heat-and-manual-energy machine for ergotamine production.

### Obtaining

### Usage

The machine has four slots:

- ergot input
- tryptophan input
- charcoal slot
- output fluid container slot

Internally it tracks:

- a heat value built from charcoal and heat reserve
- a manual energy value that can be boosted by player interaction
- one fluid output tank

Recipe speed is affected by several factors:

- base speed
- current heat
- current manual energy
- ergot count, up to the recipe’s speed cap

The current uploaded recipe is:

- 2 ergot + 1 tryptophan powder → 500 mB ergotamine

Because the recipe has a **minimum heat**, a **manual boost factor**, and a **heat bonus factor**, this machine behaves more like an actively managed lab block than a passive crafter.

### Data values

- Block ID: `mydrugs:biochemical_reactor`
