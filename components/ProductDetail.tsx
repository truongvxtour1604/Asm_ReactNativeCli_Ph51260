import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import productService from '../services/ProductService';

interface Product {
    id: string;
    name: string;
    type: string;
    size: string;
    origin: string;
    descibe: string;
    quantity: number;
    price: number;  
    image: string;
}

export default function ProductDetail({ route, navigation }: { route: any, navigation: any }) {
    const { id } = route.params;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [quantity, setQuantity] = useState(0);
    const subtotal = product ? product.price * quantity : 0;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" color="#007537" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
    }

    if (!product) {
        return <Text style={{ textAlign: "center", marginTop: 20 }}>Không tìm thấy sản phẩm</Text>;
    }

    const getImageSource = (image: string) => {
        if (image.startsWith('http')) {
            return { uri: image };
        } else {
            return { uri: `file://${image}` };
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("HomeFragment")}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>{product.name}</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="cart-outline" size={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back-outline" size={24} color="#888" />
                </TouchableOpacity>
                <Image source={getImageSource(product.image)} style={styles.image} />
                <TouchableOpacity>
                    <Ionicons name="chevron-forward-outline" size={24} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>Cây trồng</Text>
                    <Text style={styles.tag}>Ưa bóng</Text>
                </View>
                <Text style={styles.price}>{product.price.toLocaleString()}đ</Text>
                <Text style={styles.sectionTitle}>Chi tiết sản phẩm</Text>
                <Image source={require("../images/imgLine.png")} style={styles.line} />
                <View style={styles.detailRow}><Text>Kích cỡ</Text><Text>{product.size}</Text></View>
                <Image source={require("../images/imgLine.png")} style={styles.line} />
                <View style={styles.detailRow}><Text>Xuất xứ</Text><Text>{product.origin}</Text></View>
                <Image source={require("../images/imgLine.png")} style={styles.line} />
                <View style={styles.detailRow}><Text>Tình trạng</Text><Text style={{ color: "#007537" }}>Còn {product.quantity} sp</Text></View>
                <Image source={require("../images/imgLine.png")} style={styles.line} />

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
        backgroundColor: "#007537",
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        borderRadius: 5,
    },
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#007537",
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
    line: {
        width: "100%",
        marginBottom: 10,
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
        backgroundColor: "#007537",
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