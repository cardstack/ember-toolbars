import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fixed-within-toolbars', 'Integration | Component | fixed within toolbars', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fixed-within-toolbars}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fixed-within-toolbars}}
      template block text
    {{/fixed-within-toolbars}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
