import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text } from "react-native";
import { AboutAppScene } from "./src/scenes/aboutApp";

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ "About App" } component={ AboutAppScene }/>
      </Tab.Navigator>
    </NavigationContainer>);
};

export default App;
