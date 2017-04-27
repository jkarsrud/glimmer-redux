'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-redux',
    environment: environment,
    moduleConfiguration: {
      types: {
        application: { definitiveCollection: 'main' },
        component: { definitiveCollection: 'components' },
        helper: { definitiveCollection: 'components' },
        renderer: { definitiveCollection: 'main' },
        template: { definitiveCollection: 'components' }
      },
      collections: {
        main: {
          types: ['application', 'renderer']
        },
        components: {
          group: 'ui',
          types: ['component', 'template', 'helper'],
          defaultType: 'component',
          privateCollections: ['utils']
        },
        styles: {
          group: 'ui',
          unresolvable: true
        },
        utils: {
          unresolvable: true
        },
        reducers: {
          unresolvable: true
        }
      }
    }
  };

  return ENV;
};
