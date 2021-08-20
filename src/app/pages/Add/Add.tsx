import React from 'react';
import styles from './Add.module.css';
import { BiBookAdd } from 'react-icons/bi';
import { RiSendPlane2Line } from 'react-icons/ri';

function Add(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>
        <BiBookAdd />
        Add
      </h1>
      <section className={styles.inputSection}>
        <label>
          <p>Service</p>
          <input type="text" placeholder="Servicename" />
        </label>
        <label>
          <p>Username</p>
          <input type="text" placeholder="User/eMail" />
        </label>
        <label>
          <p>Password</p>
          <input type="text" placeholder="Password" />
        </label>
        <hr />
        <span className={styles.send}>
          <RiSendPlane2Line />
          Create Credential
        </span>
      </section>
    </main>
  );
}

export default Add;
