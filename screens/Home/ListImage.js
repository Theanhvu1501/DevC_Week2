import React from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const data = [
    { key: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJzGoLtXHyPWBUEgxZe3j09bgh035300IRBA&usqp=CAU' },
    { key: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQqFOqt1A0g2SsgUKHBEuvpTrQZmrQZGRDTg&usqp=CAU' },
    { key: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC9ZghRLQhxG9GW0L7V89u9MyBSQK-oYzd0w&usqp=CAU' },
    { key: '5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4f52SESSKz6h9OtAM6uaTQxzM8SzTQclrFg&usqp=CAU' },
    { key: '5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzsovpihtyTivynhC6t0qTMpF482pnIAA9Ag&usqp=CAU' },
]

export default () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress = {() => {
                navigation.navigate('Post',{content:item})
                }}>
                    <Image source={{ uri: item.image }} style={styles.itemImage} />
            </TouchableOpacity>

        );
    }
    return (
        <View style={styles.header}>
            <FlatList
                onScroll = {() => {}}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 6,
        alignItems: 'center',
    },
    itemImage: {
        width: 180,
        height: 250,
        borderRadius: 30,
        marginBottom: 10,
        marginHorizontal: 5,
    }
})