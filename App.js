import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import firebaseApp from './config/firebaseInit'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  Login
} from "./components/Login";
import {Home} from './components/Home'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
