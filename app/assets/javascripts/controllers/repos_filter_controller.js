Watchd.ReposFilterController = Em.ArrayController.extend({
  selected: null,

  init: function() {
    this._super();
    this.set('content', ['','Ruby','Javascript','Objective-C','Python','Clojure','VimL','C#']);
    this.set('selected', this.get('content.firstObject'));
  }
});
