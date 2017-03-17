import Ember from 'ember';
let { readOnly } = Ember.computed;

export default Ember.Controller.extend({
  queryParams: ['showLeft', 'showRight', 'showTop', 'showBottom'],
  showLeft: null,
  showRight: null,
  showTop: null,
  showBottom: null,

  shown: Ember.computed(function() {
    return Ember.Object.extend({
      left: readOnly('app.showLeft'),
      right: readOnly('app.showRight'),
      top: readOnly('app.showTop'),
      bottom: readOnly('app.showBottom'),
      show(side, component) {
        this.get('app').set(`show${Ember.String.capitalize(side)}`, component);
      }
    }).create({ app: this });
  })
});
