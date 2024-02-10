import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { Text,View } from '@/components/Themed' 
import { Stack, useLocalSearchParams } from 'expo-router'
import Top5 from "@/assets/data/top5.json"
import Graph from '@/components/graph/Graph'

const Stock = () => {
  const {symbol} = useLocalSearchParams();
  // @ts-ignore
  const stock = Top5[symbol];

  if(!stock){
    return <ActivityIndicator size={'small'} color={"#FFF"}/>
  }

  return (
    <View>
        <Stack.Screen options={{headerTitleAlign:"center",headerTitle:stock.symbol}} />
        <Graph />
    </View>
  )
}

export default Stock

const styles = StyleSheet.create({})