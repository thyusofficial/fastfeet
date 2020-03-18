import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderList({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

HeaderList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

HeaderList.defaultProps = {
  children: null,
};
