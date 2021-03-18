import React from 'react';
import { SidebarWrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <h1>React Context</h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-players">Add players</StyledLink>
    </SidebarWrapper>
  );
};

export default Navigation;
