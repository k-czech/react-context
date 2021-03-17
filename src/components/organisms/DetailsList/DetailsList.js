import React from 'react';
import {Details, DetailsListWrapper} from './DetailsList.styles';
import DetailsListItem from 'components/molecules/DetailsListItem/DetailsListItem';

const DetailsList = () => {
  return (
    <Details>
      <DetailsListWrapper>
        <DetailsListItem name='Wiek' value='32' />
      </DetailsListWrapper>
    </Details>
  );
};

export default DetailsList;
