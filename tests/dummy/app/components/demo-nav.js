import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['demo-nav'],
  router: Ember.inject.service('-routing'),
  currentRoute: Ember.computed('router.currentRouteName', function() {
    let name = this.get('router.currentRouteName');
    return this.get('routes').find(r => r.route === name);
  }),
  routes: [
    { title: 'Shrink Down', route: 'index' },
    { title: 'Slide Right', route: 'right-sliding' },
    { title: 'Slide Left', route: 'left-sliding' },
    { title: 'Reflow', route: 'non-squishable' }
  ],
  actions: {
    changeRoute(which) {
      // run.later is a workaround for an ember-power-select bug (it
      // calls set on destroy if we transition before it can close)
      Ember.run.later(
        () => this.get('router').transitionTo(which.route)
      );
    }
  }
});
