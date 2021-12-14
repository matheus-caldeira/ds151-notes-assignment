// In App.js in a new project

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateNoteButton from '../components/CreateNoteButton';

import HomeScreen from '../screen/HomeScreen'
import CreateScreen from '../screen/CreateScreen'
import ShowScreen from '../screen/ShowScreen'
import EditScreen from '../screen/EditScreen'

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: _ => <CreateNoteButton navigation={navigation}/>
        })}/>
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

export default AppRoutes;