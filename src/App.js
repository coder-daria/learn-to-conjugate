import React, { useState, useRef } from 'react';
import { ThemeProvider, createGlobalStyle  } from 'styled-components';

import 'sanitize.css';

import { useClickOutside } from './utils/useClickOutside';

import {Navigation} from './components/Navigation';
import { Drawer } from './components/Drawer';

import { LandingPage } from './LandingPage';
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

function App() {
  const [selectedText, setSelectedText] = useState(undefined);
  const ref = useRef();

  const closeDrawer = () => {
    setSelectedText(undefined);
  };

  // @todo - Add to settings
  // useClickOutside((ref), () => {
  //   if(drawerItem && ref) {
  //     setDrawerItem(undefined);
  //   }
  // });

  //todo - It will be changed when settings are applied
  const theme = {
    standard: "standard",
    purple: "purple",
  };

  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle theme={theme.standard} />
      <Container>
        <Page isDrawerOpen={selectedText}>
          <Navigation />
          <LandingPage setSelectedText={setSelectedText} />
        </Page>
        <Drawer forwardRef={ref} selectedText={selectedText} closeDrawer={closeDrawer} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
