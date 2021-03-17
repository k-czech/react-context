import React from 'react';
import { ViewWrapper, ViewContainer } from './Wrapper.styles';

const Wrapper = ({ children }) => {
  return (
    <ViewWrapper>
      <ViewContainer>
        {children}
      </ViewContainer>
    </ViewWrapper>

  );
};

export default Wrapper;
