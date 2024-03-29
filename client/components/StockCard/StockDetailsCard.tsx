import { StyleSheet, View,TouchableOpacity } from 'react-native'
import { Text } from '../Themed';
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const StockDetailsCard = ({data}:any) => {
    const change = Number.parseFloat(data.percent_change)
  return (
    <Link href={`/${data.symbol}`} asChild>
    <TouchableOpacity style={styles.parentContainer}>
      <View style={styles.child1container}>
        <View style={{flexDirection:"row",gap:20,width:"50%",justifyContent:"space-between"}}>
            <Text style={{color:Colors.custom.text,fontSize:16,fontWeight:"700"}}>{data.symbol}</Text>
            <FontAwesome name="star-o" size={18} color={Colors.custom.text_out} style={{left:-30}} />
        </View>
        <Text style={{fontSize:14,color:Colors.custom.text_out}}>{data.name}</Text>
      </View>
      <View style={styles.child2container}>
        <Text style={{}}>${Number.parseFloat(data.close).toFixed(2)}</Text>
        <Text style={[{color:change > 0 ? "green" : "red"}]}>{change > 0 ? "+" : ""}{change.toFixed(2)}%</Text>
      </View>
    </TouchableOpacity>
    </Link>
  )
}

export default StockDetailsCard

const styles = StyleSheet.create({
    parentContainer:{
        width:"100%",
        padding:10,
        flexDirection:"row"
    },
    child1container:{
        width:"75%",
        gap:1
        

    },
    child2container:{
        width:"25%",
        alignItems:"flex-end",
        gap:1
    }
})