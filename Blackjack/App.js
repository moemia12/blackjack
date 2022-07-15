import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";
import { Card } from "./components/Card";
import { CardCount } from './components/CardCount';

export default function App() {

  const cards = [
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


  const [currentCount, setCount] = useState(0);

  const onPressCard = () =>{

    setCount + 1

  }

  return (
    <View style={styles.app}>
      <CardCount useState={currentCount}/>
      <View style={styles.cards} onPress={onPressCard()}>
      {cards.map((index) =>(<Card item={index} />))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flex: 1,
    justifyContent: 'flex-end'
  },
  current: {
    flexDirection: "row",
    justifyContent: "center"
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
});
