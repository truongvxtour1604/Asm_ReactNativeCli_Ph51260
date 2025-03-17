import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

export default function ProfileFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <StatusBar barStyle={"dark-content"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
});