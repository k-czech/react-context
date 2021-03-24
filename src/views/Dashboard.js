import React, { useContext } from 'react';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import { Row } from 'components/molecules/Row/Row';
import { ColumnFourth } from 'components/atoms/Columns/ColumnFourth/ColumnFourth';
import { ColumnItem } from 'components/molecules/ColumnItem/ColumnItem';
import { Avatar } from 'components/atoms/Avatar/Avatar';
import { Title } from 'components/atoms/Title/Title';
import DetailsList from 'components/organisms/DetailsList/DetailsList';
import { PlayersContext } from 'providers/PlayersProvider';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const Dashboard = () => {
  const { players, deletePlayers } = useContext(PlayersContext);
  return (
    <Wrapper>
      <Row>
        {players.map(({ name, age, born, amount, country, position, team }, index) => (
          <ColumnFourth key={name}>
            <ColumnItem>
              <Avatar />
              <Title>{name}</Title>
              <DetailsList age={age} born={born} country={country} position={position} team={team} />
              <DeleteButton onClick={() => deletePlayers(index)} />
            </ColumnItem>
          </ColumnFourth>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
