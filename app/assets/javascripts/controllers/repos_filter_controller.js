Watchd.ReposFilterController = Em.ArrayController.extend({
  selected: null,

  init: function() {
    this.set('content', Ember.A(['cam']));
  }
});
