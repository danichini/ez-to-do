import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TextInput,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#aa3399',
  },
  texto: {
    padding: 16,
    fontSize: 24,
  },
});

export default class Header extends Component {
  render() {
    const { cambiarTexto, agregar, texto } = this.props;
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          style={styles.texto}
          placeholder="Aqui escribe tu texto..."
          onChangeText={cambiarTexto}
          onSubmitEditing={agregar}
          value={texto}
        />
      </View>
    );
  }
}
