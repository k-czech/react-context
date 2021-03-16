import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  h1 {
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
  margin: 10px 20px 10px auto;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  transition: opacity .3s ease;

  &.${activeClassName}, &:hover {
    opacity: 0.8;
    
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: "";
    width: 18px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -25px;
    opacity: 0;
    transition: opacity .3s ease;
  }
`
