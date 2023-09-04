import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

type PropsBotao ={
    labelButton:string;
    onpress:()=>void;
}

const Botao = ({labelButton, onpress}:PropsBotao)=>{
    return(
       

<TouchableOpacity
     style={styles.botao}
     onPress={onpress}
>
    <Text
      style={styles.textoBotao}>
      {labelButton}
    </Text>
</TouchableOpacity>
        
    )
}

export default Botao;