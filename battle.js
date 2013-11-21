/* BATTLE */

// Display player and mage data

function Player(hp, baseHp, spell1, spell1Damage, spell2, spell2Damage, spell3, spell3Damage) {
	this.hp = hp;
	this.baseHp = baseHp;
	this.spell1 = spell1;
	this.spell1Damage = spell1Damage;
	this.spell2 = spell2;
	this.spell2Damage = spell2Damage;
	this.spell3 = spell3;
	this.spell3Damage = spell3Damage;
}


var level1List = ['fire1','wood1','water1','metal1','earth1'];
var level2List = ['fire2','wood2','water2','metal2','earth2'];
var level3List = ['fire3','wood3','water3','metal3','earth3'];

var level1ListRandom = Math.floor(Math.random()* 5);
var level2ListRandom = Math.floor(Math.random()* 5);
var level3ListRandom = Math.floor(Math.random()* 5);

var enemySpell1 = level1List[level1ListRandom];
var enemySpell2 = level2List[level2ListRandom];
var enemySpell3 = level3List[level3ListRandom];

var hero = new Player(100, 100, spellLevel1Select, 10, spellLevel2Select, 20, spellLevel3Select, 30);
var enemy = new Player(100, 100, enemySpell1, 10, enemySpell2, 20, enemySpell3, 30);

$("#battleDisplay").append("Player\'s first spell is " + hero.spell1 + ".<br>");
$("#battleDisplay").append("Player\'s second spell is " + hero.spell2 + ".<br>");
$("#battleDisplay").append("Player\'s third spell is " + hero.spell3 + ".<br><br>");

$("#battleDisplay").append("Enemy\'s first spell is " + enemy.spell1 + ".<br>");
$("#battleDisplay").append("Enemy\'s second spell is " + enemy.spell2 + ".<br>");
$("#battleDisplay").append("Enemy\'s third spell is " + enemy.spell3 + ".<br>");

// console.log("Player\'s first spell is " + hero.spell1 + ".");
// console.log("Player\'s second spell is " + hero.spell2 + ".");
// console.log("Player\'s third spell is " + hero.spell3 + ".");
// console.log("");
// console.log("Enemy\'s first spell is " + enemy.spell1 + ".");
// console.log("Enemy\'s second spell is " + enemy.spell2 + ".");
// console.log("Enemy\'s third spell is " + enemy.spell3 + ".");

// Let's rumble
var battle = function() {

	$('#player1HPBar').css('width', "100%");

	$('#spellBarLevel1').click(function() {
		hero.hp = hero.hp - enemy.spell1Damage;
		var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
		$('#player1HPBar').css('width', percentWidth);
		alert("Yeah, baby!");
	});


};

battle();