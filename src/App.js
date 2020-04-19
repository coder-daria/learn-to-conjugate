import React, { useState, useRef } from 'react';
import 'sanitize.css';

import { useClickOutside } from './utils/useClickOutside';

import {Navigation} from './components/Navigation';
import { Drawer } from './components/Drawer';

import { LandingPage } from './LandingPage';

import { Container, Page } from './App.styles';

function App() {
  const [drawerItem, setDrawerItem] = useState(true);
  const ref = useRef();

  const toggleDrawer = () => {
    setDrawerItem(undefined);
  };

  // @todo - Add to settings
  // useClickOutside((ref), () => {
  //   if(drawerItem && ref) {
  //     setDrawerItem(undefined);
  //   }
  // });

  return (
    <Container>
      <Page isDrawerOpen={drawerItem}>
        <Navigation />
        <LandingPage setSelectedText={setDrawerItem} />
      </Page>
      <Drawer forwardRef={ref} drawerItem={drawerItem} closeDrawer={toggleDrawer} />
    </Container>
  );
};

export default App;
