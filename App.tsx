import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './src/styles/styles';
import Atleta from './src/pages/Atleta';
import Botao from './src/pages/Botao';
import CountDown from 'react-native-countdown-component';



export default function App() {

  const [isCounting, setIsCounting] = useState(false); // Estado para controlar a contagem
  const [tempoRestante, setTempoRestante] = useState((5*60)); // Tempo total em segundos


   

  const start = () => {
    setIsCounting(true); // Inicia a contagem
  };

  const pause = () => {
    setIsCounting(false); // Pausa a contagem
  };
  const reset = () => {
    setIsCounting(false); // Pausa a contagem, se estiver em execução
    setTempoRestante(5 * 60);  
        
  };

  



  return (
   <SafeAreaView style={styles.principal}>
      <View style={styles.containerTempo}>
      <Text style={styles.time}>CRONOMETRO</Text>
     <CountDown style={styles.time}
      
      size={22}
      until={tempoRestante}
      onFinish={() => alert('Acabou')}
      digitStyle={{backgroundColor: '#FFF'}}
      digitTxtStyle={{color: "green"}}
      separatorStyle={{color: "green"}}
      timeToShow={['M', 'S']}
      timeLabels={{m: null, s: null}}
      showSeparator
      running={isCounting}
    
  /> 
   
      </View>
      <Atleta/>
      <View  style={styles.containerBotao}>
      
      
          
           <Botao labelButton="INICIAR" onpress={start} />
            <Botao labelButton="PAUSAR" onpress={pause} />
           {/*  <Botao labelButton="ZERAR" onpress={reset} /> */}
          
        
        
        
      </View>


   </SafeAreaView>
  );
}
