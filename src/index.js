import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://api.github.com/graphql',
		headers: {
			authorization: 'bearer YOUR-TOKEN-HERE'
		}
	}),
	cache: new InMemoryCache()
});

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
