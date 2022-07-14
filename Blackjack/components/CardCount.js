import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";

export const CardCount = ({currentCount}) => {
  return (
    <Text>{currentCount}</Text>
  )
}
