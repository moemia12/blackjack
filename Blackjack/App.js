import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";
import { Card } from "./components/Card";
import { CardCount } from './components/CardCount';
import { CardHistory } from './components/CardHistory';
import { cardPics } from './assets/cardPics';



export default function App() {

  const cards = [
    { card: "A", count: -1, pic: cardPics.ace, key: 1 },
    { card: "K", count: -1, pic: cardPics.king, key: 13 },
    { card: "Q", count: -1, pic: cardPics.queen, key: 12 },
    { card: "J", count: -1, pic: cardPics.jack, key: 11 },
    { card: 10, count: -1, pic: cardPics.ten, key: 10 },
    { card: 9, count: 0, pic: cardPics.nine, key: 9 },
    { card: 8, count: 0, pic: cardPics.eight, key: 8 },
    { card: 7, count: 0, pic: cardPics.seven, key: 7 },
    { card: 6, count: 1, pic: cardPics.six, key: 6 },
    { card: 5, count: 1, pic: cardPics.five, key: 5 },
    { card: 4, count: 1, pic: cardPics.four, key: 4 },
    { card: 3, count: 1, pic: cardPics.three, key: 3 },
    { card: 2, count: 1, pic: cardPics.two, key: 2 },
  ];

  const [currentCount, setCount] = useState(0);
  const [currentPic, setPic ] = useState(null);
  const [cardHistory, setHistory] = useState([]);

  const onPressCard = (card) =>{
    setCount(currentCount + card.count)
    setPic(card.pic)

    setHistory([...cardHistory, card]);
    console.log('cardHistory', cardHistory);
  }   

  const onPressClear = () =>{
    setCount(0)
    setHistory([]);
  } 

  const onPressBack = () =>{

    if(cardHistory.length < 1){
      alert('No more cards')
      return
    } 

    const lastCard = cardHistory[cardHistory.length - 1];
    cardHistory.pop()
    setCount(currentCount - lastCard.count)
    setHistory(cardHistory)
  }

  
  

  return (
    <View style={styles.app}>
      <CardHistory 
      currentPic={currentPic} 
      history={[...cardHistory]}/>
      <CardCount useState={currentCount}/>
      <View style={styles.cards} >
      {cards.map((card) =>(
        <Card item={card} 
        selectCard={onPressCard} 
        />
      ))}
      <TouchableOpacity style={styles.clearButton} onPress={onPressClear}>
        <Text style={styles.clearText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onPressBack}>
        <Text style={styles.clearText}>🔙</Text>
      </TouchableOpacity>

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
  },
  clearButton: {
    fontSize: 30,
    backgroundColor: "#202020",
    width: 136,
    margin: 1,
    borderRadius: 4
  },
  clearText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 70
  }
});
