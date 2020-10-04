import React from 'react';

import { Container, Header, HeadTitle, Button, ButtonTitle } from './styles';

import img from '../../assets/pictures/back.jpg';

export default function Home({navigation}) {
  return (
    <Container source={img}>
      <Header>
        <HeadTitle>Good Game, Well Played</HeadTitle>        
      </Header>

      <Button onPress={() => navigation.navigate('Main')}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
    </Container>
  );
};

