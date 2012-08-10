Watchd.UnboundSelectOption = Ember.SelectOption.extend({
    template: Ember.Handlebars.compile('{{unbound view.label}}')
});

Watchd.ChosenSelect = Ember.Select.extend({
    chosenOptions: {},
    prompt: 'hey',

    change: function(event) {
        Em.run.once(this, this._updateElementValue);
    },

    _updateElementValue: function() {
        this.set('value', this.$().attr('value'));
    },

    template: Ember.Handlebars.compile('{{#if prompt}}{{unbound prompt}}{{/if}}' + '{{#each view.content}}{{view Watchd.UnboundSelectOption contentBinding="this"}}{{/each}}'),

    didInsertElement: function() {
        this._super();
        this.$().chosen(this.chosenOptions);
    },

    _closeChosen: function() {
        this.$().next('.chzn-container-active').find('input').trigger({
            type: 'keyup',
            which: 27
        });
    },

    rerender: function() {
        if (this.get('state') == 'inDOM') {
            this.$().next('.chzn-container').remove();
        }
        this._super();
    },

    rerenderChosen: function() {
        this.$().trigger('listzt:updated');
    }
});
