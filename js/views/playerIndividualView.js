APP.PlayerIndividualView = Backbone.View.extend ({
    tagName: "li",
    template: _.template("<h3><%= name %> </h3>	<p><%= email %> </p> <p>Wins: <%= wins %></p> <p>Losses: <%= losses %></p>"),

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});