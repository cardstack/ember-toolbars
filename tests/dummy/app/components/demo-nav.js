import { later } from '@ember/runloop';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['demo-nav'],
  router: service('-routing'),
  currentRoute: computed('router.currentRouteName', function() {
    let name = this.get('router.currentRouteName');
    return this.get('routes').find(r => r.route === name);
  }),
  routes: Object.freeze([
    { title: 'Shrink Down', route: 'index' },
    { title: 'Slide Right', route: 'right-sliding' },
    { title: 'Slide Left', route: 'left-sliding' },
    { title: 'Reflow', route: 'non-squishable' }
  ]),
  actions: {
    changeRoute(which) {
      // run.later is a workaround for an ember-power-select bug (it
      // calls set on destroy if we transition before it can close)
      later(
        () => this.get('router').transitionTo(which.route)
      );
    }
  }
});
