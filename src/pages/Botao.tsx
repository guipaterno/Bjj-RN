import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/styles';


const Botao = ({labelButton, onpress}:PropsBotao)=>{
    return(
<TouchableOpacity
     style={styles.button}
     onPress={onpress}
>
    <Text
      style={styles.textBtn}>
      {labelButton}
    </Text>
</TouchableOpacity>
    )
}

export default Botao;