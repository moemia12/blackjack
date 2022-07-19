import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { cardPics } from "../assets/cardPics";


export const CardHistory = ({}) => {

  

  return (
      <View style={styles.cardStack}>
        <Image style={styles.image} source={cardPics.ace}/> 
      </View>
  );
};

const styles = StyleSheet.create({

cardStack:{
    bottom: 106,
    width: 'max-width',
    height: 100,
    justifyContent: "space-around", 
    alignItems: "center",
    backgroundColor: "#202020",
    margin: 1,
},
image: {
  height: 60,
  width: 40,
  top: 10,
  alignSelf: 'flex-end',
  marginRight: 10
}

})