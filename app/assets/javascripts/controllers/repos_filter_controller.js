Watchd.ReposFilterController = Em.ArrayController.extend({
  selected: null,
  content: ['', 'cam', 'zack'],

  init: function() {
    this.set('content', Ember.A(['cam']));
  }
});
