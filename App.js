import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Tab } from "navigation/create";
import { mainScenesList } from "navigation/setNavs";

const App = () => {
  //Not good using key from index. Better use uniq id from back or generate stable id
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={ "About App" }>
        { mainScenesList.map((navProps, key) => <Tab.Screen { ...navProps } key={ key }/>) }
      </Tab.Navigator>
    </NavigationContainer>);
};

export default App;
