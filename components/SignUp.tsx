import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import userService from '../services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }: { navigation: any }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = useCallback(async () => {
        if (!fullName || !email || !mobile || !password) {
            Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        try {
            const response = await userService.register({ name: fullName, mobile, email, password });

            Alert.alert("Thành công", "Đăng ký thành công!", [
                { text: "OK", onPress: () => navigation.navigate("SignIn") }
            ]);
        } catch (error: any) {
            console.error("Lỗi đăng ký:", error.response?.data || error.message);
            Alert.alert("Lỗi", error.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.");
        }
    }, [fullName, email, mobile, password]);

    return (
        <View style={styles.container}>
            <Image source={require("../images/imgSign.png")} style={styles.image} />
            <View style={styles.container2}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Chào mừng bạn</Text>
                    <Text style={styles.subtitle}>Đăng ký tài khoản</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="Họ và tên"
                        value={fullName}
                        onChangeText={setFullName}
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Số điện thoại"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.clause}>
                    <Text>Để đăng ký tài khoản, bạn đồng ý
                        <Text> </Text>
                        <Text style={{ color: "#007537", textDecorationLine: "underline" }}>Terms & {"\n"}</Text>
                        <Text>           </Text>
                        <Text style={{ color: "#007537", textDecorationLine: "underline" }}>Conditions</Text>
                        <Text> and </Text>
                        <Text style={{ color: "#007537", textDecorationLine: "underline" }}>Privacy Policy</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.SignUp} onPress={() => handleSignUp()}>
                    <Image source={require("../images/imgSignUp.png")} style={{ width: "100%" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }}>
                    <Image source={require("../images/imgOr.png")} style={{ width: "100%" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 30, alignItems: "center" }}>
                    <Image source={require("../images/imgGgFb.png")} style={{ width: 94, height: 32 }} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.goToSignIn} onPress={() => navigation.navigate("SignIn")}>
                        <Text>Bạn đã có tài khoản? </Text>
                        <Text style={{ color: "#007537" }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        height: "40%",
        marginTop: -100,
    },
    container2: {
        flex: 1,
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        marginTop: 5,
    },
    textInputContainer: {
        marginTop: 10,
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        height: 46,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#8B8B8B",
        paddingHorizontal: 10,
    },
    clause: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    SignUp: {
        width: "100%",
        height: 50,
        backgroundColor: "#007537",
        borderRadius: 15,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    goToSignIn: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
    },
});
