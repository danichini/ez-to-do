import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});


export default class Tarea extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>{item.texto}</Text>
        <Ionicons
          name="md-trash"
          size={30}
          color="black"
        />
      </View>
    );
  }
}
