import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";
import { Card } from "./Card";

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

  const [current, setCurrnet] = useState(cards[0]);

  return (
    <View style={styles.app}>
      <View style={styles.current}>
        <Card item={current} />
      </View>
      <View style={styles.cards}>
        {cards.map((i) =>
          current.card !== i.card ? (
            <Card item={i} selectCard={() => setCurrnet(i)} />
          ) : null
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  current: {
    flexDirection: "row",
    justifyContent: "center"
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
