import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Button } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { Container } from "./styles";
import { pokeService } from "../../services/api";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const Scan: React.FunctionComponent = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isLoadingScan, setIsLoadingScan] = useState(false);
  const navigation = useNavigation();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");

      if (status === "denied") {
        handleGoBack();
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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && (
        <Button
          title="Toque na tela novamente"
          onPress={() => setScanned(false)}
        />
      )}
    </Container>
  );
};
