import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function QueryProvider(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default QueryProvider;
