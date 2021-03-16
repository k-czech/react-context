import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import {theme} from "assets/styles/theme";
import MainTemplate from "../components/templates/MainTemplate";

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <div>Hello</div>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
