Watchd.Repo = DS.Model.extend({
  name: DS.attr('string'),
  language: DS.attr('string'),
  updated: DS.attr('date'),
  desc: DS.attr('string')
});
