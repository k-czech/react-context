import styled from 'styled-components';

export const Avatar = styled.span`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
`;
