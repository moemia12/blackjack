import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import cardPics from '../cardPics'

export const CardStack = ({  }) => {
  return (
      <View style={styles.cardStack}>
        <Text style={{color: 'white'}}>A</Text>
        <Image src={cardPics.two}/>
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
}

})