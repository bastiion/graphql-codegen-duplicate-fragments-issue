import { useGraphQLContext } from '../context/graphql';
export const useFetchData = <TData, TVariables>(
  query: string,
): (() => Promise<TData>) => {
  // FAILING: using a hook inside the fetcher
  //const { endpoints } = useGraphQLContext();

  // PASSING: mocking the data so we don't use a hook inside the fetcher
  const endpoints = {
    spacex: 'https://api.spacex.land/graphql/',
  };
  return async (variables?: TVariables) => {
    const res = await fetch(endpoints.spacex, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};
