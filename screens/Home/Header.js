import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="md-arrow-back" size={30} color="#dae1e7" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="ios-menu" size={30} color="#dae1e7" />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10
    },
})