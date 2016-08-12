import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cardstack-toolbars', 'Integration | Component | cardstack toolbars', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cardstack-toolbars}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cardstack-toolbars}}
      template block text
    {{/cardstack-toolbars}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
