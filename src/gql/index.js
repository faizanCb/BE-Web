import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: async (operation) => {
    const token = await localStorage.getItem('AUTH_TOKEN');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  cache: new InMemoryCache()
});



graphqlClient.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  }
};

export default graphqlClient;
