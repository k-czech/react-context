import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import Dashboard from './Dashboard';
import AddPlayers from './AddPlayers';
import PlayersProvider from 'providers/PlayersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <PlayersProvider>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/add-players">
                <AddPlayers />
              </Route>
            </Switch>
          </PlayersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
