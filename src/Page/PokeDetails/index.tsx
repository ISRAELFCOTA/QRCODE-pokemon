import React, { useCallback } from "react";
import {
  ButtonVoltar,
  Container,
  Content,
  DetailContent,
  DetailName,
  DetailTitle,
  Header,
  PokeName,
  SpritePoke,
  Wrapper,
} from "./styles";
import pokeWall from "../../../assets/pokemon-go-wallpaper.jpg";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PokeDto } from "../../Dto/pokemon";
import { pokeService } from "../../services/api";

interface RouteParams {
  poke: PokeDto;
}

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const PokeDetails: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const route = useRoute();
  const { poke } = route.params as RouteParams;
  const goBack = useCallback(() => {
    navigate("Home");
  }, []);

  const [pokeDetails, setPokeDetails] = React.useState(poke);
  React.useEffect(() => {
    const loadPoke = async () => {
      try {
        const { data } = await pokeService.getPoke(poke.id);
        setPokeDetails(data);
      } catch (error) {
        console.error("Erro ao carregar detalhes do Pokémon:", error);
      }
    };

    loadPoke();
  }, [poke.id]);

  return (
    <Container source={pokeWall}>
      <StatusBar translucent backgroundColor="transparent" />
      <Content>
        <Header>
          <ButtonVoltar></ButtonVoltar>
          <PokeName> ID: {pokeDetails.id}</PokeName>
        </Header>
        <SpritePoke
          source={{
            uri: pokeDetails.sprites.front_default,
            cache: "only-if-cached",
          }}
        />
        <DetailContent>
          <Wrapper>
            <DetailTitle>Nome: </DetailTitle>
            <DetailName>{pokeDetails.name}</DetailName>
          </Wrapper>
          <Wrapper>
            <DetailTitle>Type: </DetailTitle>
            <DetailName>{pokeDetails.types[0].type.name}</DetailName>
          </Wrapper>
        </DetailContent>
      </Content>
    </Container>
  );
};

export default PokeDetails;