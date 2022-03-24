import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import TaskList from './TaskList';

const Tabs = createMaterialTopTabNavigator();

const TaskSection = ({route}) => {
  const color = route.params.colorTheme;

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {backgroundColor: color(0.25)},
        tabBarIndicatorStyle: {backgroundColor: color(1)},
      }}>
      <Tabs.Screen
        name="today"
        component={TaskList}
        options={{title: 'Hoje', lazy: true, lazyPreloadDistance: 0}}
        initialParams={{colorTheme: color}}
      />
      <Tabs.Screen
        name="all"
        component={TaskList}
        options={{title: 'Tudo', lazy: true, lazyPreloadDistance: 0}}
        initialParams={{colorTheme: color}}
      />
    </Tabs.Navigator>
  );
};

export default TaskSection;
