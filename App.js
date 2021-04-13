import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

// components

import MineField from "./src/components/MineField";
import Header from "./src/components/Header";

// screens

import LevelSelection from "./src/screens/LevelSelection";

// Styled

import { ContainerFlexEnd } from './src/styles';

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagUsed
} from "./src/functions";
import params from './src/params';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeeu!', 'Que burro');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você vendeu!!');
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }
  }

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  render() {
    return (
      <ContainerFlexEnd>
        <LevelSelection
          isVisible={ this.state.showLevelSelection }
          onLevelSelect={ this.onLevelSelected }
          onCancel={ () => this.setState({ showLevelSelection: false }) }
        />
        <Header
          flagsLeft={ this.minesAmount() - flagUsed(this.state.board) }
          onNewGame={ () => this.setState(this.createState()) }
          onFlagPress={ () => this.setState({ showLevelSelection: true }) }
        />
        <View style={ styles.board }>
          <MineField
            board={ this.state.board }
            onOpenField={ this.onOpenField }
            onSelectField={ this.onSelectField }
          />
        </View>
      </ContainerFlexEnd>
    )
  };
}

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    backgroundColor: '#AAAAAA'
  }
});
