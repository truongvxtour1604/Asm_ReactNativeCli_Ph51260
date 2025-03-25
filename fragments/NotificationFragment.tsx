import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function NotificationFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
