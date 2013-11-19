APP.Router = Backbone.Router.extend({

	routes: {
		"login" : "loginRoute",
		"players": "playersRoute", // when the route localhost:3000/#players is hit, fire the function in the router called playerssRoute
		"spells" : "spellsRoute"
	},

	loginRoute: function() {
		APP.playerModel = new APP.Player();
			var loginView = new APP.LoginView({
				model: APP.playerModel
			});
			loginView.render();
			$(document.body).html(loginView.$el);
	},

	playersRoute: function() {
		APP.playerCollection1 = new APP.PlayerCollections();
		APP.playerCollection1.fetch({
			success: function(collection) {
				var viewInstance = new APP.PlayerView({
					collection: collection
				});
				viewInstance.render();
				$(document.body).html(viewInstance.$el);
				console.log(viewInstance);
			}
		});
	},

	spellsRoute: function() {
		APP.spells = new APP.Spells();
		APP.spells.fetch({
			success: function(collection) {
				var spellView = new APP.SpellView({
					collection: collection
				});
				spellView.render();
				$(document.body).html(spellView.$el);
				console.log(spellView);
			}
		});
	}
});

APP.router = new APP.Router();
Backbone.history.start({
	root: "/"
});