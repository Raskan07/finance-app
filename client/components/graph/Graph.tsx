import React, { useState } from 'react'
import { View,Text } from '../Themed'
import { StyleSheet } from 'react-native'
import {LineGraph,GraphPoint} from "react-native-graph"
import Points from "@/assets/data/timeseries.json"
import Colors from '@/constants/Colors'

const Graph = () => {
    const points:GraphPoint[] = Points.values.map((value) => (
        {
            date : new Date(value.datetime),
            value: Number.parseFloat(value.close)
        }
    ))

    const [selectedPoint,setSelectedPoint] = useState<GraphPoint>(points[points.length -1])


    const onPointSelected = (point:GraphPoint) => {
       setSelectedPoint(point)
    } 
    
  return (
    <View style={{width:"100%"}}>
      <Text style={{marginLeft:10,fontSize:24,letterSpacing:0.6,fontWeight:"600",color:Colors.custom.text}}>$ {selectedPoint?.value.toFixed(1)}</Text>
      <Text style={{marginLeft:10,fontSize:14,fontWeight:"300",color:Colors.custom.text_out}}>{selectedPoint?.date.toDateString()}</Text>
      <LineGraph
        style={{width:"100%",height:300,paddingTop:10}}
        points={points}
        animated={true}
        color={Colors.custom.text}
        gradientFillColors={[Colors.custom.text,"#00000040"]}
        enablePanGesture
        onPointSelected={onPointSelected}
        enableIndicator
        indicatorPulsating
        enableFadeInMask
        />
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({})