import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    principal: {
      backgroundColor: "black",
      width:"100%",
      height:"100%",
      padding:20,
      flex:1,
    },
    containerTempo:{
      backgroundColor:"white",
      width:"100%",
      height:90,
      justifyContent:"center",
      alignItems:"center",
    },
    time:{
      fontSize:18,
      color:"green",
      fontWeight:"bold",
    },
    viewGeral:{
        backgroundColor:"black",
        marginTop:10,
        width:"100%",
        height:240,
        flex:1,
    },

    atleta1:{
        backgroundColor:"white",
        width:"auto",
        height:180,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20,

    },

    
    atleta2:{
        backgroundColor:"rgb(23, 119, 228)",
        width:"auto",
        height:180,
        flexDirection:"row",
        justifyContent:"space-between",
        

    },
    pontuacao:{
        width:90,
        height:"80%",
        marginHorizontal:10,
        backgroundColor:" rgb(5, 156, 81)",
    },
    vantagem:{
        width:90,
        height:"80%",
        marginHorizontal:10,
        backgroundColor:"rgb(216, 216, 33)",
    },
    punicao:{
        width:90,
        height:"80%",
        marginHorizontal:10,
        backgroundColor:"rgb(233, 24, 24)",
    },
    textoPrincipal:{
        color:"black",
        fontWeight:"bold",
        fontSize:100,
        textAlign:"center",
       


    },
    containerBotao:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        width:"auto",
        height:200,
    },
    botao:{
        width:80,
        height:45,
        justifyContent:"center",
        borderRadius:15,
        backgroundColor:"gray",
    },
    textoBotao:{
        color:"black",
        textAlign:"center",
    },
  });

  export default styles;
  