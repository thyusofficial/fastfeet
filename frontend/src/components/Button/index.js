import React from 'react';

import { MainButton } from './styles';

export default function Button({ children, onClick, type, background }) {
  return (
    <>
      <MainButton type={type} onClick={onClick} background={background}>
        {children}
      </MainButton>
    </>
  );
}
