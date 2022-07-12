import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function CardPad ()  {
  const Cards = [
    { card: "A", count: -1 },
    { card: "K", count: -1 },
    { card: "Q", count: -1 },
    { card: "J", count: -1 },
    { card: 10, count: -1 },
    { card: 9, count: 0 },
    { card: 8, count: 0 },
    { card: 7, count: 0 },
    { card: 6, count: 1 },
    { card: 5, count: 1 },
    { card: 4, count: 1 },
    { card: 3, count: 1 },
    { card: 2, count: 1 },
  ];

const Pad = () =>{
    return(
        <View>HELLO</View>
    )
}

};
