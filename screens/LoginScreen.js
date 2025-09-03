import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password }); // Use your backend URL
            Alert.alert("Success", `Welcome back, ${res.data.user.name}`);
            navigation.replace("Home");
        } catch (err) {
            Alert.alert("Error", err.response?.data?.msg || "Something went wrong");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>Don’t have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#7FB5D6" },
    title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 20, textAlign: "center" },
    input: { backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 15 },
    button: { backgroundColor: "#F6E6D8", padding: 15, borderRadius: 10, alignItems: "center" },
    buttonText: { color: "#2D2D2D", fontSize: 16, fontWeight: "bold" },
    link: { marginTop: 15, color: "#fff", textAlign: "center" },
});
