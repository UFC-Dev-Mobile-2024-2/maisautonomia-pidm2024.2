import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/src/screens/HomeScreen";
import AddMedicationScreen from "./app/src/screens/AddMedicationScreen"; 
import LoginScreen from "./app/src/Components/Login/LoginScreen";
import RegisterScreen from "./app/src/screens/RegisterScreen";
import BottomNavigationBar from "./app/src/Components/NavigationBar/BottomNavigationBar.jsx";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AdicionarMedicamento" component={AddMedicationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
      <BottomNavigationBar />
    </NavigationContainer>
  );
}
