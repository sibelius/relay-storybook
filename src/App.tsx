import React from 'react';

import UserList from './UserList';
import RelayEnvironmentProvider from './relay/RelayEnvironmentProvider';
import { Environment } from './relay';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <UserList />
    </RelayEnvironmentProvider>
  );
}

export default App;
