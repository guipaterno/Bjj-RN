import React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import Vantagem from './Vantagem';
import Punicao from './Punicao';
import Pontuacao from './Pontuacao';


const Atleta = ()=>{
    return(
        <View style={styles.viewGeral}>
               
            <View style={styles.atleta1}>
                <Pontuacao textColor="black"/>
                <Vantagem textColor="black"/>
                <Punicao textColor="black"/>
            </View>


            <View style={styles.atleta2}>
                <Pontuacao textColor="white"/>
                <Vantagem textColor="white"/>
                <Punicao textColor="white"/>
            </View>
            
           
       

        </View>
    )
}

export default Atleta