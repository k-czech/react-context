import React from 'react';
import PropTypes from 'prop-types';
import { Details, DetailsListWrapper } from './DetailsList.styles';
import DetailsListItem from '../../molecules/DetailsListItem/DetailsListItem';

const DetailsList = ({ age, born, country, position, team }) => {
  return (
    <Details>
      <DetailsListWrapper>
        <DetailsListItem name="Wiek" value={age} />
        <DetailsListItem name="Miejsce urodzenia" value={born} />
        <DetailsListItem name="Narodowość" value={country} />
        <DetailsListItem name="Pozycja" value={position} />
        <DetailsListItem name="Klub" value={team} />
      </DetailsListWrapper>
    </Details>
  );
};

DetailsList.propTypes = {
  age: PropTypes.string,
  born: PropTypes.string,
  country: PropTypes.string,
  position: PropTypes.string,
  team: PropTypes.string,
};

export default DetailsList;
