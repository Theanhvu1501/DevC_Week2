import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import Info from './Info';
import ListImage from './ListImage';
const data = [
  { number: '210', title: 'Photos' },
  { number: '15k', title: 'Followers' },
  { number: '605', title: 'Following' },
]

export default () => {
  const { container, number, title } = styles;
  return (
    <View style={container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <Header />
      <Info />
      <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
        {
          data.map(item => {      
            return (
              <View style={{alignItems:'center'}} key={item.title}>
                <Text style={number}>{item.number}</Text>
                <Text style={title}>{item.title}</Text>
              </View>
            )
          })
        }
      </View>
      <ListImage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 35
  },
  title: {
    color: '#869189',
    fontSize: 18
  }

});
