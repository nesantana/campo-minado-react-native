import React from 'react';
import { Modal } from "react-native";

import PressOnList from '../../components/PressOnList';
import { ContainerCenter } from "../../styles";
import { Frame, Title } from "../../components/PressOnList/style";

const difficuts = [
  {
    value: 1,
    text: 'Fácil'
  },
  {
    value: 2,
    text: 'Intermediario'
  },
  {
    value: 3,
    text: 'Difícil'
  }
]

export default class LevelSelection extends React.Component {
  render() {
    return (
      <Modal
        onRequestClose={ this.props.onCancel }
        visible={ this.props.isVisible }
        animationType='slide'
        transparent={ true }
      >
        <Frame>
          <ContainerCenter padding={ 15 } style={{ backgroundColor: '#eeeeee' }}>
            <Title>Selecione o Nível</Title>

            {
              difficuts.map(item => {
                return(
                  <PressOnList
                    key={item.value}
                    onPressList={this.props.onLevelSelect}
                    difficult={item.value}
                    label={item.text}
                  />
                );
              })
            }

          </ContainerCenter>
        </Frame>
      </Modal>
    );
  }
}
