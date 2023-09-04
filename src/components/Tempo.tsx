import React from 'react';
import {Text, View } from 'react-native';
import styles from '../styles/styles';
import CountDown from 'react-native-countdown-component';
import Botao from '../pages/Botao';
import App from '../../App';


const Tempo = ()=>{
    return(
<View style={styles.containerTempo}>
      <Text style={styles.time}>CRONOMETRO</Text>
     <CountDown style={styles.time}
      
    until={300}
    timeToShow={['M','S']}
    timeLabels={{ m: '', s: ''}}
    onFinish={() => alert('Terminado!')}
    onPress={start}
    size={20}
    digitStyle ={{
      backgroundColor:"red"
    }}
    digiTextStyle = {{color:"yellow"}}
    timeLabelStyle = {{color:"blue", fontWeight:"bold"}}
    separatorStyle = {{color:"purple"}}
    
    
  /> 
   
      </View>

    )
}

export default Tempo;