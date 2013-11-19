// The class to set-up the spells used
APP.Spell = Backbone.Model.extend({
        defaults: {
                id: null,
                name: null,
                spellLevel: 1,
                discipline: null,
                damage: null,
                cooldown: null,
                icon: null
        }
})