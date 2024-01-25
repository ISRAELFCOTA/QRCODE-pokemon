import React from "react";
import {
  BottomLeftHorizontalBorder,
  BottomLeftVerticalBorder,
  BottomRightHorizontalBorder,
  BottomRightVerticalBorder,
  Container,
  Content,
  TopLeftHorizontalBorder,
  TopLeftVerticalBorder,
  TopRightHorizontalBorder,
  TopRightVerticalBorder,
} from "./styles";

interface Props {
  children: React.ReactNode;
}

export const BorderedWrapper = React.memo(({ children }: Props) => {
  return (
    <Container>
      <Content>{children}</Content>
      <TopLeftHorizontalBorder />
      <TopLeftVerticalBorder />
      <TopRightHorizontalBorder />
      <TopRightVerticalBorder />
      <BottomLeftHorizontalBorder />
      <BottomLeftVerticalBorder />
      <BottomRightHorizontalBorder />
      <BottomRightVerticalBorder />
    </Container>
  );
});
