import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import type { Credential } from '../../../types';
import styles from './Credentials.module.css';
import { AiFillUnlock } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Credentials(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const masterPassword = 'supersecretkey';

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch('/api/credentials', {
        headers: { Authorization: masterPassword },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
  }, []);

  return (
    <>
      <h1>
        <AiFillUnlock />
        Vault
      </h1>
      <main className={styles.main}>{<List credentials={credentials} />}</main>
      <Link to="/credentials/add">
        <div className={styles.floatButton}>
          <BsFillPlusSquareFill />
        </div>
      </Link>
    </>
  );
}

export default Credentials;
