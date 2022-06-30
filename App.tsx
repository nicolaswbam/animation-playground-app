import { StyleSheet, View } from "react-native";
import { SquareCard } from "./components/SquareCard";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <SquareCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
