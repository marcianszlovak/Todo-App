import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    paddingTop: 40,
    backgroundColor: "#D2691E"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});
