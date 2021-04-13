import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Mine from '../Mine';
import Flag from '../Flag';

import params from '../../params';

export default class Index extends React.Component {
  render() {

    const {mined, opened, nearMines, exploded, flagged} = this.props || null;

    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (!opened && !exploded) styleField.push(styles.regular);

    let color = null;
    if (nearMines) {
      if (nearMines === 1) color = '#2A28D7';
      if (nearMines === 2) color = '#2B520F';
      if (nearMines > 2 && nearMines < 6) color = '#F9060A';
      if (nearMines >= 6) color = '#F221A9';
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.props.onOpen}
        onLongPress={this.props.onSelect}
      >
        <View style={styleField}>
          {
            !mined && opened && nearMines > 0
              ? <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
              : false
          }
          {
            mined && opened
              ? <Mine />
              : false
          }
          {
            flagged && !opened
              ? <Flag />
              : false
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999999',
    borderColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#333333',
    borderBottomColor: '#333333',
  },
  opened: {
    backgroundColor: '#999999',
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
});
