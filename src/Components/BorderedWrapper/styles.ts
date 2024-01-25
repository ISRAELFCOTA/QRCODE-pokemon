import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const Content = styled.View``;

export const TopLeftHorizontalBorder = styled.View`
  height: ${RFValue(3)}px;
  width: ${RFValue(70)}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopLeftVerticalBorder = styled.View`
  height: ${RFValue(90)}px;
  width: ${RFValue(3)}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopRightHorizontalBorder = styled.View`
  height: ${RFValue(3)}px;
  width: ${RFValue(70)}px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopRightVerticalBorder = styled.View`
  height: ${RFValue(90)}px;
  width: ${RFValue(3)}px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomLeftHorizontalBorder = styled.View`
  height: ${RFValue(3)}px;
  width: ${RFValue(70)}px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomLeftVerticalBorder = styled.View`
  height: ${RFValue(90)}px;
  width: ${RFValue(3)}px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomRightHorizontalBorder = styled.View`
  height: ${RFValue(3)}px;
  width: ${RFValue(70)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomRightVerticalBorder = styled.View`
  height: ${RFValue(90)}px;
  width: ${RFValue(3)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
