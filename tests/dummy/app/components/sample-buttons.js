import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'sample-buttons',
  actions: {
    show(which, value) {
      this.get('model').show(which, value);
    }
  }
});
