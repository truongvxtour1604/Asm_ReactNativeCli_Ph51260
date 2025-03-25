import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tìm kiếm</Text>
            <TextInput style={styles.input} />

            <Text style={styles.history}>Tìm kiếm gần đây</Text>
            <View style={styles.historyContainer}>
                <Ionicons name="time-outline" size={30} />
                <Text style={{ fontSize: 16 }}>Plan pot</Text>
                <Ionicons name="close-outline" size={30} />
            </View>
            <View style={styles.historyContainer}>
                <Ionicons name="time-outline" size={30} />
                <Text style={{ fontSize: 16 }}>Pot</Text>
                <Ionicons name="close-outline" size={30} />
            </View>
            <View style={styles.historyContainer}>
                <Ionicons name="time-outline" size={30} />
                <Text style={{ fontSize: 16 }}>Accessory</Text>
                <Ionicons name="close-outline" size={30} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
    },
    input: {
        marginTop: 10,
        backgroundColor: "#fff",
        marginHorizontal: 30
    },
    history: {
        fontSize: 16,
        margin: 30,
        marginTop: 50
    },
    historyContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        alignItems: "center",
        marginTop: 10,
    }
});
