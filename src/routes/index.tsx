import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Home from '../screens/Home';
import TaskDetails from '../screens/TaskDetails';
import TaskForm from '../screens/TaskForm';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
      <Stack.Screen name="TaskForm" component={TaskForm} />
    </Stack.Navigator>
  );
}
