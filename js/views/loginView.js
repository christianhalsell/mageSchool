APP.LoginView = Backbone.View.extend ({
    tagName: "div",
    className: "logIn",
    template: _.template("<div id='spellbook'><div id='logIn' class='clearfix'><div class='labelWrap'><label>Name:</label><br><input type='text' name='name' id='inputName'></div><div class='labelWrap'><label>Email:</label><br><input type='text' name='email' id='inputEmail'></div></div><div id='spellColWrap' class='clearfix'><div class='spellCol fireBG'><h2>Fire</h2><button id='spellbookFire1' class='bookTypeFire bookLevel1'></button><h3>Fire 1</h3><button id='spellbookFire2' class='bookTypeFire bookLevel2'></button><h3>Fire 2</h3><button id='spellbookFire3' class='bookTypeFire bookLevel3'></button><h3>Fire 3</h3></div><div class='spellCol woodBG'><h2>Wood</h2><button id='spellbookWood1' class='bookTypeWood bookLevel1'></button><h3>Wood 1</h3><button id='spellbookWood2' class='bookTypeWood bookLevel2'></button><h3>Wood 2</h3><button id='spellbookWood3' class='bookTypeWood bookLevel3'></button><h3>Wood 3</h3></div><div class='spellCol waterBG'><h2>Water</h2><button id='spellbookWater1' class='bookTypeWater bookLevel1'></button><h3>Water 1</h3><button id='spellbookWater2' class='bookTypeWater bookLevel2'></button><h3>Water 2</h3><button id='spellbookWater3' class='bookTypeWater bookLevel3'></button><h3>Water 3</h3></div><div class='spellCol metalBG'><h2>Metal</h2><button id='spellbookMetal1' class='bookTypeMetal bookLevel1'></button><h3>Metal 1</h3><button id='spellbookMetal2' class='bookTypeMetal bookLevel2'></button><h3>Metal 2</h3><button id='spellbookMetal3' class='bookTypeMetal bookLevel3'></button><h3>Metal 3</h3></div><div class='spellCol earthBG'><h2>Earth</h2><button id='spellbookEarth1' class='bookTypeEarth bookLevel1'></button><h3>Earth 1</h3><button id='spellbookEarth2' class='bookTypeEarth bookLevel2'></button><h3>Earth 2</h3><button id='spellbookEarth3' class='bookTypeEarth bookLevel3'></button><h3>Earth 3</h3></div></div><div id='selectedSpellsWrap'><span id='spellSelected1' class='inactive'></span><span id='spellSelected2' class='inactive'></span><span id='spellSelected3' class='inactive'></span></div><button id='commitSpells' class='submit'>Commit</button></div><script src='/spellbook.js'></script>"),

    events: {
        "click .submit" : "save"
    },

    save: function(e) {
        e.preventDefault();

        var storedValueOfName = $('#inputName').val(); // get and store name
        var storedValueOfEmail = $('#inputEmail').val(); // get and store email
        var storedValueOfSpell1 = spellLevel1Select; // get and store spell1
        var storedValueOfSpell2 = spellLevel2Select; // get and store spell2
        var storedValueOfSpell3 = spellLevel3Select; // get and store spell3
        
        this.model.save({"name":storedValueOfName, "email": storedValueOfEmail, "spellLevel1": storedValueOfSpell1, "spellLevel2": storedValueOfSpell2, "spellLevel3": storedValueOfSpell3});
        console.log(this.model);
        Backbone.history.navigate("/battle", {trigger: true});
    },

    render: function(e){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});