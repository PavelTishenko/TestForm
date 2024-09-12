import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Form from '@/screens/FormScreen';
import ResultScreen from '@/screens/ResultScreen';

export const enum Screens {
  FORM = 'form',
  RESULT = 'result',
}

export type RootStackParamList = {
  [Screens.FORM]: undefined;
  [Screens.RESULT]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Screens.FORM}>
        <RootStack.Screen
          name={Screens.FORM}
          component={Form}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={Screens.RESULT}
          component={ResultScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
