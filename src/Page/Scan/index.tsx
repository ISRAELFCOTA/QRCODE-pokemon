import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, TouchableOpacity } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import {
  CodeScannerWrapper,
  Container,
  Content,
  Load,
  ScanInfo,
} from "./styles";
import { pokeService } from "../../services/api";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderedWrapper } from "../../Components/BorderedWrapper";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const Scan: React.FunctionComponent = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isLoadingScan, setIsLoadingScan] = useState(false);
  const navigation = useNavigation();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const goBack = useCallback(() => {
    navigate("Home");
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");

      if (status === "denied") {
        goBack();
        return Alert.alert(
          "Pokemon Teste",
          "Permita acesso à câmera para poder escanear o QR Code."
        );
      }
    })();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = useCallback(
    async ({ data }) => {
      setScanned(true);
      try {
        setIsLoadingScan(true);

        const id = parseInt(data.split(": ")[1]);
        const response = await pokeService.getPoke(id);
        navigate("PokeDetails", { poke: response.data });
      } catch (error) {
        console.log(error);
        Alert.alert("testeRemopt", "Não foi possível escanear o QR Code.");
      } finally {
        setIsLoadingScan(false);
      }
    },
    [navigation]
  );

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity onPress={goBack}>
        <Feather name="chevron-left" size={RFValue(28)} color="#fff" />
      </TouchableOpacity>
      <Content>
        {hasPermission && (
          <BorderedWrapper>
            <CodeScannerWrapper>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ flex: 1 }}
              />
            </CodeScannerWrapper>
          </BorderedWrapper>
        )}
        {isLoadingScan ? (
          <Load color="#fff" />
        ) : (
          <ScanInfo>Aponte a câmera para o código QR</ScanInfo>
        )}
      </Content>
    </Container>
  );
};
