import React, { useRef } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle  } from 'styled-components';
import 'sanitize.css';

// @todo - Add to settings
// import { useClickOutside } from './common/utils/useClickOutside';

import { Drawer } from './common/components/Drawer';

import { Routes } from './Routes';
import { Navigation } from './layouts';
import { Container, Page } from './App.styles';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: #FCF7FF;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #908C96;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-image: #7C7881;
  }
`

function App () {
  const ref = useRef();

  // @todo - Add to settings
  // useClickOutside((ref), () => {
  //   if(drawerItem && ref) {
  //     setDrawerItem(undefined);
  //   }
  // });

  return (
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Router>
          <Container>
            <Page>
              <Navigation />
              <Routes />
            </Page>
            <Drawer forwardRef={ref} />
          </Container>
        </Router>
      </ThemeProvider>
  );
};

export default App;
