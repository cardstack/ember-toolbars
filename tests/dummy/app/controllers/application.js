import Ember from 'ember';

const duration = 300;

export default Ember.Controller.extend({
  leftRules,
  rightRules,
  duration
});

function leftRules() {
  this.transition(
    this.fromValue(false),
    this.toValue(true),
    this.use('to-right', { duration }),
    this.reverse('to-left', { duration })
  );
  this.transition(
    this.fromValue(true),
    this.toValue(true),
    this.use('swap-out', 'x', 1, { duration: duration / 2 })
  );
}

function rightRules() {
  this.transition(
    this.fromValue(true),
    this.toValue(false),
    this.use('wait', duration)
  );
  this.transition(
    this.fromValue(true),
    this.toValue(true),
    this.use('swap-out', 'x', -1, { duration: duration / 2 })
  );
}
