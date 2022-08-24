import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { cardPics } from "../assets/cardPics";
import React, { useState } from "react";

export const CardHistory = ({history}) => {

let backCount = 0
// press back button
//let cards = history.length <= 8 ? history : history.splice(history.length - 9, 9)


  return (
    <View style={styles.container}>
    <ScrollView style={styles.cardStack} horizontal={true}>
    { history.map((item) => <Image style={styles.imageHistory} source={item.pic}/>)}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

container:{
height: 130,
bottom: 68,
width: '100%'
},

cardStack:{
    backgroundColor: "#202020",
    margin: 1, 
    paddingLeft: 5,
    bottom: 10
},
firstCard: {
  height: 60,
  width: 40,
  top: 31,
  alignSelf: 'flex-start',
  marginRight: 10,
  marginLeft: 10
},
imageHistory: {
  display: 'block',
  height: 60,
  width: 40,
  top: 40,
  alignSelf: 'flex-start',
  margin: 1,
  overflow: 'scroll',
  
}

})