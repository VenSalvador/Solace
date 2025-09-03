import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function JournalScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#C7B9E5" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2D2D2D" }}>
        Welcome to Solace 💜
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        A space for comfort and peace.
      </Text>
    </SafeAreaView>
  );
}
