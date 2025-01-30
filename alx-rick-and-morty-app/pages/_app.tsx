import client from '@/graphql/apolloClient';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </ErrorBoundary>
  );
}


