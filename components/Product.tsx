import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PlanPot {
    id: string;
    name: string;
    type: string;
    description: string;
    price: number;
    image: any;
}

export default function Product({ navigation }: { navigation: any }) {
    const planPotsData = [
        { id: "1", name: "Chậu cây cảnh", type: "Plan pot", description: "Ưa sáng", size: "Lớn", origin: "Việt Nam", quantity: 10, price: 1000, image: require("../images/imgPlanPot.png") },
        { id: "2", name: "Chậu cây bonsai", type: "Plan pot", description: "Phong thủy", size: "Vừa", origin: "Nhật Bản", quantity: 10, price: 1500, image: require("../images/imgPlanPot.png") },
        { id: "3", name: "Chậu sen đá", type: "Plan pot", description: "Dễ chăm sóc", size: "Nhỏ", origin: "Hàn Quốc", quantity: 10, price: 800, image: require("../images/imgPlanPot.png") },
        { id: "4", name: "Chậu xương rồng", type: "Plan pot", description: "Ít cần nước", size: "Nhỏ", origin: "Mexico", quantity: 10, price: 750, image: require("../images/imgPlanPot.png") },
        { id: "5", name: "Chậu lan hồ điệp", type: "Plan pot", description: "Hoa lâu tàn", size: "Lớn", origin: "Thái Lan", quantity: 10, price: 2000, image: require("../images/imgPlanPot.png") },
        { id: "6", name: "Chậu dương xỉ", type: "Plan pot", description: "Lọc không khí", size: "Vừa", origin: "Việt Nam", quantity: 10, price: 1200, image: require("../images/imgPlanPot.png") },
        { id: "7", name: "Chậu lưỡi hổ", type: "Plan pot", description: "Hấp thụ khí độc", size: "Vừa", origin: "Indonesia", quantity: 10, price: 1300, image: require("../images/imgPlanPot.png") },
        { id: "8", name: "Chậu trầu bà", type: "Plan pot", description: "Dễ sống", size: "Lớn", origin: "Brazil", quantity: 10, price: 1100, image: require("../images/imgPlanPot.png") },
        { id: "9", name: "Chậu bàng Singapore", type: "Plan pot", description: "Cây nội thất đẹp", size: "Lớn", origin: "Singapore", quantity: 10, price: 2500, image: require("../images/imgPlanPot.png") },
        { id: "10", name: "Chậu cẩm nhung", type: "Plan pot", description: "Lá đẹp", size: "Nhỏ", origin: "Việt Nam", quantity: 10, price: 900, image: require("../images/imgPlanPot.png") },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

    const categories: string[] = ["Tất cả", "Hàng mới về", "Ưa sáng", "Ưa bóng"];

    const filteredData = selectedCategory === "Tất cả" ? planPotsData : planPotsData.filter(item => item.type === selectedCategory);

    const renderItem = ({ item }: { item: PlanPot }) => {
        return (
            <Card style={styles.card} onPress={() => navigation.navigate("ProductDetail")}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}đ</Text>
            </Card>
        );
    };

    const renderOption = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.tab, selectedCategory === item && styles.selectedTab]}
            onPress={() => setSelectedCategory(item)}
        >
            <Text style={[styles.tabText, selectedCategory === item && styles.selectedTabText]}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("HomeFragment")}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>Sản phẩm</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="cart-outline" size={30} />
                </TouchableOpacity>
            </View>

            <View style={{ padding: 16 }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    renderItem={renderOption}
                />
                <FlatList
                    data={planPotsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
        </ScrollView>
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
        paddingHorizontal: 10,
    },
    iconButton: {
        width: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "bold",
    },
    tab: {
        width: 100,
        alignItems: "center",
        padding: 5,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007537",
        marginBottom: 10
    },
    selectedTab: {
        backgroundColor: "#007537",
    },
    tabText: {
        color: "#007537",
    },
    selectedTabText: {
        color: "#fff",
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 8,
        padding: 10,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 10,
    },
    name: {
        color: "#000",
        fontSize: 18,
        marginTop: 8,
        fontWeight: "bold",
    },
    description: {
        color: "#888",
        fontSize: 12,
    },
    price: {
        color: "#007537",
        fontSize: 18,
        fontWeight: "bold",
    },
});
