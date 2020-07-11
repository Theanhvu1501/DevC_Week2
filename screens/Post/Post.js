import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import Header from '../Home/Header';



export default () => {
    const route = useRoute();
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.image}
                source={{ uri: route.params.content.image }}>
            </Image>

            <View style={{ flex: 4.5, paddingHorizontal: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 50 }}>
                    <View>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Eiffel tower</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='enviroment' size={20} color='#869189' />
                            <Text style={{ paddingHorizontal: 10, color: '#869189', fontSize: 17 }}>Paris Franch</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Feather name='download-cloud' size={30} color='white' />
                    </TouchableOpacity>
                </View>
                <Text>The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={styles.hashtag}>
                        <Text style={{ color: '#869189' }}>#photograhpy </Text>
                    </View>
                    <View style={styles.hashtag}>
                        <Text style={{ color: '#869189' }}>#sea</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='heart' size={30} color='#869189' style={{ marginRight: 10 }} />
                    <AntDesign name='message1' size={30} color='#869189' />
                    <Feather name='flag' size={30} color='#869189' style={{ right: -100, }} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        flex: 5.5,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'red'
    },
    btn: {
        backgroundColor: '#27496d',
        width: 60,
        height: 65,
        elevation: 5,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hashtag: {
        backgroundColor: '#dae1e7',
        padding: 10,
        borderRadius: 20,
        marginRight: 10
    }
})