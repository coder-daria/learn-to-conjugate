import React from 'react';

import { Container } from './Drawer.styles';

const Drawer = ({ drawerItem, closeDrawer }) => (
  <Container isOpen={drawerItem}>
    <div>
      <span>Selected text: {drawerItem}</span>
      <button onClick={closeDrawer}>Close</button>
    </div>
    <div>
      Content
    </div>
  </Container>
);


export default Drawer;
