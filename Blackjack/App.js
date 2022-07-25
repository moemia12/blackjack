import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";
import { Card } from "./components/Card";
import { CardCount } from './components/CardCount';
import { CardHistory } from './components/CardHistory';
import { cardPics } from './assets/cardPics';



export default function App() {

  const cards = [
    { card: "A", count: -1, pic: cardPics.ace },
    { card: "K", count: -1, pic: cardPics.king },
    { card: "Q", count: -1, pic: cardPics.queen },
    { card: "J", count: -1, pic: cardPics.jack },
    { card: 10, count: -1, pic: cardPics.ten },
    { card: 9, count: 0, pic: cardPics.nine },
    { card: 8, count: 0, pic: cardPics.eight },
    { card: 7, count: 0, pic: cardPics.seven },
    { card: 6, count: 1, pic: cardPics.six },
    { card: 5, count: 1, pic: cardPics.five },
    { card: 4, count: 1, pic: cardPics.four },
    { card: 3, count: 1, pic: cardPics.three },
    { card: 2, count: 1, pic: cardPics.two },
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

  
  

  return (
    <View style={styles.app}>
      <CardHistory currentPic={currentPic} history={[...cardHistory]}/>
      <CardCount useState={currentCount}/>
      <View style={styles.cards} >
      {cards.map((card) =>(
        <Card item={card} 
        selectCard={onPressCard} 
        />
      ))}

      <TouchableOpacity onPress={onPressClear}>
        <Text style={styles.clearButton}>C</Text>
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
    justifyContent: "space-between"
  },
  clearButton: {
    fontSize: 30,
    backgroundColor: "#202020",
    color: 'white',
    width: 274,
    height: 70,
    margin: 1,
    textAlign: 'center',
    lineHeight: 70
  }
});
