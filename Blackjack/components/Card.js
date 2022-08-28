import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const Card = ({ item, selectCard }) => {
  return (
    <TouchableOpacity onPress={() => selectCard(item)} style={styles.grid}>
      <View>
        <Text style={styles.font}>{item.card}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

grid:{
    flexDirection: "column",
    width: 134,
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202020",
    margin: 2,
    borderRadius: 5
},
font:{
  color: 'white'
}

})