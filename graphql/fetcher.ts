import { parse, print } from 'graphql'

export const useFetchData = <TData, TVariables>(
  query: string,
): (() => Promise<TData>) => {

  const parsedQuery = parse(query)
  const alreadyVisitedQueryNames: string[] = []
  const fixedQuery = print({
    ...parsedQuery,
    definitions:  parsedQuery.definitions.filter(def => {
      if(!(def.kind === 'FragmentDefinition' && alreadyVisitedQueryNames.includes(def.name.value))) {
        if(def.kind === 'FragmentDefinition') alreadyVisitedQueryNames.push(def.name.value)
        return true
      }
    })
  })


  // PASSING: mocking the data so we don't use a hook inside the fetcher
  const endpoints = {
    spacex: 'http://localhost:9002/graphql',
  };
  return async (variables?: TVariables) => {
    const res = await fetch(endpoints.spacex, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: fixedQuery,
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
