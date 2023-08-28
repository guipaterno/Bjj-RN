import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    principal: {
      backgroundColor: "black",
      width:"100%",
      height:"100%",
      padding:20,
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
        backgroundColor:"white",
        marginTop:10,
        width:"100%",
        height:240,
        flex:1,
    },

    atleta1:{
        backgroundColor:"blue",
        width:"auto",
        height:140,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20,

    },

    
    atleta2:{
        backgroundColor:"purple",
        width:"auto",
        height:140,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    pontuacao:{
        width:90,
        height:"90%",
        marginHorizontal:10,
        backgroundColor:"green",
    },
    vantagem:{
        width:90,
        height:"90%",
        marginHorizontal:10,
        backgroundColor:"yellow",
    },
    punicao:{
        width:90,
        height:"90%",
        marginHorizontal:10,
        backgroundColor:"red",
    },
    textoPrincipal:{
        color:"black",
        fontWeight:"bold",
        fontSize:100,
        textAlign:"center",


    },
    button:{
        width:80,
        height:45,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        marginTop:25,
        backgroundColor:"gray"
    }
  
  });

  export default styles;
  