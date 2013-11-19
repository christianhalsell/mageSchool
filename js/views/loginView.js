APP.LoginView = Backbone.View.extend ({
    tagName: "div",
    className: "logIn",
    template: _.template("<form><label>Name:</label><br><input type='text' name='name'><br><br><label>Email:</label><br><input type='text' name='email'><br><input type='submit' value='submit' class='submit'></form>"),

    events: {
    	"click .submit" : "save"
    },

    save: function(e) {
    	e.preventDefault();

    	var storedValueOfName = ;
    	var storedValueOfEmail = ;
    	//get and store name
    	//get and store email
    	this.model.save({"name":storedValueOfName, "email": storedValueOfEmail});
    	console.log(this.model)
    	//backbone.history.navigate("/wherever you want")
    },

    render: function(e){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;

		console.log("success in rendering login view!");
    }
});