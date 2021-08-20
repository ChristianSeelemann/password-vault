import React, { useState, useEffect } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import styles from './Dashboard.module.css';
import { useHistory } from 'react-router-dom';

export default function Dashboard(): JSX.Element {
  const [masterPassword, setMasterPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (masterPassword === 'supersecretkey') {
      history.push('/credentials');
    }
  }, [masterPassword]);

  return (
    <main className={styles.main}>
      <h1>
        <RiLockPasswordLine />
        Vault
      </h1>
      <div className={styles.login}>
        <p>Please log in...</p>
        <label>
          <input
            type="password"
            name="search"
            placeholder="Masterpassword"
            value={masterPassword}
            onChange={(event) => {
              setMasterPassword(event.target.value);
            }}
            className={styles.input}
          />
          <span>
            <AiFillEye />
          </span>
        </label>
      </div>
      <footer>
        <p>Please dont use this on a public computer!</p>
      </footer>
    </main>
  );
}
