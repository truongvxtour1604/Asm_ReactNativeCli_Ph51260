import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFragment from '../fragments/HomeFragment';
import SearchFragment from '../fragments/SearchFragment';
import NotificationFragment from '../fragments/NotificationFragment';
import ProfileFragment from '../fragments/ProfileFragment';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.bottomNav,
                tabBarActiveTintColor: '#000',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeFragment}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchFragment}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationFragment}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileFragment}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        paddingTop: 10,
    },
});
