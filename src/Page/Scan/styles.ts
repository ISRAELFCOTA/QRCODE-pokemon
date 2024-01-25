import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
  justify-content: space-between;
`;
export const Context = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.Text`
  color: red;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CodeScannerWrapper = styled.View`
  height: ${RFValue(430)}px;
  width: ${RFValue(240)}px;
`;

export const ScanInfo = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: 500;
  color: #fff;
  margin-top: ${RFValue(16)}px;
`;

export const Load = styled.ActivityIndicator`
  margin-top: ${RFValue(16)}px;
`;
