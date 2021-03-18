import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const DetailsItem = styled.li`
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const DetailsInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: ${({ color }) => color || theme.colors.gray};
`;
