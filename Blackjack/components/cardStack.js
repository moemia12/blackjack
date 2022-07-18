import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const CardStack = ({  }) => {
  return (
      <View style={styles.cardStack}>
        <Text style={{color: 'white'}}>nolpo</Text>
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