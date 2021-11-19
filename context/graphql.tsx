import React, {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from 'react';
import getConfig from 'next/config';

type Props = Record<string, unknown>;

type GraphQLState = {
  endpoints: any;
  token: string;
};

type GraphQLActions = {
  setAuthToken: (token: string) => void;
};

const GraphQLStateContext = createContext<GraphQLState | null>(null);
const GraphQLActionContext = createContext<GraphQLActions | null>(null);

export function GraphQLProvider({ children }: PropsWithChildren<Props>) {
  const [token, setAuthToken] = useState('');
  const [endpoints] = useState<any>({
    spacex: `https://api.spacex.land/graphql`,
  });

  return (
    <GraphQLStateContext.Provider
      value={{
        token,
        endpoints,
      }}
    >
      <GraphQLActionContext.Provider
        value={{
          setAuthToken,
        }}
      >
        {children}
      </GraphQLActionContext.Provider>
    </GraphQLStateContext.Provider>
  );
}

export function useGraphQLContext(): GraphQLState & GraphQLActions {
  const state = useContext(GraphQLStateContext) as GraphQLState;
  const actions = useContext(GraphQLActionContext) as GraphQLActions;
  if (state === undefined || actions === undefined) {
    throw new Error('GraphQLContext must be within GraphQLProvider');
  }
  return { ...state, ...actions };
}
