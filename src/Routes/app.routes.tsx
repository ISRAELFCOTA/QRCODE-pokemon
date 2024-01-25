import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Page/Home";
import { Scan } from "../Page/Scan";
import { NavigationContainer } from "@react-navigation/native";
import PokeDetails from "../Page/PokeDetails";

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <App.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <App.Screen
          name="Home"
          component={Home}
          options={{ presentation: "transparentModal" }}
        />
        <App.Screen
          name="Scan"
          component={Scan}
          options={{ presentation: "transparentModal" }}
        />
        <App.Screen
          name="PokeDetails"
          component={PokeDetails}
          options={{ presentation: "transparentModal" }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};
