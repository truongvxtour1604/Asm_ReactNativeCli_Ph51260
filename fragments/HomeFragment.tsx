import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity,
    FlatList, ScrollView, ActivityIndicator
} from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import productService from '../services/ProductService';

interface Product {
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

export default function HomeFragment({ navigation }: { navigation: any }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productService.getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu sản phẩm: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.type]) {
            acc[product.type] = [];
        }
        acc[product.type].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    const getImageSource = (image: string) => {
        if (image.startsWith('http')) {
            return { uri: image };
        } else {
            return { uri: `file://${image}` };
        }
    };

    const renderItem = ({ item }: { item: Product }) => (
        <Card style={styles.card} onPress={() => navigation.navigate("ProductDetail", { id: item.id })}>
            <Image source={getImageSource(item.image)} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.descibe}>{item.describe}</Text>
            <Text style={styles.price}>{item.price}đ</Text>
        </Card>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#007537" style={styles.loadingIndicator} />;
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <TouchableOpacity style={styles.shoppingCart}>
                <Ionicons name="cart-outline" size={30} />
            </TouchableOpacity>
            <ImageBackground source={require("../images/imgHome.png")} style={styles.header}>
                <Text style={styles.headerText}>Planta - tỏa sáng{"\n"}Không gian nhà bạn</Text>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ color: "#007537", fontSize: 16, fontWeight: "bold" }}>Xem hàng mới về ➝</Text>
                </TouchableOpacity>
            </ImageBackground>

            {Object.entries(groupedProducts).map(([category, productList]) => (
                <View key={category} style={{ paddingHorizontal: 16 }}>
                    <Text style={styles.title}>{category}</Text>
                    <FlatList
                        data={productList.slice(0, 6)}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("Product", { category })}>
                        <Text style={styles.allProduct}>Xem thêm sản phẩm ➝</Text>
                    </TouchableOpacity>

                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    shoppingCart: {
        alignItems: "flex-end",
        padding: 10
    },
    header: {
        width: "100%",
        height: 200,
        paddingTop: 20,
    },
    headerText: {
        color: "#000",
        fontSize: 24,
        marginLeft: 20,
        fontWeight: "bold",
    },
    title: {
        fontSize: 26,
        marginBottom: 15,
        fontWeight: "bold",
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
    allProduct: {
        color: "#007537",
        fontSize: 16,
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold",
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
