import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Autocomplete } from '../components/autocomplete';
import { Style } from '../components/style';
import { Results } from '../components/results';
import { InstitutionDetails } from '../components/institutionDetails';
import { InstitutionSearch } from '../components/institutionSearch';
import { Places } from '../components/places';
import { useState } from 'react';
import { WEB_BASE_URL } from '../util/constants';
import { lazyQueryClient } from '../util/lazyQueryClient';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Propel API Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={lazyQueryClient}>
        <main>
          <h1 className={styles.title}>
            <a href={`${WEB_BASE_URL}/swagger`} target="_blank">
              Propel API
            </a>{' '}
            Examples
          </h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Autocomplete</h3>
              <Autocomplete label="All" />
              <Autocomplete label="Courses" />
              <Autocomplete label="Institutions" />
              <Autocomplete label="Subjects" />
              <Autocomplete label="Places" />
            </div>

            <div className={styles.card}>
              <h3>Institutions</h3>
              <InstitutionDetails />
              <InstitutionSearch />
            </div>

            <div className={styles.card}>
              <h3>Places</h3>
              <Places />
            </div>
          </div>
          <Results />
        </main>
      </QueryClientProvider>
      <Style />
    </div>
  );
}
