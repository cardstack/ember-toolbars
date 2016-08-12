import Ember from 'ember';
import layout from '../templates/components/cardstack-toolbars';
import swapOut from '../transitions/swap-out';

export default Ember.Component.extend({
  layout,
  classNames: ['cardstack-toolbars'],
  animationDuration: 500,

  leftRules: Ember.computed('animationDuration', function(){
    let duration = this.get('animationDuration');
    return function leftRules() {
      this.transition(
        this.fromValue(false),
        this.toValue(true),
        this.use('to-right', { duration }),
        this.reverse('to-left', { duration })
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'x', 1, { duration: duration / 2 })
      );
    };
  }),
  rightRules: Ember.computed('animationDuration', function(){
    let duration = this.get('animationDuration');
    return function rightRules() {
      this.transition(
        this.fromValue(true),
        this.toValue(false),
        this.use('wait', duration)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'x', -1, { duration: duration / 2 })
      );
    };
  })
});
