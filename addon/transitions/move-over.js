import {
  animate,
  Promise
} from "liquid-fire";

import {
  waitForPrevious,
  propertiesFor,
  marginAdjustment,
  biggestSize
} from '../transition-helpers';

export default function moveOver(dimension, direction, opts) {
  let { property, measure } = propertiesFor(dimension);

  return waitForPrevious(this, 'moving-in').then(() => {
    let bigger = biggestSize(this, measure);
    let animateMargin = marginAdjustment(this, measure, opts);
    return Promise.all([
      animateMargin(),
      animate(this.oldElement, {
        [property]: (bigger * direction) + 'px'
      }, opts),
      animate(this.newElement, {
        [property]: ["0px", (-1 * bigger * direction) + 'px']
      }, opts, 'moving-in')
    ]);
  });
}
