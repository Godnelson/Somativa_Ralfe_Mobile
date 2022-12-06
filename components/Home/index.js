import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: azure;
`

export const Gif = styled.Image`
    width: 100%;
`

export const Message = styled.Text`
    font-size: 32px;
    font-weight: bold;
`

export function Home({navigation}){
    return(
        <Container>
            <Message>
                Você está logado
            </Message>
            <Gif source={require('../../assets/pica.gif')}/>
        </Container>
    )
}