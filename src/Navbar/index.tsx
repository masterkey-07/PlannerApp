import React from 'react';
import {Text, View, TouchableHighlight, ImageBackground} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../Components/Button';

const NavItem: React.FC<{
  title: string;
  icon: string;
  path: string;
  navigation?: any;
}> = ({title, icon, path, navigation}) => {
  return (
    <TouchableHighlight
      underlayColor={'rgba(0,0,0,0.3)'}
      onPress={() => {
        navigation.navigate(path);
        navigation.closeDrawer();
      }}>
      <View style={style.navitem}>
        <Icon name={icon} size={24} color="black" />
        <Text style={style.navtext}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const Navbar = ({navigation}) => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('./Us.jpg')}
        resizeMode="cover"
        style={style.header}>
        <Text style={style.title}>Planner da Aninha</Text>
        <Text style={style.dev}>Feito pelo seu Amor</Text>
      </ImageBackground>
      <View>
        <NavItem
          icon="list"
          path="tasks"
          navigation={navigation}
          title="Lista de Tarefas"
        />
        <NavItem
          icon="cogs"
          path="config"
          navigation={navigation}
          title="Configurações"
        />
      </View>
    </View>
  );
};

export default Navbar;
