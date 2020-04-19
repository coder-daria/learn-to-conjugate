import React, { useState } from 'react';
import 'sanitize.css';

import {Navigation} from './components/Navigation';
import { Drawer } from './components/Drawer';

import LandingPage from './landingPage/LandingPage';

import { Container, Page } from './App.styles';

function App() {
  const [drawerItem, setDrawerItem] = useState(undefined);

  const toggleDrawer = () => {
    setDrawerItem(undefined);
  };

  return (
    <Container>
      <Page isDrawerOpen={drawerItem}>
        <Navigation />
        <LandingPage setSelectedText={setDrawerItem} />
      </Page>
      <Drawer drawerItem={drawerItem} closeDrawer={toggleDrawer} />
    </Container>
  );
}

export default App;
