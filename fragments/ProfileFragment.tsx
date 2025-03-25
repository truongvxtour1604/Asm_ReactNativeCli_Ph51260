import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ProfileFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});