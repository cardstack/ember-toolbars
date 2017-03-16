import Ember from 'ember';
import layout from '../templates/components/fixed-within-toolbars';

export default Ember.Component.extend({
  layout,
  tagName: '',
  style: Ember.computed('right', 'top', 'left', function() {
    let style = "position: absolute;";
    ['top', 'left', 'right'].forEach(field => {
      let value = String(this.get(field));

      // safety check -- we're going to use htmlSafe to assert that we
      // haven't introduced any injections. So we're responsible for
      // only embedding valid things.
      if (!/^\d+(px|em|ex|vw|vh)?$/.test(value)) {
        value = null;
      }

      if (value != null) {
        style += `${field}: ${value};`;
      }

    });
    return Ember.String.htmlSafe(style);
  }),
  innerStyle: Ember.computed('right', function() {
    let s = "position: fixed;";
    let hasRight = this.get('right') != null;
    if (hasRight) {
      s += "transform: translateX(-100%)";
    }
    return s;
  })
});
