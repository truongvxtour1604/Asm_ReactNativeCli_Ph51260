import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

export default function SearchFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
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
