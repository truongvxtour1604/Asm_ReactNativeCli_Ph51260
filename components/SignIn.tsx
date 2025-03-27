import React, { useState, useEffect, useCallback } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import CheckBox from 'react-native-check-box';
import userService from '../services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // Load remembered user when the component mounts
    useEffect(() => {
        const loadRememberedUser = async () => {
            try {
                const rememberedUser = await AsyncStorage.getItem("rememberedUser");
                if (rememberedUser) {
                    const { email, password } = JSON.parse(rememberedUser);
                    setEmail(email);
                    setPassword(password);
                    setIsChecked(true);
                }
            } catch (error) {
                console.error("Error loading remembered user:", error);
            }
        };
        loadRememberedUser();
    }, []);

    const handleSignIn = useCallback(async () => {
        if (!email || !password) {
            Alert.alert("Lỗi", "Vui lòng nhập email và mật khẩu!");
            return;
        }

        try {
            setLoading(true);
            const users = await userService.getAllUsers();
            const user = users.find((u: any) => u.email === email && u.password === password);

            if (user) {
                await AsyncStorage.setItem("user", JSON.stringify(user));

                if (isChecked) {
                    await AsyncStorage.setItem("rememberedUser", JSON.stringify({ email, password }));
                } else {
                    await AsyncStorage.removeItem("rememberedUser");
                }

                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottomTabs" }],
                });
            } else {
                Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng!");
            }
        } catch (error: any) {
            if (error.response) {
                Alert.alert("Lỗi", error.response.data.message || "Email hoặc mật khẩu không đúng!");
            } else {
                Alert.alert("Lỗi", "Không thể kết nối đến server, vui lòng kiểm tra internet!");
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [email, password, isChecked]);

    return (
        <View style={styles.container}>
            <Image source={require("../images/imgSign.png")} style={styles.image} />
            <View style={styles.container2}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Chào mừng bạn</Text>
                    <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="Email hoặc số điện thoại"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <CheckBox
                        rightText="Nhớ tài khoản"
                        checkBoxColor="#8B8B8B"
                        isChecked={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                        checkedCheckBoxColor="#007537"
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.signIn, loading && styles.disabledButton]} onPress={handleSignIn} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Image source={require("../images/imgSignIn.png")} style={{ width: "100%" }} />
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }}>
                    <Image source={require("../images/imgOr.png")} style={{ width: "100%" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 30, alignItems: "center" }}>
                    <Image source={require("../images/imgGgFb.png")} style={{ width: 94, height: 32 }} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.goToSignUp} onPress={() => navigation.navigate("SignUp")}>
                        <Text>Bạn không có tài khoản? </Text>
                        <Text style={{ color: "#007537" }}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "40%",
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
    optionContainer: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    forgotPassword: {
        color: "#007537",
    },
    signIn: {
        width: "100%",
        height: 50,
        backgroundColor: "#007537",
        borderRadius: 15,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    disabledButton: {
        opacity: 0.5,
    },
    goToSignUp: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "center",
    },
});

