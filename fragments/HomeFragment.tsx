import React from 'react';
import { View, StyleSheet, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';

export default function HomeFragment({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.shoppingCart}>
                <Image source={require("../images/imgSpCart.png")} />
            </TouchableOpacity>
            <ImageBackground source={require('../images/imgHome.png')} style={styles.header}>
                <Text style={styles.headerText}>Planta - tỏa sáng{"\n"}Không gian nhà bạn</Text>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ color: "#007537", fontSize: 16 }}>Xem hàng mới về {"-->"}</Text>
                </TouchableOpacity>
            </ImageBackground>
            <StatusBar barStyle={"dark-content"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    shoppingCart: {
        marginLeft: 340
    },
    header: {
        width: "100%",
        height: 200,
        paddingTop: 20
    },
    headerText: {
        color: "#000",
        fontSize: 24,
        marginLeft: 20,
    },
});
