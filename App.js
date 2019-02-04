import React from 'react';
import {
  StyleSheet, View, AsyncStorage, ImageBackground,
} from 'react-native';

import Header from './Header';
import Body from './Body';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const vapor = require('./assets/vapor.jpg');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  componentDidMount() {
    this.recuperarEnTelefono();
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    const { tareas, texto } = this.state;
    const nuevasTareas = [...tareas, { texto, key: Date.now().toString() }];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
  }

  eliminarTarea = (id) => {
    const { tareas } = this.state;
    const nuevasTareas = tareas.filter(tarea => tarea.key !== id);
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
  }

  guardarEnTelefono = (tareas) => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas',
      JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  recuperarEnTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tareas')
      .then((valor) => {
        console.log(valor);
        console.log(JSON.parse(valor));
        if (valor !== null) {
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { texto, tareas } = this.state;

    return (

      <ImageBackground source={vapor} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Header
            cambiarTexto={this.establecerTexto}
            agregar={this.agregarTarea}
            texto={texto}
          />
          <Body
            tareas={tareas}
            eliminar={this.eliminarTarea}
          />
        </View>
      </ImageBackground>
    );
  }
}
