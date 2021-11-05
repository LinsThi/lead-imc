import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: pink;
`;

export const ContainerHeader = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 200px;
  height: 50px;
  background: #fff;

  margin-bottom: 25px;

  border: 1px;
  border-radius: 5px;
  padding-left: 15px;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: #82b6f3;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
`;
