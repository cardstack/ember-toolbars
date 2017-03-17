import Ember from 'ember';
import layout from '../templates/components/toolbar-manager';
import swapOut from '../transitions/swap-out';
import moveOver from '../transitions/move-over';
import adaptMargin from '../transitions/adapt-margin';

export default Ember.Component.extend({
  layout,
  classNames: ['ember-toolbars'],
  animationDuration: 500,

  leftRules: Ember.computed('animationDuration', function(){
    let opts = {
      adjust: [{ element: this.$(), property: 'margin-left' }],
      duration: this.get('animationDuration')
    };

    return function leftRules() {
      this.transition(
        this.onInitialRender(),
        this.use(adaptMargin, 'x', opts)
      );
      this.transition(
        this.fromValue(false),
        this.toValue(true),
        this.use(moveOver, 'x', 1, opts),
        this.reverse(moveOver, 'x', -1, opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'x', 1, opts)
      );
    };
  }),

  rightRules: Ember.computed('animationDuration', function(){
    let opts = {
      adjust: [{ element: this.$(), property: 'margin-right' }],
      duration: this.get('animationDuration')
    };

    return function rightRules() {
      this.transition(
        this.onInitialRender(),
        this.use(adaptMargin, 'x', opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(false),
        this.use(moveOver, 'x', 1, opts),
        this.reverse(moveOver, 'x', -1, opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'x', -1, opts)
      );
    };
  }),

  topRules: Ember.computed('animationDuration', function(){
    let $elt = this.$();
    let opts = {
      adjust: [
        { element: $elt, property: 'margin-top' },
        { element: $elt.children('.cst-left'), property: 'translateY' },
        { element: $elt.children('.cst-right'), property: 'translateY' }],
      duration: this.get('animationDuration')
    };
    return function topRules() {
      this.transition(
        this.onInitialRender(),
        this.use(adaptMargin, 'y', opts)
      );
      this.transition(
        this.fromValue(false),
        this.toValue(true),
        this.use(moveOver, 'y', 1, opts),
        this.reverse(moveOver, 'y', -1, opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'y', 1, opts)
      );
    };
  }),

  bottomRules: Ember.computed('animationDuration', function(){
    let $elt = this.$();
    let opts = {
      adjust: [
        { element: $elt, property: 'margin-bottom' },
        { element: $elt.children('.cst-left'), property: 'bottom' },
        { element: $elt.children('.cst-right'), property: 'bottom' }
      ],
      duration: this.get('animationDuration')
    };
    return function bottomRules() {
      this.transition(
        this.onInitialRender(),
        this.use(adaptMargin, 'y', opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(false),
        this.use(moveOver, 'y', 1, opts),
        this.reverse(moveOver, 'y', -1, opts)
      );
      this.transition(
        this.fromValue(true),
        this.toValue(true),
        this.use(swapOut, 'y', -1, opts)
      );
    };
  }),


});
