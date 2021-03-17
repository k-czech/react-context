import React from 'react';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import { Row } from 'components/molecules/Row/Row';
import { ColumnFourth } from 'components/atoms/Columns/ColumnFourth/ColumnFourth';
import { ColumnItem }  from 'components/molecules/ColumnItem/ColumnItem';
import { Avatar } from 'components/atoms/Avatar/Avatar';
import {Title} from 'components/atoms/Title/Title';
import DetailsList from 'components/organisms/DetailsList/DetailsList';

const Dashboard = () => {
  return (
    <Wrapper>
      <Row>
        <ColumnFourth>
          <ColumnItem>
            <Avatar />
            <Title>Robert Lewandowski</Title>
            <DetailsList />
          </ColumnItem>
        </ColumnFourth>
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
