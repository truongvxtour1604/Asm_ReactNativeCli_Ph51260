import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';

export default function SignIn({ navigation }: { navigation: any }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Image source={require("../images/imgSign.png")} style={styles.image} />
            <View style={styles.container2}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Chào mừng bạn</Text>
                    <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput placeholder="Email hoặc số điện thoại" style={styles.textInput} />
                    <TextInput placeholder="Mật khẩu" style={styles.textInput} secureTextEntry />
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
                <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../images/imgSignIn.png")} style={{ width: "100%" }} />
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: "center"
    },
    goToSignUp: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "center"
    }
});
