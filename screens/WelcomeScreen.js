import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/logo.png")} // replace with your logo file
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title}>Solace</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "linear-gradient(180deg, #7FB5D6, #C7B9E5)", // background gradient
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
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
