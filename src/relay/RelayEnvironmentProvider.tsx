import { useMemo } from 'react';

import { ReactRelayContext } from 'react-relay';

import { Environment } from 'relay-runtime';

type Props = {
  children: React.ReactNode;
  environment: Environment;
};
const RelayEnvironmentProvider = (props: Props) => {
  const { children, environment } = props;
  // TODO(T39494051) - We're setting empty variables here to make Flow happy
  // and for backwards compatibility, while we remove variables from context
  // in favor of fragment ownershipt
  const context = useMemo(() => ({ environment, variables: {} }), [environment]);

  return <ReactRelayContext.Provider value={context}>{children}</ReactRelayContext.Provider>;
};

export default RelayEnvironmentProvider;
