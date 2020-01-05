import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function todoItem({ item }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 18,
    marginTop: 18,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});
