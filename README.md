## Relay Storybook Demo

This Demo show how to properly integrate Relay with Storybook
It will make it easy to have full pages that consome GraphQL data in your storybook
This works using the mocking capability of relay-test-utils package

## <RelayStorybook />

RelayStorybook accepts a mockResolvers prop that let you mock any type or operation of your GraphQL schema 

You need to wrap any component that uses Relay 

## Mock Examples

Mock a single type:

```jsx
export const Simple = Template.bind({});
Simple.args = {
    mockResolvers: {
       User: () => ({
          name: 'storybook#name',
          email: 'storybook#email'
        }),
    },
}
```

Mock a connection
```jsx
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
```
