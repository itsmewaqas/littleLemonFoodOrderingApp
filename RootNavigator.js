import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onboarding from './components/onboarding';
import home from './components/home';
import profile from './components/profile';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
