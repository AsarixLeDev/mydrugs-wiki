# Drugs

The mod uses an abstract drug system rather than hard-coding every item effect individually.

## Core model

Each drug is defined by:

- a `DrugId`
- a `DrugCategory`
- one or more `DrugEffect`s
- an addiction rate

The effect system is flexible enough to mix:

- vanilla-style effects such as nausea and slowness
- full-screen shader effects
- sound effects such as heartbeat audio

## Consumption strategies

The same drug model can behave differently depending on how it is taken. The codebase defines strategies for:

- eating
- smoking
- sniffing
- injecting

That means the item layer is mostly a delivery system on top of a shared drug registry.

## Drugs actively surfaced by the current content snapshot

| Drug | Category | Current gameplay presence | Effect highlights | Addiction rate |
| --- | --- | --- | --- | --- |
| WEED | CANNABINOID | Cannabis powder, joints, space foods | SLOWNESS, FOG | 2 |
| HASH | CANNABINOID | Hash pieces | FOG, SLOWNESS | 2.5 |
| TOBACCO | NICOTINIC | Tobacco handful, cigarette, rolled mixes | VOID_PULSE | 0.8 |
| METH | STIMULANT | Meth shard, meth powder | VOID_PULSE, NAUSEA, HEARTBEAT | 6 |
| COCAINE | STIMULANT | Cocaine dust | VOID_PULSE, HEARTBEAT | 6 |
| CRACK | STIMULANT | Crack shard | VOID_PULSE, NAUSEA, HEARTBEAT | 6 |
| LSD | PSYCHEDELIC | LSD drop, LSD fluid | ACID_WARP | 0 |
| MUSHROOMS | PSYCHEDELIC | Magic mushroom, magic mushroom powder | EVENT_HORIZON | 0 |
| ALCOHOL | DEPRESSANT | Raw alcohol, vodka via drinkable fluids | NAUSEA, DRUNK_VISION | default |

## Drugs defined in code but not clearly surfaced in this snapshot

The registry also defines several additional IDs that look like **future-facing or framework-ready content**, including:

- MDMA
- SALVIA
- DMT
- HEROIN
- MORPHINE
- FENTANYL
- OPIUM
- KETAMINE
- PCP
- DXM
- BENZODIAZEPINE
- BARBITURATE
- COFFEE
- NITROUS_OXIDE

Those are real `DrugId` entries with effect data in Java, but the uploaded snapshot does not surface them as clearly as the currently craftable items above.

## Item-facing behavior

Drug consumption enters the system through custom items and drinkable fluids. In practice:

- powder, shards, drops, mushrooms, cigarettes, joints, and bottles all resolve to one or more `DrugModel`s
- the `DrugService` applies the effects
- addiction is updated separately through category-based tracking

That split is why the mod can support both **present content** and **future content** cleanly.
