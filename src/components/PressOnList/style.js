import styled from "styled-components/native";

export const Press = styled.TouchableOpacity(props => {
    let background = '#49b65d';
    if (props.difficult === 2) background = '#2765f7';
    if (props.difficult === 3) background = '#F26337';

    return {
        background,
        'margin-top': '10px',
        'padding': '15px 5px',
        'width': '100%',
        'align-items': 'center',
        'border-radius': '5px'
    }
});

export const ButtonLabel = styled.Text`
    font-size: 20px;
    color: #EEEEEE;
`

export const Frame = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
    flex-direction: row;
    padding: 20px;
`

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
`
