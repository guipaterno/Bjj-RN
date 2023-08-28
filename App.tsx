import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './src/pages/styles/styles';
import Atleta from './src/pages/Atleta';
import Botao from './src/pages/Botao';

export default function App() {
  return (
   <SafeAreaView style={styles.principal}>
    <View style={styles.containerTempo}>
      <Text style={styles.time}>TIME</Text>
      </View>
      <Atleta/>

      

   </SafeAreaView>
  );
}
