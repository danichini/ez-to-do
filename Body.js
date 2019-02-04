import React, { Component } from 'react';
import {
  Text, StyleSheet, View, FlatList,
} from 'react-native';
import Tarea from './Tarea';

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#e33366',
  },
});

export default class Body extends Component {
  render() {
    const { tareas } = this.props;
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={tareas}
          renderItem={({ item }) => <Tarea item={item} />
          }
        />
      </View>
    );
  }
}
