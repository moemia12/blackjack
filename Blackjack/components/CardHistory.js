import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { cardPics } from "../assets/cardPics";
import React, { useState } from "react";

export const CardHistory = ({currentPic, history}) => {

  console.log('in component', history)
  return (
    <View style={styles.cardStack}>

    
     <Image style={styles.image} source={currentPic}/> 
    
    { history.map(
      (item) => 
      <Image style={styles.imageHistory} source={item.pic}/>

    )}
      </View>
  );
};

const styles = StyleSheet.create({

cardStack:{
    bottom: 106,
    width: 'max-width',
    height: 100,
    backgroundColor: "#202020",
    margin: 1, 
},
image: {
  height: 60,
  width: 40,
  top: 10,
  alignSelf: 'flex-end',
  marginRight: 10
},
imageHistory: {
  display: 'block',
  height: 60,
  width: 40,
  top: 30,
  alignSelf: 'flex-end',
  overflow: 'scroll',
  display: 'inline-block'
}

})