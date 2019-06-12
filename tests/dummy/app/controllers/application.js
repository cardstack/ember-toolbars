import { capitalize } from '@ember/string';
import EmberObject, { computed } from '@ember/object';
import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['showLeft', 'showRight', 'showTop', 'showBottom'],
  showLeft: null,
  showRight: null,
  showTop: null,
  showBottom: null,

  shown: computed(function() {
    return EmberObject.extend({
      left: readOnly('app.showLeft'),
      right: readOnly('app.showRight'),
      top: readOnly('app.showTop'),
      bottom: readOnly('app.showBottom'),
      show(side, component) {
        this.get('app').set(`show${capitalize(side)}`, component);
      }
    }).create({ app: this });
  })
});
