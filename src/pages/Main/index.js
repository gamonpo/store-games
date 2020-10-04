import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';

import { AppLoading } from 'expo'

import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Feather } from '@expo/vector-icons';
import { Container, Header,Car, HeaderTitle, Item, Photo, Info, Title,Action, Add, Remove } from './styles';

import img from '../../assets/pictures/back.jpg';

import sm from '../../assets/pictures/super-mario-odyssey.png'
import cod from '../../assets/pictures/call-of-duty-infinite-warfare.png'
import wit from '../../assets/pictures/the-witcher-iii-wild-hunt.png'
import cw from '../../assets/pictures/call-of-duty-wwii.png'
import mw from '../../assets/pictures/terra-media-sombras-de-mordor.png'
import mk from '../../assets/pictures/mortal-kombat-xl.png'
import sd from '../../assets/pictures/shards-of-darkness.png'
import hzd from '../../assets/pictures/horizon-zero-dawn.png'
import ff from '../../assets/pictures/fifa-18.png'

export default function Main() {
  const games = [
    {
      "id": '312',
      "name": "Super Mario Odyssey",
      "price": 197.88,
      "score": '100',
      "image": sm
    },
    {
      "id": '201',
      "name": "Call Of Duty Infinite Warfare",
      "price": 49.99,
      "score": '80',
      "image": cod

    },
    {
      "id": '102',
      "name": "The Witcher III Wild Hunt",
      "price": 119.5,
      "score": '250',
      "image": wit

    },
    {
      "id": '99',
      "name": "Call Of Duty WWII",
      "price": 249.99,
      "score": '205',
      "image": cw

    },
    {
      "id": '12',
      "name": "Mortal Kombat XL",
      "price": 69.99,
      "score": '150',
      "image": mk

    },
    {
      "id": '74',
      "name": "Shards of Darkness",
      "price": 71.94,
      "score": '400',
      "image": sd

    },
    {
      "id": '31',
      "name": "Terra Média: Sombras de Mordor",
      "price": 79.99,
      "score": '50',
      "image": mw

    },
    {
      "id": '420',
      "name": "FIFA 18",
      "price": 195.39,
      "score": '325',
      "image": ff

    },
    {
      "id": '501',
      "name": "Horizon Zero Dawn",
      "price": 115.8,
      "score": '290',
      "image": hzd
    }
  ]

  const [valor, setValor] = useState(0)
  const [frete, setFrete] = useState(0)
  
  const addItem = ({ price }) => {
    if(valor <= 250) {
      setFrete(frete + 10)
      const resultAdd = valor + price + frete
      setValor(resultAdd)

    } else {
      const resultAdd= valor + price
      setValor(resultAdd)
    }
  }
  
  const removeItem = ({ price }) => {
    if(valor - price < 0) {
      setFrete(0)
      setValor(0)
      Alert.alert("Seu carrinho não tem este jogo!")
    } else {
      if(frete === 0) {
        const resultRemove  = valor - price
        setValor(resultRemove)
      } else {
        const resultRemove  = valor - price - frete
        setFrete(frete - 10)
        setValor(resultRemove)
      }
      
    }
    
  }

  useEffect(() => {
    
  },[valor])
 
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  const renderItem = ({item}) => (
    <Item>
        <Action>
          <Add onPress={() => addItem(item)}>
           <Feather name="plus-circle" size={24} color="#bf94ff" />
          </Add>
          <Remove onPress={() => removeItem(item)}>
            <Feather name="minus-circle" size={24} color="#bf94ff" />
          </Remove>
        </Action>
        

        <Photo source={item.image} />
        
        <Info>
          <Title style={{ fontFamily: 'Quicksand_400Regular' }}>{item.name}</Title>
          <Title style={{ fontFamily: 'Quicksand_400Regular' }}>Score: {item.score}</Title>
          <Title style={{ fontFamily: 'Quicksand_400Regular' }}>R$ {item.price}</Title>
        </Info>   
    </Item>
  );
  
  return (
    <Container source={img}>
      <Header>
        <HeaderTitle style={{ fontFamily: 'Quicksand_400Regular' }}>
          Total: R$ {valor.toFixed(2)} (Frete: R$ {frete})
        </HeaderTitle>        

        <Car onPress={() => Alert.alert("Shop cart!")}>
          <Feather name="shopping-cart" size={24} color="#eee" />
        </Car>
      </Header>

      <FlatList 
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
      />  
    </Container>
  );
};