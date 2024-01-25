import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const Context = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(32)}px ${RFValue(16)}px;
`;
export const Name = styled.Text`
  color: red;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: ${RFValue(20)}px;
  border-radius: ${RFValue(2)}px;
  border-style: solid;
  border-color: #000;
`;
