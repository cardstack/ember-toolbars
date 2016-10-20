import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('non-squishable');
  this.route('left-sliding');
  this.route('right-sliding');
});

export default Router;
