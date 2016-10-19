import Ember from 'ember';
import layout from '../templates/components/cardstack-toolbars';
import swapOut from '../transitions/swap-out';
import { requestAnimationFrame } from 'cardstack-toolbars';

export default Ember.Component.extend({
  layout,
  classNames: ['cardstack-toolbars'],
  animationDuration: 500,

  didInsertElement() {
    requestAnimationFrame(() => this.updateMargins());
  },

  updateMargins() {
    if (this.isDestroyed) { return; }
    let elt = this.$();
    let marginLeft = elt.children('.cst-left').width();
    let marginRight = elt.children('.cst-right').width();
    let marginTop = elt.children('.cst-top').height();
    // we should use bottom margin too (so the last bit of scrollable
    // content isn't obscured), but it won't work until we get the
    // content fully contained inside cst-main.
    // let marginBottom = elt.children('.cst-bottom').height();
    elt.css({
      marginLeft,
      marginRight,
      marginTop
    });
    elt.children('.cst-left').css({
      marginTop
    });
    elt.children('.cst-right').css({
      marginTop
    });
    requestAnimationFrame(() => this.updateMargins());
  },

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
  }),

  topRules: Ember.computed('animationDuration', function(){
    let duration = this.get('animationDuration');
    return function topRules() {
      this.transition(
        this.fromValue(false),
        this.toValue(true),
        this.use('to-down', { duration }),
        this.reverse('to-up', { duration })
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'y', 1, { duration: duration / 2 })
      );
    };
  }),

  bottomRules: Ember.computed('animationDuration', function(){
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
        this.use(swapOut, 'y', -1, { duration: duration / 2 })
      );
    };
  }),


});
