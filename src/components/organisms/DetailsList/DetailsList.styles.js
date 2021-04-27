import styled from 'styled-components';

export const Details = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 15px;
  margin-top: 15px;
  width: 100%;
`;

export const DetailsListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
