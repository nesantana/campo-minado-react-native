import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerFlexEnd = styled(Container)`
  justify-content: center
`

export default {
  Container,
  ContainerFlexEnd
};
