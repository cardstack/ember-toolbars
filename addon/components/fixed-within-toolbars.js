import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/fixed-within-toolbars';

export default Component.extend({
  layout,
  tagName: '',
  style: computed('right', 'top', 'left', function() {
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
    return htmlSafe(style);
  }),
  innerStyle: computed('right', function() {
    let style = "position: fixed;";
    let hasRight = this.get('right') != null;
    if (hasRight) {
      style += "transform: translateX(-100%)";
    }
    return htmlSafe(style);
  })
});
