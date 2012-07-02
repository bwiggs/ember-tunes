// Create the App namespace
App = Em.Application.create();

// A controller is just an Enumeration?
//
// From the docs:
//
// Note: As of this writing, ArrayController does not add any
// functionality to its superclass, ArrayProxy. The Ember team
// plans to add additional controller-specific functionality in
// the future, e.g. single or multiple selection support. If you
// are creating something that is conceptually a controller, use
// this class.
//
App.playlistsController = Ember.ArrayController.create();
App.playlistsController.set('content', [
	Ember.Object.create({
		'title': 'Cappuccino',
		'artist': 'The Knux'
	})
]);

App.PlaylistsView = Ember.View.extend({
	templateName: 'playlists',
	playlistsBinding: 'App.playlistsController'
});

App.playlistsView = App.PlaylistsView.create().append();
