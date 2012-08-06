//= require ./store
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./templates
//= require_tree ./routes
//= require_self

// var router = Watchd.router = Watchd.Router.create({
//   location: '/'
// });

$(function() {
  Watchd.initialize();
	$('#tiles li').wookmark({ autoResize: true, offset: 8 });
});

