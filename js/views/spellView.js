APP.SpellView = Backbone.View.extend ({
    tagName: "ul",
    className: "spellList",

    render: function(){
        this.collection.each(function(model){
			var spellIndividualView = new APP.SpellIndividualView({
				model: model
			});

			this.$el.append(spellIndividualView.render().el);
        }, this);
        
        return this;
    }
});