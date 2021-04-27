import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 15px 20px;
  border-radius: 20px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
