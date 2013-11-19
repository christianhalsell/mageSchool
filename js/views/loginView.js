APP.LoginView = Backbone.View.extend ({
    tagName: "div",
    className: "logIn",
    template: _.template("<div id='logIn'><form><label>Name:</label><br><input type='text' name='name' id='inputName'><br><br><label>Email:</label><br><input type='text' name='email' id='inputEmail'><br><input type='submit' value='submit' class='submit'></form></div>"),

    events: {
    	"click .submit" : "save"
    },

    save: function(e) {
    	e.preventDefault();

    	var storedValueOfName = $('#inputName').val(); // get and store name
    	var storedValueOfEmail = $('#inputEmail').val(); // get and store email
    	
    	this.model.save({"name":storedValueOfName, "email": storedValueOfEmail});
    	console.log(this.model);
    	Backbone.history.navigate("/players", {trigger: true})
    },

    render: function(e){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;

		console.log("success in rendering login view!");
    }
});