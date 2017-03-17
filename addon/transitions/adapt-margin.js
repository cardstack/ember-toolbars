import { propertiesFor } from '../transition-helpers';
import { animate } from 'liquid-fire';

export default function(dimension, opts) {
  if (this.newElement) {
    if (opts && opts.adjust) {
      let { measure } = propertiesFor(dimension);
      let size = parseInt(this.newElement.css(measure), 10);
      opts.adjust.forEach(({element, property}) => {
        animate(element, {[property]: `${size}px`}, { duration: 0, queue: false });
      });
    }
    this.newElement.css({visibility: ''});
  }
}
