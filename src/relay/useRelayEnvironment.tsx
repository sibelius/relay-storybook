import { useContext } from 'react';
import { ReactRelayContext } from 'react-relay';

import { Environment } from 'relay-runtime';
import invariant from 'invariant';

const useRelayEnvironment = (): Environment => {
  const context = useContext(ReactRelayContext);
  invariant(
    context != null,
    'useRelayEnvironment: Expected to have found a Relay environment provided by ' +
      'a `RelayEnvironmentProvider` component. ' +
      'This usually means that useRelayEnvironment was used in a ' +
      'component that is not a descendant of a `RelayEnvironmentProvider`.' +
      'Please make sure a `RelayEnvironmentProvider` has been rendered somewhere ' +
      'as a parent of ancestor your compontent.',
  );
  return context.environment;
};

export default useRelayEnvironment;
