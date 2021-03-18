import React, { useContext } from 'react';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import { Row } from 'components/molecules/Row/Row';
import { ColumnFourth } from 'components/atoms/Columns/ColumnFourth/ColumnFourth';
import { ColumnItem } from 'components/molecules/ColumnItem/ColumnItem';
import { Avatar } from 'components/atoms/Avatar/Avatar';
import { Title } from 'components/atoms/Title/Title';
import DetailsList from 'components/organisms/DetailsList/DetailsList';
import { PlayersContext } from 'providers/PlayersProvider';

const Dashboard = () => {
  const { players } = useContext(PlayersContext);
  return (
    <Wrapper>
      <Row>
        {players.map(({ name, age, born, amount, country, position, team }) => (
          <ColumnFourth key={name}>
            <ColumnItem>
              <Avatar />
              <Title>{name}</Title>
              <DetailsList age={age} born={born} country={country} position={position} team={team} />
            </ColumnItem>
          </ColumnFourth>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
