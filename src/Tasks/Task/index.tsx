import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {months} from '../../Constants';
import CheckBox from '@react-native-community/checkbox';

const Task = ({color}) => {
  const [open, setOpen] = useState(false);

  const date = new Date();

  const styles = StyleSheet.create({
    TaskArea: {
      marginBottom: 20,
    },
    TaskHeader: {
      position: 'relative',
      flexDirection: 'row',
      paddingVertical: 18,
      paddingHorizontal: 18,
      paddingRight: 150,
      marginHorizontal: 12,
      backgroundColor: color(1),
      elevation: 12,
      borderRadius: 6,
      alignItems: 'center',
    },
    ArrowButton: {
      transform: open ? [{rotate: '-90deg'}] : [],
    },
    TaskTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 12,
      fontFamily: 'serif',
      textShadowColor: 'white',
      textShadowRadius: 3,
    },
    Check: {
      position: 'absolute',
      right: 12,
      padding: 5,
      borderRadius: 100,
      borderColor: 'white',
      borderWidth: 2,
    },
    TaskContent: {
      padding: 15,
      marginHorizontal: 12,
      marginTop: -9,
      backgroundColor: color(0.5),
      borderRadius: 6,
    },
    Description: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'serif',
    },
  });

  return (
    <View style={styles.TaskArea}>
      <View style={styles.TaskHeader}>
        <TouchableOpacity
          style={styles.ArrowButton}
          onPress={() => setOpen(!open)}>
          <Icon size={24} name="arrow-back-ios" color="white" />
        </TouchableOpacity>
        <Text style={styles.TaskTitle}>Viagem a Fazenda com Familia</Text>
        <View style={styles.Check}>
          {open && <Icon name="check" color="white" size={24} />}
        </View>
      </View>
      {open && (
        <View style={styles.TaskContent}>
          <TextInput
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            multiline
            onEndEditing={() => false}
            style={styles.Description}
          />
          <Text style={styles.Description}>
            {'\n'}
            Das {date.getHours()}:{date.getMinutes()} do dia {date.getDate()} de{' '}
            {months[date.getMonth()]}
          </Text>
          <Text>Repetido</Text>
          <Text>Classificação</Text>
          <Text>Sub Tarefas</Text>
        </View>
      )}
    </View>
  );
};

export default Task;
