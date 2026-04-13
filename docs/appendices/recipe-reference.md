# Recipe reference

| Recipe file | Type / machine | Summary |
| --- | --- | --- |
| advanced_furnace/coal_tar.json | advanced_furnace | **input_a** `minecraft:coal` → **result_a** id=`minecraft:cobblestone`, count=1; **fluid_output** `mydrugs:coal_tar` |
| advanced_furnace/starch_mash.json | advanced_furnace | **input_a** `minecraft:potato` → **result_a** id=`minecraft:baked_potato`, count=1; **fluid_output** `mydrugs:starch_mash` |
| advanced_furnace.json | Crafting recipe | → `mydrugs:advanced_furnace` |
| advanced_mixing_vat/chemical_compound.json | advanced_mixing_vat | **fluid_inputs** fluid=`minecraft:water`, amount=750; **gas_input** gas=`mydrugs:sulfur_oxide`, amount=250 → **output** fluid=`mydrugs:sulfur_compound`, amount=1000 |
| advanced_mixing_vat/crack.json | advanced_mixing_vat | **fluid_inputs** fluid=`minecraft:water`, amount=250; fluid=`mydrugs:ammoniac`, amount=250 → **output** fluid=`mydrugs:crack`, amount=550 |
| advanced_mixing_vat/hydrochloric_acid.json | advanced_mixing_vat | **fluid_inputs** fluid=`minecraft:water`, amount=750; **gas_input** gas=`mydrugs:hydrochloric`, amount=250 → **output** fluid=`mydrugs:hydrochloric_acid`, amount=1000 |
| advanced_mixing_vat/lysergic_acid.json | advanced_mixing_vat | **fluid_inputs** fluid=`mydrugs:ergotamine`, amount=750; fluid=`mydrugs:hydrochloric_acid`, amount=750; fluid=`minecraft:water`, amount=750 → **output** fluid=`mydrugs:lysergic_acid`, amount=1000 |
| bang.json | Crafting recipe | → `mydrugs:bang` |
| biochemical_reactor/ergotamine.json | biochemical_reactor | **ergot** ingredient=`mydrugs:ergot`, count=2; **tryptophan** ingredient=`mydrugs:tryptophan`, count=1 → **fluid_output** fluid=`mydrugs:ergotamine`, amount=500 |
| centrifuge/tryptophan.json | centrifuge | **input** fluid=`mydrugs:amino_acid`, amount=1000 → **output_1** fluid=`mydrugs:tryptophan`, amount=50; **output_2** fluid=`mydrugs:waste_biomass`, amount=950 |
| chemical_reactor/hydrochloric_gas.json | chemical_reactor | **primary_gas** gas=`mydrugs:air`, amount=250; **secondary_gas** gas=`mydrugs:chlorine`, amount=250 → **output_kind** `gas`; **output_id** `mydrugs:hydrochloric`; **output_amount** 400 |
| chemical_reactor/reactive_gas.json | chemical_reactor | **primary_gas** gas=`mydrugs:air`, amount=250; **secondary_gas** gas=`mydrugs:sulfur`, amount=250 → **output_kind** `gas`; **output_id** `mydrugs:sulfur_oxide`; **output_amount** 400 |
| cupboard_piece.json | Crafting recipe | → `mydrugs:cupboard_piece` |
| distilling/fermented_mash.json | distiller | **input** fluid=`mydrugs:fermented_mash`, amount=1000 → **output_1** fluid=`mydrugs:raw_alcohol`, amount=700; **output_2** fluid=`minecraft:water`, amount=300 |
| dryer.json | Crafting recipe | → `mydrugs:dryer` |
| drying/coca_leaf.json | drying | **ingredient** `mydrugs:coca_leaf` → **result** id=`mydrugs:dried_coca_leaf`, count=1 |
| drying/cured_cannabis_leaf.json | drying | **ingredient** `mydrugs:cannabis_leaf` → **result** id=`mydrugs:cured_cannabis_leaf`, count=1 |
| drying/dried_kelp_from_kelp.json | drying | **ingredient** `minecraft:kelp` → **result** id=`minecraft:dried_kelp`, count=1 |
| drying/tobacco_leaf.json | drying | **ingredient** `mydrugs:tobacco_leaf` → **result** id=`mydrugs:dried_tobacco_leaf`, count=1 |
| evaporation_tray/crack_plate.json | evaporation_tray | **input_fluid** `mydrugs:crack`; **input_amount** 1000 → **result** id=`mydrugs:crack_plate`, count=1 |
| evaporation_tray/evaporate_water.json | evaporation_tray | **input_fluid** `minecraft:water`; **input_amount** 1000 → **result** id=`minecraft:clay_ball`, count=1 |
| evaporation_tray/filtered_extract.json | evaporation_tray | **input_fluid** `mydrugs:filtered_extract`; **input_amount** 1000 → **result** id=`mydrugs:cocaine_plate`, count=1 |
| evaporation_tray/tryptophan.json | evaporation_tray | **input_fluid** `mydrugs:tryptophan`; **input_amount** 1000 → **result** id=`mydrugs:tryptophan`, count=4 |
| filter.json | Crafting recipe | → `mydrugs:filter` ×4 |
| fluid_filter.json | Crafting recipe | → `mydrugs:filter` |
| fluid_filtering/filtered_extract.json | fluid_filtering | **input** fluid=`mydrugs:murky_extract`, amount=1000 → **output_1** fluid=`mydrugs:filtered_extract`, amount=850; **output_item** item=`mydrugs:plant_waste`, count=1 |
| gasifier/chlorine.json | gasifier | **input** `mydrugs:salt_powder` → **gas_output** `mydrugs:chlorine` |
| gasifier/sulfur_gas.json | gasifier | **input** `mydrugs:sulfur_powder` → **gas_output** `mydrugs:sulfur` |
| glass_bottle.json | Crafting recipe | → `mydrugs:glass_bottle` |
| grinding/cocaine.json | grinding | **ingredient** `mydrugs:cocaine_plate` → **result** id=`mydrugs:cocaine_dust`, count=6 |
| grinding/crack.json | grinding | **ingredient** `mydrugs:crack_plate` → **result** id=`mydrugs:crack_shard`, count=3 |
| grinding/dried_cannabis_leaf.json | grinding | **ingredient** `mydrugs:dried_cannabis_leaf` → **result** id=`mydrugs:cannabis_powder`, count=2 |
| grinding/dried_coca_leaf.json | grinding | **ingredient** `mydrugs:dried_coca_leaf` → **result** id=`mydrugs:coca_paste`, count=1 |
| grinding/magic_mushroom.json | grinding | **ingredient** `mydrugs:magic_mushroom` → **result** id=`mydrugs:magic_mushroom_powder`, count=2 |
| grinding/malt.json | grinding | **ingredient** `mydrugs:malt` → **result** id=`mydrugs:malt_powder`, count=2 |
| grinding/meth_shard.json | grinding | **ingredient** `mydrugs:meth_shard` → **result** id=`mydrugs:meth_powder`, count=2 |
| grinding/plant_biomass.json | grinding | **ingredient** `minecraft:wheat_seeds` → **result** id=`mydrugs:plant_biomass`, count=1 |
| grinding/tobacco.json | grinding | **ingredient** `mydrugs:dried_tobacco_leaf` → **result** id=`mydrugs:tobacco_handful`, count=2 |
| grinding/wheat.json | grinding | **ingredient** `minecraft:wheat` → **result** id=`mydrugs:flour`, count=2 |
| grinding_bowl.json | Crafting recipe | → `mydrugs:grinding_bowl` |
| grinding_tool.json | Crafting recipe | → `mydrugs:grinding_tool` |
| growth_chamber/ergot.json | growth_chamber | **input** item=`mydrugs:fungal_culture`, count=1; **biomass_input** item=`mydrugs:rye_seeds`, count=1 → **middle_result** item=`mydrugs:infected_rye`, count=1; **final_result** item=`mydrugs:ergot`, count=4 |
| growth_chamber/fungal_culture.json | growth_chamber | **input** item=`mydrugs:ergot`, count=1; **biomass_input** item=`mydrugs:plant_biomass`, count=1 → **middle_result** item=`mydrugs:fungal_fiber`, count=1; **final_result** item=`mydrugs:fungal_culture`, count=1 |
| hash_piece.json | Crafting recipe | → `mydrugs:hash_piece` ×16 |
| headphones.json | Crafting recipe | → `mydrugs:headphones` |
| mixing_vat/activated_lysergic_acid.json | mixing_vat | **fluid_input_1** fluid=`mydrugs:lysergic_acid`, amount=100; **fluid_input_2** fluid=`mydrugs:acylating_agent`, amount=50 → **result_fluid** fluid=`mydrugs:activated_lysergic_acid`, amount=150 |
| mixing_vat/acylating_agent.json | mixing_vat | **fluid_input_1** fluid=`mydrugs:sulfur_compound`, amount=100; **fluid_input_2** fluid=`mydrugs:hydrochloric_acid`, amount=100 → **result_fluid** fluid=`mydrugs:acylating_agent`, amount=200 |
| mixing_vat/amino_acid.json | mixing_vat | **item_1** `mydrugs:plant_biomass`; **item_2** `mydrugs:malt`; **fluid_input_1** fluid=`minecraft:water`, amount=150 → **result_fluid** fluid=`mydrugs:amino_acid`, amount=200 |
| mixing_vat/diethylamine.json | mixing_vat | **fluid_input_1** fluid=`mydrugs:raw_alcohol`, amount=500; **fluid_input_2** fluid=`mydrugs:ammoniac`, amount=300 → **result_fluid** fluid=`mydrugs:diethylamine`, amount=800 |
| mixing_vat/fermented_mash.json | mixing_vat | **fluid_input_1** fluid=`mydrugs:sweet_mash`, amount=100; **fluid_input_2** fluid=`mydrugs:wild_yeast`, amount=100 → **result_fluid** fluid=`mydrugs:fermented_mash`, amount=200 |
| mixing_vat/lsd.json | mixing_vat | **fluid_input_1** fluid=`mydrugs:activated_lysergic_acid`, amount=1000; **fluid_input_2** fluid=`mydrugs:diethylamine`, amount=500 → **result_fluid** fluid=`mydrugs:lsd`, amount=1500 |
| mixing_vat/murky_extract.json | mixing_vat | **item_1** `mydrugs:coca_paste`; **fluid_input_1** fluid=`mydrugs:raw_alcohol`, amount=100 → **result_fluid** fluid=`mydrugs:murky_extract`, amount=150 |
| mixing_vat/sweet_mash.json | mixing_vat | **item_1** `mydrugs:malt_powder`; **fluid_input_1** fluid=`mydrugs:starch_mash`, amount=100 → **result_fluid** fluid=`mydrugs:sweet_mash`, amount=200 |
| mixing_vat/wild_yeast.json | mixing_vat | **item_1** `mydrugs:flour`; **fluid_input_1** fluid=`minecraft:water`, amount=100 → **result_fluid** fluid=`mydrugs:wild_yeast`, amount=150 |
| mixing_vat.json | Crafting recipe | → `mydrugs:mixing_vat` |
| personal_diary.json | Crafting recipe | → `mydrugs:personal_diary` |
| roller.json | Crafting recipe | → `mydrugs:roller` |
| sieve.json | Crafting recipe | → `mydrugs:sieve` |
| sieving/cannabis_resin.json | sieving | **ingredient** `mydrugs:cured_cannabis_leaf` → **result** id=`mydrugs:dried_cannabis_leaf`, count=1; **bonus_result** id=`mydrugs:cannabis_resin`, count=1 |
| sieving/flint_from_gravel_sieving.json | sieving | **ingredient** `minecraft:gravel` → **result** id=`minecraft:flint`, count=1; **bonus_result** id=`minecraft:iron_nugget`, count=1 |
| stomp_crafting/hash_brick.json | stomp_crafting | **ingredients** ingredient=`mydrugs:cannabis_resin`, count=10 → **result** id=`mydrugs:hash_brick`, count=1 |
