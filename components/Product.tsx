import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import productService from '../services/ProductService';

interface PlanPot {
    id: string;
    name: string;
    type: string;
    size: string;
    origin: string;
    describe: string;
    quantity: number;
    price: number;  
    image: string;
}

export default function Product({ route, navigation }: { route: any; navigation: any }) {
    const category = route.params?.category ?? "Tất cả";
    const [products, setProducts] = useState<PlanPot[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

    const categories: string[] = ["Tất cả", "Hàng mới về", "Ưa sáng", "Ưa bóng"];

    useEffect(() => {
        const fetchProductsByType = async () => {
            try {
                const allProducts = await productService.getAllProducts();
                const filteredProducts = category === "Tất cả" ? allProducts : allProducts.filter((p: PlanPot) => p.type === category);
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm theo loại:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductsByType();
    }, [category]);

    const renderItem = ({ item }: { item: PlanPot }) => {
        return (
            <Card style={styles.card} onPress={() => navigation.navigate("ProductDetail", { id: item.id })}>
                <Image source={getImageSource(item.image)} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.descibe}>{item.describe}</Text>
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

    const getImageSource = (image: string) => {
        if (image.startsWith('http')) {
            return { uri: image };
        } else {
            return { uri: `file://${image}` };
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("HomeFragment")}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>{category}</Text>
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
                {loading ? (
                    <ActivityIndicator size="large" color="#007537" />
                ) : (
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                )}
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
    descibe: {
        color: "#888",
        fontSize: 12,
    },
    price: {
        color: "#007537",
        fontSize: 18,
        fontWeight: "bold",
    },
});
