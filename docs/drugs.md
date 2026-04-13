# Drugs

The mod does not hard-code every consumable as a one-off item. Instead, it uses a shared drug framework and multiple delivery methods.

## Core model

Each drug in code is defined by:

- a `DrugId`
- a `DrugCategory`
- one or more `DrugEffect`s
- an addiction rate

A drug can then be attached to many different items or fluids.

## Effect types

The effect layer is flexible enough to mix several output styles:

- vanilla mob effects such as nausea and slowness
- client shader effects
- sound-driven effects such as heartbeat or whispers

That is why different consumables can still feel like they belong to the same internal system.

## Consumption strategies

The same drug can behave differently depending on how it is taken. The current code defines strategies for:

- eating
- smoking
- sniffing
- injecting

That means the item class is often just a delivery wrapper around a shared `DrugModel`.

## Drugs clearly surfaced in the current snapshot

| Drug | Category | Current examples | Notes |
| --- | --- | --- | --- |
| WEED | Cannabinoid | cannabis powder, joints, space foods | also tied to fog-style presentation |
| HASH | Cannabinoid | hash piece / hash brick line | related to cannabis resin processing |
| TOBACCO | Nicotinic | tobacco handful, cigarettes, mixed rolls | primarily tied to smoking items |
| METH | Stimulant | meth shard, meth powder | strong stimulant-side presentation |
| COCAINE | Stimulant | cocaine dust | late in the coca extraction chain |
| CRACK | Stimulant | crack shard | advanced branch from cocaine dust |
| LSD | Psychedelic | LSD drop, LSD fluid, LSD bottle asset line | produced through the lysergic chemistry route |
| MUSHROOMS | Psychedelic | magic mushroom, magic mushroom powder | also tied to worldgen content |
| ALCOHOL | Depressant | raw alcohol, vodka | represented mainly through drinkable fluids |

## Drugs present in code but not yet strongly surfaced in the uploaded recipe set

The registry also includes several IDs that look framework-ready or future-facing, such as:

- MDMA
- DMT
- SALVIA
- HEROIN
- MORPHINE
- FENTANYL
- KETAMINE
- PCP
- DXM
- BENZODIAZEPINE
- BARBITURATE
- COFFEE
- NITROUS_OXIDE

These are real code-level entries, but the current snapshot does not expose them as clearly as the drugs listed above.

## How items enter the system

At runtime, drug items and drinkable fluids resolve one or more `DrugModel`s, pass them through the shared `DrugService`, and then separately increment addiction through the addiction manager.

That split matters, because it lets the mod support:

- powders, shards, drops, and mushrooms
- rolled products like joints and cigarettes
- fluid-based delivery through bottles
- syringe-based systems
- future content without rewriting the whole effect stack
