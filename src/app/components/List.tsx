import React from 'react';
import type { Credential } from '../../types';

function List({ credentials }): JSX.Element {
  return (
    <>
      {credentials?.map((credential: Credential) => (
        <div>
          <p>{credential.service}</p>
          <p>{credential.username}</p>
          <p>{credential.password}</p>
        </div>
      ))}
    </>
  );
}

export default List;
