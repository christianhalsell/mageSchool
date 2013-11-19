// The class to set-up the spells used
APP.Player = Backbone.Model.extend({
        urlRoot: "/players",
	defaults: {
        	id: null,
                name: null,
                email: null,
                spellLevel1: null,
                spellLevel2: null,
                spellLevel3: null,
                wins: 0,
                losses: 0
	}
});