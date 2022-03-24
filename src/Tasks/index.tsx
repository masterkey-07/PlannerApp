import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TaskSection from './TaskSection';
import {taskTypesColor} from '../Constants';
import {TypeIcon} from '../Constants/types';

const Tab = createMaterialBottomTabNavigator();

const Icon = ({component: Component, name, size}) => (
  <Component color="white" name={name} size={size} />
);

const getOptions = (title: string, color: string, icon: TypeIcon) => ({
  title: title,
  tabBarColor: color,
  tabBarIcon: () => (
    <Icon component={icon.component} name={icon.name} size={icon.size} />
  ),
});

const Tasks = () => {
  return (
    <Tab.Navigator initialRouteName="main">
      <Tab.Screen
        name="school"
        component={TaskSection}
        options={getOptions('Escola', taskTypesColor.school(1), {
          name: 'school',
          component: AwesomeIcon,
          size: 18,
        })}
        initialParams={{data: [], colorTheme: taskTypesColor.school}}
      />
      <Tab.Screen
        name="work"
        component={TaskSection}
        options={getOptions('Marina', taskTypesColor.work(1), {
          name: 'baby',
          component: AwesomeIcon,
          size: 20,
        })}
        initialParams={{data: [], colorTheme: taskTypesColor.work}}
      />
      <Tab.Screen
        name="main"
        component={TaskSection}
        options={getOptions('Principal', taskTypesColor.principal(1), {
          name: 'home',
          component: AwesomeIcon,
          size: 20,
        })}
        initialParams={{data: [], colorTheme: taskTypesColor.principal}}
      />
      <Tab.Screen
        name="college"
        component={TaskSection}
        options={getOptions('Faculdade', taskTypesColor.college(1), {
          name: 'graduation-cap',
          component: AwesomeIcon,
          size: 18,
        })}
        initialParams={{data: [], colorTheme: taskTypesColor.college}}
      />
      <Tab.Screen
        name="personal"
        component={TaskSection}
        options={getOptions('Pessoal', taskTypesColor.personal(1), {
          name: 'face-woman',
          component: MaterialIcon,
          size: 24,
        })}
        initialParams={{data: [], colorTheme: taskTypesColor.personal}}
      />
    </Tab.Navigator>
  );
};

export default Tasks;
