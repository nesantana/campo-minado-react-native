import React from 'react';
import {View, StyleSheet} from "react-native";
import Field from "./Field";

export default class MineField extends React.Component {
  render() {
    const rows = this.props.board.map((row, r) => {
      const columns = row.map((field, c) => {
        return (
          <Field
            {...field}
            key={c}
            onOpen={() => this.props.onOpenField(r, c)}
            onSelect={() => this.props.onSelectField(r, c)}
          />
        )
      })
      return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    });

    return <View style={styles.container}>{rows}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee'
  }
})
