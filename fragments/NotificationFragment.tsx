import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NotificationFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông báo</Text>

            <View style={styles.header}>
                <Text style={styles.notification}>Thứ tư, 26/3/2025</Text>
                <Image source={require("../images/imgLine.png")} style={styles.line} />
            </View>
            <View style={styles.notificationContainer}>
                <Ionicons name="time-outline" size={30} />
                <Text style={{ fontSize: 16 }}>Plan pot</Text>
                <Ionicons name="close-outline" size={30} />
            </View>
            <View style={styles.notificationContainer}>
                <Ionicons name="time-outline" size={30} />
                <Text style={{ fontSize: 16 }}>Pot</Text>
                <Ionicons name="close-outline" size={30} />
            </View>
            <View style={styles.notificationContainer}>
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
    header: {
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    notification: {
        fontSize: 18,
    },
    line: {
        width: "100%",
        marginBottom: 10,
    },
    notificationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        alignItems: "center",
        marginTop: 10,
    }
});
