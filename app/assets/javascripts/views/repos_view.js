Watchd.ReposView = Ember.View.extend({
  templateName: 'repos',

  didInsertElement: function() {
    $('#tiles li').wookmark(
      {
        autoResize: true,
        offset: 8,
        container: $('#repos-container')
      }
    );
  }
});
