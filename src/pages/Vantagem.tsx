import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Score from '../components/Score';

type Props = {
  textColor:string,
  
}

const Vantagem = ({textColor}:Props) =>{

    const {scoreAtleta1, addScore1, subScore1} = Score()

    return (
      <View style={styles.vantagem}>
       
        <TouchableOpacity onPress={addScore1}onLongPress={subScore1}>
          <Text style={[styles.textoPrincipal, {color:textColor}]}>{scoreAtleta1}</Text>
          </TouchableOpacity>
     
        
      </View>
    );
  }

export default Vantagem;