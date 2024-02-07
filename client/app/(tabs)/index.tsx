import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import Top5 from "@/assets/data/top5.json"
import StockDetailsCard from '@/components/StockCard/StockDetailsCard';

export default function TabOneScreen() {
  const data = Object.values(Top5);
  console.log(data)
  
  return (
    <View>
      <Stack.Screen  options={{title:"Stocks",headerTitleAlign:"center"}}/>
      <FlatList 
      data={data}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item,index}) => (
        <StockDetailsCard data={item}/>
      )}
      contentContainerStyle={{padding:10,gap:5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
