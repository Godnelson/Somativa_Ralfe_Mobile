import styled from "styled-components/native";

import { useState } from "react";
import firebaseApp from '../../config/firebaseInit'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {
  Text,
} from "react-native";

//Componentes e estilização

export const Container = styled.View`
  color: white;
  background-color: aliceblue;
  color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tags = styled.Text`
  font-size: 24px;
  align-self: flex-start;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border: 1px solid black;
  width: 80%;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 20px;
`;

export const Submit = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  border-radius: 5px;
  height: 13%;
  width: 40%;
`;


//Componente principal
export function Login({navigation}) {

    //Variaveis
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //Modulo firebase e validação do login
  const auth = getAuth(firebaseApp);

  const loginFirebase = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate('Home')
        return
      })
      .catch((error) => {
        alert("User not found");
        setUser("");
        setPassword("");
      });
  };
  return (
    <Container>
      <ContainerForm>
        <Tags>USER</Tags>
        <Input
          value={user}
          onChangeText={(e) => {
            setUser(e);
          }}
        />
        <Tags>PASSWORD</Tags>
        <Input
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <Submit onPress={loginFirebase}>
          <Text>LOGIN</Text>
        </Submit>
      </ContainerForm>
    </Container>
  );
}
