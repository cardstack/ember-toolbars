import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/toolbar-manager';
import swapOut from '../transitions/swap-out';
import moveOver from '../transitions/move-over';
import adaptMargin from '../transitions/adapt-margin';
import $ from 'jquery';

export default Component.extend({
  layout,
  classNames: ['ember-toolbars'],
  animationDuration: 500,

  // You can set these to change the way corners are displayed. These
  // are not observed or animated.
  topLeftCornerBelongsTo: 'top',
  topRightCornerBelongsTo: 'top',
  bottomLeftCornerBelongsTo: 'bottom',
  bottomRightCornerBelongsTo: 'bottom',

  leftRules: computed('animationDuration', function(){
    let _this = this;
    return function leftRules() {
      let $elt = $(_this.element);
      let opts = {
        adjust: [{ element: $elt, property: 'margin-left' }],
        duration: _this.get('animationDuration')
      };

      if (_this.topLeftCornerBelongsTo !== 'top') {
        opts.adjust.push({
          element: $elt.children('.cst-top'),
          property: 'margin-left'
        });
      }

      if (_this.bottomLeftCornerBelongsTo !== 'bottom') {
        opts.adjust.push({
          element: $elt.children('.cst-bottom'),
          property: 'margin-left'
        });
      }

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

  rightRules: computed('animationDuration', function(){
    let _this = this;
    return function rightRules() {
      let $elt = $(_this.element);
      let opts = {
        adjust: [{ element: $elt, property: 'margin-right' }],
        duration: _this.get('animationDuration')
      };

      if (_this.topRightCornerBelongsTo !== 'top') {
        opts.adjust.push({
          element: $elt.children('.cst-top'),
          property: 'margin-right'
        });
      }

      if (_this.bottomRightCornerBelongsTo !== 'bottom') {
        opts.adjust.push({
          element: $elt.children('.cst-bottom'),
          property: 'margin-right'
        });
      }

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

  topRules: computed('animationDuration', function(){
    let _this = this;
    return function topRules() {
      let $elt = $(_this.element);
      let opts = {
        adjust: [
          { element: $elt, property: 'margin-top' }
        ],
        duration: _this.get('animationDuration')
      };

      if (_this.topLeftCornerBelongsTo !== 'left') {
        opts.adjust.push({
          element: $elt.children('.cst-left'),
          property: 'translateY'
        });
      }

      if (_this.topRightCornerBelongsTo !== 'right') {
        opts.adjust.push({
          element: $elt.children('.cst-right'),
          property: 'translateY'
        });
      }

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

  bottomRules: computed('animationDuration', function(){
    let _this = this;
    return function bottomRules() {
      let $elt = $(_this.element);
      let opts = {
        adjust: [
          { element: $elt, property: 'margin-bottom' },
        ],
        duration: _this.get('animationDuration')
      };

      if (_this.bottomLeftCornerBelongsTo !== 'left') {
        opts.adjust.push({
          element: $elt.children('.cst-left'),
          property: 'bottom'
        });
      }

      if (_this.bottomRightCornerBelongsTo !== 'right') {
        opts.adjust.push({
          element: $elt.children('.cst-right'),
          property: 'bottom'
        });
      }

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
