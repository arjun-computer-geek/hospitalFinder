import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from "./components/AboutScreen";
import HomeScreen from "./components/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <HomeScreen />
      <AboutScreen /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="About"
            options={{ title: "Welcome" }}
            component={AboutScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
