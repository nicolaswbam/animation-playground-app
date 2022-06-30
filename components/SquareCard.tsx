import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../common/colors";

export const SquareCard: FunctionComponent = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Hello World !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    padding: 16,
    borderRadius: 8,
    height: 128,
    width: 128,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 32,
  },
});
