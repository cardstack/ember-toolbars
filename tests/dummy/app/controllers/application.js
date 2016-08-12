import Ember from 'ember';

const duration = 2000;
const Promise = Ember.RSVP.Promise;

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
}

function rightRules() {
  this.transition(
    this.fromValue(true),
    this.toValue(false),
    this.use(function() {
      return new Promise(resolve => {
        setTimeout(resolve, duration);
      });
    })
  );
}
