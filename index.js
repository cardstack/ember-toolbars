/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-toolbars',

  init: function() {
    if (this._super.init) {
      this._super.init.apply(this, arguments);
    }
    // Shim this.import for support in older versions of ember-cli
    if (!this.import) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;

        // Keep iterating upward until we don't have a grandparent.
        // Has to do this grandparent check because at some point we hit the project.
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
      this.import = function importShim(asset, options) {
        var app = this._findHost();
        app.import(asset, options);
      };
    }
  },

  included: function(){
    this._super.included.apply(this, arguments);
    this.import('vendor/ember-toolbars.css');
  }
};
