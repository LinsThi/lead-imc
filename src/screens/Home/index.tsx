import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import {calcIMC} from '../../utils';

import { Container, ContainerHeader, Input, Button } from './styles';

export function Home() {
  const [heightPeople, setHeightPeople] = useState('');
  const [weightPeople, setWeightPeople] = useState('');

  return(
      <Container>
        <ContainerHeader>
          <Text>Calcule seu IMC</Text>
        </ContainerHeader>
          <Input placeholder="Altura" value={heightPeople} onChangeText={setHeightPeople} keyboardType="numeric"/>

          <Input placeholder="Peso" value={weightPeople} onChangeText={setWeightPeople} keyboardType="numeric"/>

          <Button onPress={() => calcIMC(heightPeople, weightPeople)}>
              <Text>Calcular</Text>
          </Button>
      </Container>
  );
}