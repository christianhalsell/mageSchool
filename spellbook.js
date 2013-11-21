/* SPELLBOOK */
var spellLevel1Select = "";
var spellLevel2Select = "";
var spellLevel3Select = "";


function spellbookSelect() {
	$('.spellCol button').click(function() {
		var tempTypeLevel = $(this).attr('id');
		
		// Check Fire
		if (tempTypeLevel === 'spellbookFire1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1FireSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookFire2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2FireSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookFire3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3FireSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Wood
		if (tempTypeLevel === 'spellbookWood1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1WoodSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookWood2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WoodSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookWood3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WoodSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Water
		if (tempTypeLevel === 'spellbookWater1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1WaterSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookWater2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WaterSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookWater3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WaterSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Metal
		if (tempTypeLevel === 'spellbookMetal1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1MetalSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookMetal2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2MetalSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookMetal3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3MetalSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Earth
		if (tempTypeLevel === 'spellbookEarth1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1EarthSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookEarth2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2EarthSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'spellbookEarth3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3EarthSelected');
			spellLevel3Select = tempTypeLevel;
		}

		$(this).addClass("selected");
		console.log("Spell Level 1: " + spellLevel1Select);
		console.log("Spell Level 2: " + spellLevel2Select);
		console.log("Spell Level 3: " + spellLevel3Select);
		console.log("");
	});
}

spellbookSelect();