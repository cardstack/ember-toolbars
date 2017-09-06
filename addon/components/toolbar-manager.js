import Ember from 'ember';
import layout from '../templates/components/toolbar-manager';
import swapOut from '../transitions/swap-out';
import moveOver from '../transitions/move-over';
import adaptMargin from '../transitions/adapt-margin';

export default Ember.Component.extend({
  layout,
  classNames: ['ember-toolbars'],
  animationDuration: 500,

  // You can set these to change the way corners are displayed. These
  // are not observed or animated.
  topLeftCornerBelongsTo: 'top',
  topRightCornerBelongsTo: 'top',
  bottomLeftCornerBelongsTo: 'bottom',
  bottomRightCornerBelongsTo: 'bottom',

  leftRules: Ember.computed('animationDuration', function(){
    let $elt = this.$();
    let opts = {
      adjust: [{ element: this.$(), property: 'margin-left' }],
      duration: this.get('animationDuration')
    };

    if (this.topLeftCornerBelongsTo !== 'top') {
      opts.adjust.push({
        element: $elt.children('.cst-top'),
        property: 'margin-left'
      });
    }

    if (this.bottomLeftCornerBelongsTo !== 'bottom') {
      opts.adjust.push({
        element: $elt.children('.cst-bottom'),
        property: 'margin-left'
      });
    }

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
    let $elt = this.$();
    let opts = {
      adjust: [{ element: $elt, property: 'margin-right' }],
      duration: this.get('animationDuration')
    };

    if (this.topRightCornerBelongsTo !== 'top') {
      opts.adjust.push({
        element: $elt.children('.cst-top'),
        property: 'margin-right'
      });
    }

    if (this.bottomRightCornerBelongsTo !== 'bottom') {
      opts.adjust.push({
        element: $elt.children('.cst-bottom'),
        property: 'margin-right'
      });
    }


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
        { element: $elt, property: 'margin-top' }
      ],
      duration: this.get('animationDuration')
    };

    if (this.topLeftCornerBelongsTo !== 'left') {
      opts.adjust.push({
        element: $elt.children('.cst-left'),
        property: 'translateY'
      });
    }

    if (this.topRightCornerBelongsTo !== 'right') {
      opts.adjust.push({
        element: $elt.children('.cst-right'),
        property: 'translateY'
      });
    }


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
      ],
      duration: this.get('animationDuration')
    };

    if (this.bottomLeftCornerBelongsTo !== 'left') {
      opts.adjust.push({
        element: $elt.children('.cst-left'),
        property: 'bottom'
      });
    }

    if (this.bottomRightCornerBelongsTo !== 'right') {
      opts.adjust.push({
        element: $elt.children('.cst-right'),
        property: 'bottom'
      });
    }


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
