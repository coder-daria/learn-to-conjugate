import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDrawer } from '../../../redux/utils/drawer';

import { SuccessButton, CancelButton } from '../../styles/Button.styles';

import {
  Conjugations,
  Container,
  Content,
  Footer,
  Header,
  Person,
  SelectedWord,
  TenseContainer,
  TenseName,
  Tenses,
} from './Drawer.styles';

const Drawer = () => {
  const { isDrawerVisible, selectedText } = useSelector(state => state.landingPageReducer);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    toggleDrawer({ dispatch })
  };
  
  return (
    <Container isOpen={isDrawerVisible}>
      <Header>
        <span>Selected word:</span>
        <SelectedWord>{selectedText?.name}</SelectedWord>
      </Header>
      <Content>
        {
          selectedText && Object.keys(selectedText.tenses).map((keyName) => (
            <TenseContainer key={keyName}>
              <TenseName>{keyName}</TenseName>
              <Tenses>
                {selectedText.tenses[keyName].map(({ person, form }, index) => (
                  <Conjugations key={keyName + index}>
                    <Person>{person}</Person>
                    <span>{form}</span>
                  </Conjugations>
                ))}
                </Tenses>
            </TenseContainer>
          ))
        }
      </Content>
      <Footer>
        <CancelButton onClick={closeDrawer}>Cancel</CancelButton>
        <SuccessButton>Save</SuccessButton>
      </Footer>
    </Container>
  );
}

export default Drawer;
