import React from 'react';
import type { Credential } from '../../types';
import ListItem from './ListItem';

function List({ credentials }): JSX.Element {
  return (
    <>
      {credentials?.map((credential: Credential) => (
        <ListItem credential={credential} />
      ))}
    </>
  );
}

export default List;
