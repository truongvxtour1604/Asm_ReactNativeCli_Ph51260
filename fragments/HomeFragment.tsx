import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PlanPot {
    id: string;
    name: string;
    description: string;
    price: number;
    image: any;
}

export default function HomeFragment({ navigation }: { navigation: any }) {
    const planPotsData = [
        { id: '1', name: 'Chậu cây cảnh', description: 'Ưa sáng', size: 'Lớn', origin: 'Việt Nam', quantity: 10, price: 1000, image: require('../images/imgPlanPot.png') },
        { id: '2', name: 'Chậu cây bonsai', description: 'Phong thủy', size: 'Vừa', origin: 'Nhật Bản', quantity: 10, price: 1500, image: require('../images/imgPlanPot.png') },
        { id: '3', name: 'Chậu sen đá', description: 'Dễ chăm sóc', size: 'Nhỏ', origin: 'Hàn Quốc', quantity: 10, price: 800, image: require('../images/imgPlanPot.png') },
        { id: '4', name: 'Chậu xương rồng', description: 'Ít cần nước', size: 'Nhỏ', origin: 'Mexico', quantity: 10, price: 750, image: require('../images/imgPlanPot.png') },
        { id: '5', name: 'Chậu lan hồ điệp', description: 'Hoa lâu tàn', size: 'Lớn', origin: 'Thái Lan', quantity: 10, price: 2000, image: require('../images/imgPlanPot.png') },
        { id: '6', name: 'Chậu dương xỉ', description: 'Lọc không khí', size: 'Vừa', origin: 'Việt Nam', quantity: 10, price: 1200, image: require('../images/imgPlanPot.png') },
        { id: '7', name: 'Chậu lưỡi hổ', description: 'Hấp thụ khí độc', size: 'Vừa', origin: 'Indonesia', quantity: 10, price: 1300, image: require('../images/imgPlanPot.png') },
        { id: '8', name: 'Chậu trầu bà', description: 'Dễ sống', size: 'Lớn', origin: 'Brazil', quantity: 10, price: 1100, image: require('../images/imgPlanPot.png') },
        { id: '9', name: 'Chậu bàng Singapore', description: 'Cây nội thất đẹp', size: 'Lớn', origin: 'Singapore', quantity: 10, price: 2500, image: require('../images/imgPlanPot.png') },
        { id: '10', name: 'Chậu cẩm nhung', description: 'Lá đẹp', size: 'Nhỏ', origin: 'Việt Nam', quantity: 10, price: 900, image: require('../images/imgPlanPot.png') },
    ];

    const potsData = [
        { id: '1', name: 'Chậu cây cảnh', description: 'Ưa sáng', size: 'Lớn', origin: 'Việt Nam', quantity: 10, price: 1000, image: require('../images/imgPot.png') },
        { id: '2', name: 'Chậu cây bonsai', description: 'Phong thủy', size: 'Vừa', origin: 'Nhật Bản', quantity: 10, price: 1500, image: require('../images/imgPot.png') },
        { id: '3', name: 'Chậu sen đá', description: 'Dễ chăm sóc', size: 'Nhỏ', origin: 'Hàn Quốc', quantity: 10, price: 800, image: require('../images/imgPot.png') },
        { id: '4', name: 'Chậu xương rồng', description: 'Ít cần nước', size: 'Nhỏ', origin: 'Mexico', quantity: 10, price: 750, image: require('../images/imgPot.png') },
        { id: '5', name: 'Chậu lan hồ điệp', description: 'Hoa lâu tàn', size: 'Lớn', origin: 'Thái Lan', quantity: 10, price: 2000, image: require('../images/imgPot.png') },
        { id: '6', name: 'Chậu dương xỉ', description: 'Lọc không khí', size: 'Vừa', origin: 'Việt Nam', quantity: 10, price: 1200, image: require('../images/imgPot.png') },
        { id: '7', name: 'Chậu lưỡi hổ', description: 'Hấp thụ khí độc', size: 'Vừa', origin: 'Indonesia', quantity: 10, price: 1300, image: require('../images/imgPot.png') },
        { id: '8', name: 'Chậu trầu bà', description: 'Dễ sống', size: 'Lớn', origin: 'Brazil', quantity: 10, price: 1100, image: require('../images/imgPot.png') },
        { id: '9', name: 'Chậu bàng Singapore', description: 'Cây nội thất đẹp', size: 'Lớn', origin: 'Singapore', quantity: 10, price: 2500, image: require('../images/imgPot.png') },
        { id: '10', name: 'Chậu cẩm nhung', description: 'Lá đẹp', size: 'Nhỏ', origin: 'Việt Nam', quantity: 10, price: 900, image: require('../images/imgPot.png') },
    ];

    const accessoriesData = [
        { id: '1', name: 'Chậu cây cảnh', description: 'Ưa sáng', size: 'Lớn', origin: 'Việt Nam', quantity: 10, price: 1000, image: require('../images/imgAccessory.png') },
        { id: '2', name: 'Chậu cây bonsai', description: 'Phong thủy', size: 'Vừa', origin: 'Nhật Bản', quantity: 10, price: 1500, image: require('../images/imgAccessory.png') },
        { id: '3', name: 'Chậu sen đá', description: 'Dễ chăm sóc', size: 'Nhỏ', origin: 'Hàn Quốc', quantity: 10, price: 800, image: require('../images/imgAccessory.png') },
        { id: '4', name: 'Chậu xương rồng', description: 'Ít cần nước', size: 'Nhỏ', origin: 'Mexico', quantity: 10, price: 750, image: require('../images/imgAccessory.png') },
        { id: '5', name: 'Chậu lan hồ điệp', description: 'Hoa lâu tàn', size: 'Lớn', origin: 'Thái Lan', quantity: 10, price: 2000, image: require('../images/imgAccessory.png') },
        { id: '6', name: 'Chậu dương xỉ', description: 'Lọc không khí', size: 'Vừa', origin: 'Việt Nam', quantity: 10, price: 1200, image: require('../images/imgAccessory.png') },
        { id: '7', name: 'Chậu lưỡi hổ', description: 'Hấp thụ khí độc', size: 'Vừa', origin: 'Indonesia', quantity: 10, price: 1300, image: require('../images/imgAccessory.png') },
        { id: '8', name: 'Chậu trầu bà', description: 'Dễ sống', size: 'Lớn', origin: 'Brazil', quantity: 10, price: 1100, image: require('../images/imgAccessory.png') },
        { id: '9', name: 'Chậu bàng Singapore', description: 'Cây nội thất đẹp', size: 'Lớn', origin: 'Singapore', quantity: 10, price: 2500, image: require('../images/imgAccessory.png') },
        { id: '10', name: 'Chậu cẩm nhung', description: 'Lá đẹp', size: 'Nhỏ', origin: 'Việt Nam', quantity: 10, price: 900, image: require('../images/imgAccessory.png') },
    ];

    const renderItem = ({ item }: { item: PlanPot }) => {
        return (
            <Card style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}đ</Text>
            </Card>
        );
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <TouchableOpacity style={styles.shoppingCart}>
                <Image source={require("../images/imgSpCart.png")} />
            </TouchableOpacity>
            <ImageBackground source={require('../images/imgHome.png')} style={styles.header}>
                <Text style={styles.headerText}>Planta - tỏa sáng{"\n"}Không gian nhà bạn</Text>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ color: "#007537", fontSize: 16 }}>Xem hàng mới về {"-->"}</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={{ padding: 16 }}>
                <Text style={styles.title}>Cây trồng</Text>
                <FlatList
                    data={planPotsData.slice(0,4)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PlanPots')}>
                <Text style={styles.moreText}>Xem thêm sản phẩm ➝</Text>
            </TouchableOpacity>

            <View style={{ padding: 16 }}>
                <Text style={styles.title}>Chậu cây</Text>
                <FlatList
                    data={potsData.slice(0,4)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Pots')}>
                <Text style={styles.moreText}>Xem thêm sản phẩm ➝</Text>
            </TouchableOpacity>

            <View style={{ padding: 16 }}>
                <Text style={styles.title}>Phụ kiện chăm sóc</Text>
                <FlatList
                    data={accessoriesData.slice(0,4)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Accessories')}>
                <Text style={styles.moreText}>Xem thêm sản phẩm ➝</Text>
            </TouchableOpacity>
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
    },
    title: {
        fontSize: 26,
        marginBottom: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 8,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    name: {
        color: '#000',
        fontSize: 18,
        marginTop: 8,
    },
    description: {
        color: '#888',
        fontSize: 12,
    },
    price: {
        color: '#007537',
        fontSize: 18,
    },
    moreText: {
        color: '#007537',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
});
