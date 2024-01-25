import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const Container = styled.ImageBackground`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(35)}px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonVoltar = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const PokeId = styled.Text`
  text-align: center;
  align-self: center;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: #e3e949;
`;

export const PokeName = styled.Text`
  color: #e3e949;
  font-size: ${RFValue(20)}px;
`;

export const SpritePoke = styled.Image`
  align-self: center;
  height: ${RFValue(400)}px;
  width: ${RFValue(400)}px;
  margin-top: ${RFValue(80)}px;
`;

export const DetailContent = styled.View`
  gap: ${RFValue(16)}px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(8)}px;
`;

export const DetailName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  text-transform: uppercase;
  color: #e3e949;
`;

export const DetailType = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  text-transform: capitalize;
  color: #e3e949;
`;

export const DetailTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #e3e949;
`;
