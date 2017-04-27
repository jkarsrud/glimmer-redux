import { tracked } from '@glimmer/component';

export default (stateToTracked = () => ({}), dispatchToActions) => {

  return WrappedComponent => {
    return class ConnectedComponent extends WrappedComponent {
      iAmConnected = true;
      constructor() {
        super();
      }
    }
  }
};
