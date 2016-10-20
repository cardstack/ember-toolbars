import { stop, animate, Promise, isAnimating, finish } from "liquid-fire";

export function waitForPrevious(context, name) {
  if (isAnimating(context.oldElement, name)) {
    return finish(context.oldElement, name);
  } else {
    stop(context.oldElement);
    return Promise.resolve();
  }
}

export function propertiesFor(dimension) {
  if (dimension.toLowerCase() === 'x') {
    return {
      property: 'translateX',
      measure: 'width'
    };
  } else {
    return {
      property: 'translateY',
      measure: 'height'
    };
  }
}

export function marginAdjustment(context, measure, opts) {
  let targets = opts.adjust;
  if (!targets) {
    return () => Promise.resolve();
  }
  let distance = 0;
  if (context.newElement) {
    distance = parseInt(context.newElement.css(measure), 10);
  }
  return () => Promise.all(targets.map(target => animate(target.element, {[target.property]: `${distance}px`}, opts)));
}

export function biggestSize(context, dimension) {
  var sizes = [];
  if (context.newElement) {
    sizes.push(parseInt(context.newElement.css(dimension), 10));
    sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
  }
  if (context.oldElement) {
    sizes.push(parseInt(context.oldElement.css(dimension), 10));
    sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
  }
  return Math.max.apply(null, sizes);
}
