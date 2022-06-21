import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-eu-west-2.graphcms.com/v2/cl4od1iqg1y2001xid73sfwic/master',
	cache: new InMemoryCache()
})