# Technical Architecture

This page summarizes how the snapshot is organized internally.

## Mod entrypoint

`MyDrugs` registers the main systems:

- blocks
- items
- block entities
- menus and screens
- recipe types and serializers
- data components
- fluids
- sounds
- player addiction attachments
- worldgen hooks

It also initializes the shared drug service and the in-code drug registry.

## Content side vs player-state side

The codebase has two major halves:

### Content and production
- crops
- items
- containers
- machines
- fluids
- gases
- recipes
- worldgen

### Player-state and presentation
- drug registry
- effect adapter
- addiction manager
- withdrawal logic
- recovery systems
- shaders
- client sounds
- HUD feedback

## Data components

The item layer uses modern data components for state such as:

- bottle contents
- rolled contents
- blood sample data
- gas tank contents
- filled state flags

That is a major reason the custom items feel robust instead of ad hoc.

## Machine framework

The larger machines share a lot of infrastructure:

- synced item handlers
- synced fluid tanks
- gas handlers
- transfer-slot locking
- reusable menu and layout code
- machine sync helpers

So even though the mod has many processors, they are not all implemented from scratch.

## Snapshot caveats

A few details are visibly still in progress:

- some advanced machines have code and recipes but no obtaining recipe
- some names drift between code and assets
- the upload is strong on implementation detail but not necessarily on release polish

That makes this a very documentable snapshot: the systems are real, but some public-facing cleanup still remains.
