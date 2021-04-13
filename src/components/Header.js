import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default class Header extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.flagContainer }>
          <TouchableOpacity
            onPress={ this.props.onFlagPress }
            style={ styles.flagButton }
          >
            <Flag bigger />
          </TouchableOpacity>
          <Text style={ styles.flagsLeft }>= { this.props.flagsLeft }</Text>
        </View>
        <TouchableOpacity
          onPress={ this.props.onNewGame }
          style={ styles.button }
        >
          <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    padding: 20
  },
  button: {
    backgroundColor: '#999999',
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDDDDD',
    fontWeight: 'bold'
  }
})
