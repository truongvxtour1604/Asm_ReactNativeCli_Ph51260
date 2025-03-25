import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductDetail({ navigation }: { navigation: any }) {
    const [quantity, setQuantity] = useState(2);
    const price = 250000;
    const subtotal = price * quantity;

    return (  
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("HomeFragment")}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>Sản phẩm</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="cart-outline" size={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back-outline" size={24} color="#888" />
                </TouchableOpacity>
                <Image source={require("../images/imgPlanPot.png")} style={styles.image} />
                <TouchableOpacity>
                    <Ionicons name="chevron-forward-outline" size={24} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>Cây trồng</Text>
                    <Text style={styles.tag}>Ưa bóng</Text>
                </View>
                <Text style={styles.price}>{price.toLocaleString()}đ</Text>
                <Text style={styles.sectionTitle}>Chi tiết sản phẩm</Text>
                <Image source={require("../images/imgLine.png")} style={{width: "100%", marginBottom: 10}}/>
                <View style={styles.detailRow}><Text>Kích cỡ</Text><Text>Nhỏ</Text></View>
                <Image source={require("../images/imgLine.png")} style={{width: "100%", marginBottom: 10}}/>
                <View style={styles.detailRow}><Text>Xuất xứ</Text><Text>Châu Phi</Text></View>
                <Image source={require("../images/imgLine.png")} style={{width: "100%", marginBottom: 10}}/>
                <View style={styles.detailRow}><Text>Tình trạng</Text><Text style={{ color: "green" }}>Còn 156 sp</Text></View>
                <Image source={require("../images/imgLine.png")} style={{width: "100%", marginBottom: 10}}/>

                <Text style={styles.subtotal}>Tạm tính</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Ionicons name="remove-circle-outline" size={24} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <Ionicons name="add-circle-outline" size={24} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{subtotal.toLocaleString()}đ</Text>
                </View>

                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        flex: 1,
        fontWeight: "bold",
    },
    iconButton: {
        width: 40,
        alignItems: "center",
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginHorizontal: 20,
    },
    infoContainer: {
        padding: 10,
    },
    tagContainer: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    },
    tag: {
        width: 90,
        textAlign: "center",
        backgroundColor: "green",
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        borderRadius: 5,
    },
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "green",
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 26,
        marginTop: 10,
        fontWeight: "bold",
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        fontSize: 16,   
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quantity: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtotal: {
        fontSize: 16,
        textAlign: "right",
        color: "#ccc",
        marginTop: 10,
    },
    buyButton: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    buyButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
