import styled from 'styled-components';

export const ButtonItem = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  box-shadow: none;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  min-width: 24px;
  min-height: 24px;
  margin: 10px 10px 0 0;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in, transform 0.2s ease-in;

  span {
    position: relative;
    display: block;
    margin-top: -1px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid ${({ theme }) => theme.colors.white};
      width: 100%;
    }

    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(-135deg);
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: rotate(90deg);
  }
`;
