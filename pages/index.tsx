import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInfiniteUsersQuery } from '../graphql/generated';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [queryParams] = useState({ limit: 12 });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteUsersQuery(
    { limit: queryParams.limit, offset: 0 },
    {
      getNextPageParam: (lastPage, allPages) => {
        return {
          limit: queryParams.limit,
          offset: (allPages.length ?? 0) * (queryParams.limit ?? 1),
        };
      },
    },
  );

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data!.pages.map((data, i) => (
        <React.Fragment key={i}>
          {data.users.map(user => (
            <p key={user.id}>{user.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
}
