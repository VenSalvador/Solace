import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#7FB5D6", "#C7B9E5"]}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require("../assets/logo-white-text-transparent.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.subtitle}>
        You're not alone. This space is here for you.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.primaryButtonText}>Continue as Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => alert("Login / Sign Up flow coming soon!")}
      >
        <Text style={styles.secondaryButtonText}>Log In / Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#F6E6D8",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  primaryButtonText: {
    color: "#2D2D2D",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
