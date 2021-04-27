import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItem } from './DeleteButton.styles';

const DeleteButton = ({ onClick }) => {
  return (
    <ButtonItem onClick={onClick}>
      <span />
    </ButtonItem>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteButton;
