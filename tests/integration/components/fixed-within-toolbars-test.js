import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fixed within toolbars', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{fixed-within-toolbars}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#fixed-within-toolbars}}
        template block text
      {{/fixed-within-toolbars}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
