Watchd.Router = Ember.Router.extend({

  location: 'hash',
  enableLogging: true,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',

      enter: function(router) {
        console.log("entering root");
      },

      connectOutlets: function(router){
        router.get('applicationController').init();
        router.get('applicationController').connectOutlet('repos');
      }

    })
  })
});

