import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import  { GraphQLTaggedNode, Variables } from 'react-relay';
import useRelayEnvironment from './useRelayEnvironment';

type Config = {
  query: GraphQLTaggedNode,
  queriesParams?: (props: Object) => object,
  variables?: Variables,
  hideSplash?: boolean,
};

export default function createQueryRenderer(
  FragmentComponent,
  config: Config,
) {
  const { query, queriesParams } = config;

  const QueryRendererWrapper = (wrapperProps) => {
    const environment = useRelayEnvironment();

    const variables = queriesParams
      ? queriesParams(wrapperProps)
      : config.variables;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({ error, props }) => {
          if (error) {
            return <span>{error.toString()}</span>;
          }

          if (props) {
            const fragmentProps = config.getFragmentProps
              ? config.getFragmentProps(props)
              : { query: props };

            return <FragmentComponent {...wrapperProps} {...fragmentProps} />;
          }

          return <span>loading</span>;
        }}
      />
    )
  }

  return QueryRendererWrapper;
}
