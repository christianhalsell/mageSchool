/* BATTLE */

function actionBar() {		
	// Check Fire
	if (spellLevel1Select === 'spellbookFire1') {
		$('button#spellBarLevel1').removeClass().addClass('level1FireSelected');
	}

	if (spellLevel2Select === 'spellbookFire2') {
		$('button#spellBarLevel2').removeClass().addClass('level2FireSelected');
	}

	if (spellLevel3Select === 'spellbookFire3') {
		$('button#spellBarLevel3').removeClass().addClass('level3FireSelected');
	}

	// Check Wood
	if (spellLevel1Select === 'spellbookWood1') {
		$('button#spellBarLevel1').removeClass().addClass('level1WoodSelected');
	}

	if (spellLevel2Select === 'spellbookWood2') {
		$('button#spellBarLevel2').removeClass().addClass('level2WoodSelected');
	}

	if (spellLevel3Select === 'spellbookWood3') {
		$('button#spellBarLevel3').removeClass().addClass('level3WoodSelected');
	}

	// Check Water
	if (spellLevel1Select === 'spellbookWater1') {
		$('button#spellBarLevel1').removeClass().addClass('level1WaterSelected');
	}

	if (spellLevel2Select === 'spellbookWater2') {
		$('button#spellBarLevel2').removeClass().addClass('level2WaterSelected');
	}

	if (spellLevel3Select === 'spellbookWater3') {
		$('button#spellBarLevel3').removeClass().addClass('level3WaterSelected');
	}

	// Check Metal
	if (spellLevel1Select === 'spellbookMetal1') {
		$('button#spellBarLevel1').removeClass().addClass('level1MetalSelected');
	}

	if (spellLevel2Select === 'spellbookMetal2') {
		$('button#spellBarLevel2').removeClass().addClass('level2MetalSelected');
	}

	if (spellLevel3Select === 'spellbookMetal3') {
		$('button#spellBarLevel3').removeClass().addClass('level3MetalSelected');
	}

	// Check Earth
	if (spellLevel1Select === 'spellbookEarth1') {
		$('button#spellBarLevel1').removeClass().addClass('level1EarthSelected');
	}

	if (spellLevel2Select === 'spellbookEarth2') {
		$('button#spellBarLevel2').removeClass().addClass('level2EarthSelected');
	}

	if (spellLevel3Select === 'spellbookEarth3') {
		$('button#spellBarLevel3').removeClass().addClass('level3EarthSelected');
	}
}

actionBar();