import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do something", key: "1" },
    { text: "do something else", key: "2" },
    { text: "don't do that", key: "3" }
  ]);

  return;
  <View style={styles.container}>
    {/* header */}
    <View style={styles.content}>
      {/* to do form */}
      <View style={styles.list}></View>
      <FlatList />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
