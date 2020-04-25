import React, { useState, useRef } from 'react';
import 'sanitize.css';


import { useClickOutside } from './utils/useClickOutside';

import {Navigation} from './components/Navigation';
import { Drawer } from './components/Drawer';

import { LandingPage } from './LandingPage';

import { Container, Page } from './App.styles';

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

  return (
    <Container>
      <Page isDrawerOpen={selectedText}>
        <Navigation />
        <LandingPage setSelectedText={setSelectedText} />
      </Page>
      <Drawer forwardRef={ref} selectedText={selectedText} closeDrawer={closeDrawer} />
    </Container>
  );
};

export default App;
