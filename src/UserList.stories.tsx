import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/addon-docs/blocks';

import UserList, { UserListProps } from './UserList';
import { RelayStorybook } from '../test/RelayStorybook';
import { connectionFromArray } from '../test/connectionFromArray';

export default {
  title: 'UserList',
  component: UserList,
} as Meta;

const Template: Story<UserListProps> = (args) => {
  const { mockResolvers } = args;

  return (
    <RelayStorybook mockResolvers={mockResolvers}>
      <UserList {...args} />
    </RelayStorybook>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  mockResolvers: {
    User: () => ({
      name: 'storybook#name',
      email: 'storybook#email'
    }),
  },
}

export const Connection = Template.bind({});
Connection.args = {
  mockResolvers: {
    UserConnection: () => ({
      ...connectionFromArray([
        {
          name: 'name#1',
          email: 'email#1',
        },
        {
          name: 'name#2',
          email: 'email#2',
        },
      ]),
    }),
  },
}


