import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Post from '../screens/Post/Post';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function IconWithBadge({ name, badgeCount, color, size }) {
    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Image source={name} style={{ width: 24, height: 24 }}
                resizeMode='contain'
            />
            {badgeCount > 0 && (
                <View
                    style={{
                        // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                        {badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
}

const stackNavigation = () => {
    return (

        <Stack.Navigator headerMode='none' >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>

    );
}

function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
}

export default () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Trang chủ') {
                        iconName = focused
                            ? require('../image/home.png')
                            : require('../image/homeoutline.png');
                        return <HomeIconWithBadge name={iconName} color={color} size={size} />
                    } else if (route.name === 'Thông tin') {
                        iconName = focused
                            ? require('../image/plus-fill.png')
                            : require('../image/pluss.png');
                        return <Image source={iconName} style={{ width: 24, height: 24 }}
                            resizeMode='contain' />
                    }else if (route.name === 'Profile') {
                        iconName = focused
                            ? require('../image/personoutline.png')
                            : require('../image/person.png');
                        return <Image source={iconName} style={{ width: 30, height: 30 }}
                            resizeMode='contain' />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#fc0303',
                inactiveTintColor: 'gray',
                showLabel:false,
                style:{
                    elevation: 0,
                    borderTopWidth: 0
                }
            }}>
            <Tab.Screen name="Trang chủ" component={stackNavigation} />
            <Tab.Screen name="Thông tin" component={stackNavigation} />
            <Tab.Screen name="Profile" component={stackNavigation} />
        </Tab.Navigator>
    );
}