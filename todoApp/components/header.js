import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function header(params) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>What to do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    paddingTop: 40,
    backgroundColor: "beige"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});
