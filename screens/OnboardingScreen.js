import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen({ navigation }) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const skip = () => navigation.replace("Home");

  return (
    <LinearGradient colors={["#7FB5D6", "#C7B9E5"]} style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>Welcome to Solace</Text>
          <Text style={styles.subtitle}>
            A safe space for comfort, healing, and reflection.
          </Text>
          <TouchableOpacity style={styles.primaryButton} onPress={nextStep}>
            <Text style={styles.primaryButtonText}>Next</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.title}>What brings you here?</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={nextStep}>
            <Text style={styles.primaryButtonText}>🌸 Grief Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton} onPress={nextStep}>
            <Text style={styles.primaryButtonText}>🌿 Anxiety Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton} onPress={nextStep}>
            <Text style={styles.primaryButtonText}>☁️ Gentle Comfort</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.title}>Would you like reminders?</Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.replace("Home")}
          >
            <Text style={styles.primaryButtonText}>
              ✅ Yes, send me daily messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.replace("Home")}
          >
            <Text style={styles.secondaryButtonText}>⏭️ Not right now</Text>
          </TouchableOpacity>
        </>
      )}
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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
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
    width: "80%",
  },
  primaryButtonText: {
    color: "#2D2D2D",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  secondaryButton: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  skipText: {
    marginTop: 20,
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
