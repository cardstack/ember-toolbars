import Ember from 'ember';
import { requestAnimationFrame } from 'cardstack-toolbars';

export default Ember.Component.extend({
  classNames: ['squishable-container'],
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
