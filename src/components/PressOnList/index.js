import React from 'react';
import { Press, ButtonLabel } from './style';

export default class PressOnList extends React.Component {
  render() {
    return (
      <Press
        difficult={this.props.difficult}
        onPress={() => this.props.onPressList(this.props.difficult / 10)}
      >
        <ButtonLabel>{ this.props.label }</ButtonLabel>
      </Press>
    );
  }
}
