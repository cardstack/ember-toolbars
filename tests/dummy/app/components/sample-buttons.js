import Component from '@ember/component';

export default Component.extend({
  classNames: 'sample-buttons',
  actions: {
    show(which, value) {
      this.get('model').show(which, value);
    }
  }
});
