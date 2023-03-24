import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { cardPics } from "../assets/cardPics";
import React, { useRef } from "react";

export const CardHistory = ({history}) => {
  const scrollViewRef = useRef()

  return (
    <View style={styles.container}>
    <ScrollView 
    ref={scrollViewRef}
    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    style={styles.cardStack} 
    horizontal={true}
    >
    { history.map((item) => <Image style={styles.imageHistory} source={item.pic}/>)}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

container:{
backgroundColor: "#202020",
height: 130,
bottom: 68,
width: '100%',

},

cardStack:{
    backgroundColor: "#202020",
    margin: 10, 
    bottom: 10,

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