APP.SpellIndividualView = Backbone.View.extend ({
    tagName: "li",
    template: _.template("<h3><%= name %> </h3><p>Spell Level: <%= spellLevel %></p><p>Discipline: <%= discipline %></p><div style='width: 96px; height:64px; overflow:hidden; margin-bottom:20px'><img src='<%= icon %>'></div>"),

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});