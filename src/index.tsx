import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tasks from './Tasks';
import Config from './Config';
import Navbar from './Navbar';

const Drawer = createDrawerNavigator();

const Plannner = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={Navbar}>
        <Drawer.Screen
          name="tasks"
          component={Tasks}
          options={{title: 'Tarefas'}}
        />
        <Drawer.Screen
          name="config"
          component={Config}
          options={{title: 'Configurações'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Plannner;
