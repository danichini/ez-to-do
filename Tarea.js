import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});


export default class Tarea extends Component {
  render() {
    const { item, eliminar } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>{item.texto}</Text>
        <TouchableOpacity onPress={() => { eliminar(item.key); }}>
          <Ionicons
            name="md-trash"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
