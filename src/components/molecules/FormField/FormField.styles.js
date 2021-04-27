import styled from 'styled-components';

export const Wrapper = styled.span`
  position: relative;
  display: block;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;
