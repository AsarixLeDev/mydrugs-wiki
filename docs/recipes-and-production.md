# Recipes and production chains

This page explains the main gameplay chains revealed by the uploaded recipe JSONs.

## Alcohol chain

1. **Potato** in the advanced furnace produces **baked potato** + **starch mash**.
2. **Malt** is ground into **malt powder**.
3. **Malt powder + starch mash** in the mixing vat becomes **sweet mash**.
4. **Flour + water** in the mixing vat becomes **wild yeast**.
5. **Sweet mash + wild yeast** in the mixing vat becomes **fermented mash**.
6. **Fermented mash** in the distiller becomes **raw alcohol** + water.

`vodka` exists as a registered drinkable fluid, but the uploaded recipe snapshot does not include a dedicated conversion recipe for it.

## Tobacco chain

1. Grow **tobacco**.
2. Dry **tobacco leaf** into **dried tobacco leaf**.
3. Grind it into **tobacco handful**.
4. Use the **roller** with paper + filter + three ingredients to create cigarettes or mixed joints.

## Cannabis / hash chain

1. Grow **cannabis**.
2. Dry or cure the leaf.
3. Sieve **cured cannabis leaf** into **dried cannabis leaf** with a chance at **cannabis resin**.
4. Grind dried leaf into **cannabis powder**.
5. Compress **10 cannabis resin** in the stomp crafter into a **hash brick**.
6. Split the brick into **16 hash pieces**.

## Cocaine / crack chain

1. Dry **coca leaf** into **dried coca leaf**.
2. Grind it into **coca paste**.
3. Mix **coca paste + raw alcohol** in the mixing vat to produce **murky extract**.
4. Filter murky extract in the **fluid filterer** into **filtered extract** + plant waste.
5. Evaporate filtered extract into a **cocaine plate**.
6. Grind the plate into **cocaine dust**.
7. In the advanced mixing vat, combine **cocaine dust + water + ammoniac** to produce **crack fluid**.
8. Evaporate that fluid into a **crack plate**.
9. Grind the plate into **crack shards**.

## LSD chain

This is the longest chain in the current snapshot.

### Biomass / fungal foundation

1. Grind **wheat seeds** into **plant biomass**.
2. Growth chamber: **ergot + plant biomass + water** → fungal culture path.
3. Growth chamber: **fungal culture + rye seeds + water** → ergot path.

### Amino / tryptophan line

4. Mixing vat: **plant biomass + malt + water** → **amino acid** fluid.
5. Centrifuge: **amino acid** → **tryptophan** + **waste biomass**.
6. Evaporation tray: **tryptophan fluid** → **tryptophan powder**.

### Acid / gas chemistry line

7. Gasifier: **salt powder** → **chlorine gas**.
8. Chemical reactor: **air + chlorine** → **hydrochloric gas**.
9. Advanced mixing vat: **water + hydrochloric gas** → **hydrochloric acid**.
10. Gasifier: **sulfur powder** → **sulfur gas**.
11. Chemical reactor: **air + sulfur gas** → code-side `sulfur_oxide` gas.
12. Advanced mixing vat: **water + sulfur_oxide gas** → **sulfur compound**.
13. Mixing vat: **sulfur compound + hydrochloric acid** → **acylating agent**.

### Final biochemical synthesis

14. Biochemical reactor: **ergot + tryptophan** with heat → **ergotamine**.
15. Advanced mixing vat: **ergotamine + hydrochloric acid + water** → **lysergic acid**.
16. Mixing vat: **lysergic acid + acylating agent** → **activated lysergic acid**.
17. Mixing vat: **raw alcohol + ammoniac** → **diethylamine**.
18. Mixing vat: **activated lysergic acid + diethylamine** → **LSD fluid**.

## Utility and crafting recipes

The regular crafting recipe set also includes foundational items and stations such as:

- advanced furnace
- dryer
- sieve
- roller
- glass bottle
- headphones
- personal diary
- filters and grinding tools

Use the appendix for a file-by-file recipe reference.
