import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? 0 : '50%')};
  left: 20px;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.gray};
  pointer-events: none;
  transition: top 0.2s ease-in;
`;
