import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Score from '../components/Score';

type Props = {
    textColor:string,
    
    
}

const Pontuacao = ({textColor}:Props) => {
  const {scoreAtleta1, addScore1, subScore1, resetScore1} = Score()

  return (
    <View style={styles.pontuacao}>
     
      <TouchableOpacity onPress={addScore1}onLongPress={subScore1}>
        <Text style={[styles.textoPrincipal, {color:textColor}]}>{scoreAtleta1}</Text>
        </TouchableOpacity>
        
   
      
    </View>
  );
}

export default Pontuacao;
