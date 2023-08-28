import React from 'react';
import { View } from 'react-native';
import styles from './styles/styles';
import Vantagem from './Vantagem';
import Punicao from './Punicao';
import Pontuacao from './Pontuacao';
import Botao from './Botao';


const Atleta = ()=>{
    return(
        <View style={styles.viewGeral}>
            <View style={styles.atleta1}>
            <Pontuacao/>
            <Vantagem/>
            <Punicao/>
            </View>
            <View style={styles.atleta2}>
            <Pontuacao />
            <Vantagem/>
            <Punicao/>
            </View>
            

            <Botao/>

        </View>
    )
}

export default Atleta