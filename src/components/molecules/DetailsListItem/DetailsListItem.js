import React from 'react';
import PropTypes from 'prop-types';
import {DetailsInfo, DetailsItem} from './DetailsListItem.styles';
import {theme} from 'assets/styles/theme';

const DetailsListItem = ({ name, value}) => {
  return (
    <DetailsItem>
      <DetailsInfo>{ name }: </DetailsInfo>
      <DetailsInfo color={theme.colors.black}>{ value }</DetailsInfo>
    </DetailsItem>
  );
};

DetailsListItem.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string,
}

export default DetailsListItem;
