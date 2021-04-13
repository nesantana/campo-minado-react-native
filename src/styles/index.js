import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ContainerFlexEnd = styled(Container)`
  justify-content: flex-end;
`

export const ContainerCenter = styled(Container)`
  justify-content: center;
  align-items: center;
  paddingVertical: ${ props => props.padding }px;
  paddingHorizontal: ${ props => props.padding }px;
`
