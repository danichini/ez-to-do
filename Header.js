import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#aa3399',
    borderRadius: 16,
    borderWidth: 2,
    marginTop: 28,
  },
  texto: {
    padding: 16,
    fontSize: 24,
    color: '#fff',
  },
});

export default class Header extends Component {
  render() {
    const { cambiarTexto, agregar, texto } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          placeholder="Escribe algo pls..."
          onChangeText={cambiarTexto}
          onSubmitEditing={agregar}
          value={texto}
        />
      </View>
    );
  }
}
