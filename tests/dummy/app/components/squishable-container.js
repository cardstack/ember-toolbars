import Ember from 'ember';
import { requestAnimationFrame } from 'cardstack-toolbars';

const allowedUnits = ['em', 'vw', 'px', 'rem', 'ex'];

export default Ember.Component.extend({
  width: 100,
  unit: 'vw',
  classNames: ['squishable-container'],

  innerStyle: Ember.computed('width', 'unit', function() {
    let width = this.get('width');
    let unit = this.get('unit');
    if (typeof width !== 'number') {
      throw new Error(`squishable-container: width must be a number, not ${width}`);
    }
    if (allowedUnits.indexOf(unit) === -1) {
      throw new Error(`squishable-container: unit must be one of [${allowedUnits.join(', ')}], not ${unit}`);
    }
    return Ember.String.htmlSafe(`width: ${width}${unit}`);
  }),

  didInsertElement() {
    requestAnimationFrame(() => this.updateScale());
  },
  updateScale() {
    if (this.isDestroyed) { return; }
    let scale = this.$().width() / this.$().children(':first').width();
    if (this._scale !== scale) {
      this.$().css({
        transform: `scale(${scale})`
      });
      this._scale = scale;
    }
    requestAnimationFrame(() => this.updateScale());
  }
});
