import { View, Text, TouchableOpacity } from "react-native";

export const Card = ({ item, selectCard }) => {
  return (
    <TouchableOpacity onPress={selectCard}>
      <View
        style={{
          flexDirection: "column",
          width: 100,
          height: 100,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#5f8f8f99",
          margin: 20
        }}
      >
        <Text>{item.card}</Text>
        <Text>{item.count}</Text>
      </View>
    </TouchableOpacity>
  );
};