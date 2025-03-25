import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Splash({ navigation }: { navigation: any }) {
    useEffect(() => {
        const timeout = setTimeout(() => navigation.replace("SignIn"), 3000);
        return () => clearTimeout(timeout);
    });

    return (
        <View style={styles.container}>
            <Image source={require("../images/imgSplash.png")} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});


