import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


export const CardStack = ({  }) => {
  return (
      <View style={styles.cardStack}>
        <Image style={styles.image} source={require('../assets/images/card-2.png')}/> 
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
  top: 10
}

})