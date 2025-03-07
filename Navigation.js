import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/src/screens/HomeScreen";
import AddMedicationScreen from "./app/src/screens/AddMedicationScreen"; // Import correto

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AdicionarMedicamento" component={AddMedicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
