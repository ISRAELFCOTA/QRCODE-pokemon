import React from "react";
import { Button, Container, Context, Name } from "./styles";
import { Text } from "react-native";
import pokeWall from "../../../assets/pokemon-go-wallpaper.jpg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const Home = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <Container source={pokeWall}>
      <StatusBar translucent backgroundColor="transparent" />
      <Context>
        <Name>Israel Fernandes Cota</Name>
        <Button onPress={() => navigate("Scan")}>
          <Text>Scanear QRCODE</Text>
        </Button>
      </Context>
    </Container>
  );
};

export default Home;
