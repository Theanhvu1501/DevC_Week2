import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default () => {
    return (
        <View style={styles.info}>
            <View style={styles.avatar}>
                <Image
                    style={{ width: 130, height: 130, borderRadius: 65 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8jb275ALQueWl7ib-3JzIbxFoxivzMmvmtg&usqp=CAU' }}>

                </Image>
            </View>
            <View style={styles.userDentail}>
                <Text style={styles.fullName}>Khánh Linh</Text>
                <Text style={styles.title}>Singer</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.btn,{backgroundColor:'#27496d',marginRight:20}]}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '300', paddingVertical: 7, paddingHorizontal: 40 }}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Icon name="paper-plane-o" size={27} color='white' style={{paddingVertical: 7, paddingHorizontal: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    info: {
        flex: 3,
        flexDirection: 'row',
    },
    avatar: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userDentail: {
        flex: 3,
    },
    fullName: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingHorizontal:10

    },
    title: {
        fontSize: 18,
        color: '#869189',
        paddingHorizontal:10
    },
    button: {
        flexDirection: 'row',
        marginTop: 25,
    },
    btn:{
         backgroundColor: '#00909e', 
         borderRadius: 30,
         alignSelf:'center',
        elevation:2
     }

})