import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e33366',
  },
});

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
      </View>
    );
  }
}
