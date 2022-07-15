import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";

export const CardCount = ({useState}) => {
  return (
    <Text style={styles.count}>{useState}</Text>
  )
}

const styles = StyleSheet.create({

    count:{
        fontSize: 100,
        textAlign: 'center',
        marginBottom: 50
      }
})