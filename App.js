import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
