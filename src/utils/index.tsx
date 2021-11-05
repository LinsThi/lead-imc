import { Alert } from "react-native";

export function calcIMC(heightIMC: string, weightIMC: string) {
  const heightNumber = parseFloat(heightIMC.replace(',', '.'));
  const weightNumber = parseFloat(weightIMC.replace(',', '.'));

  const imc = weightNumber / (heightNumber * heightNumber);
  
  Alert.alert('Seu IMC é:', `${imc.toFixed(2)}`);
}