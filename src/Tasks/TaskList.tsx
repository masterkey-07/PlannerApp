import React from 'react';
import {Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import Task from './Task';

const TaskList = ({
  route: {
    params: {colorTheme: color},
  },
}) => {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: color(0.2), paddingVertical: 12},
  });

  return (
    <ScrollView style={styles.container}>
      {Array(10)
        .fill(10)
        .map(_ => (
          <Task color={color} />
        ))}
    </ScrollView>
  );
};

export default TaskList;
