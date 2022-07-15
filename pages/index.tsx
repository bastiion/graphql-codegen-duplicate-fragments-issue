import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import {useCompanyQuery, useInfiniteCompanyQuery, useInfiniteUsersQuery} from '../graphql/generated';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [queryParams] = useState({ limit: 12 });
  const {
    data,
    error,
    isFetching,
    status,
  } = useCompanyQuery(
    {}
  );

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {(error as any).message}</p>
  ) : (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
