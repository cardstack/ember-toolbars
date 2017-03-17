/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-toolbars',
  included: function(app){
    if (this.import) { // support for ember-cli >= 2.7
      this.import('vendor/ember-toolbars.css');
    } else if (app.import) { // support ember-cli < 2.7
      app.import('vendor/ember-toolbars.css');
    }
  }
};
