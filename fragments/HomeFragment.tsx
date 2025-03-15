import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar } from 'react-native';

export default function HomeFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/imgHome.png')} style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        width: "100%",
        height: 200, // Chiều cao header
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
});
