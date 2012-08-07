Watchd.ReposController = Ember.ArrayController.extend({
  // Implement your controller here.
  init: function() {
    this._super();
    console.profile('parsing json');
    var items = [];

    repos.map(function(item) {
      var repo = Watchd.Repo.createRecord(
      {
        name: item.name,
        desc: item.description,
        updated: new Date(item.updated_at),
        language: item.language
      });
      items.push(repo);
    });
    this.set('content', Ember.A(items));

    console.profileEnd();
  }
});

