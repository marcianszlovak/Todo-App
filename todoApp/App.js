import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Header } from "./components/header";
import { todoItem } from "./components/listitems";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do something", key: "1" },
    { text: "do something else", key: "2" },
    { text: "don't do that", key: "3" }
  ]);

  const pressButton = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}></View>
        <FlatList
          data={todos}
          renderItem={({ item }) => <todoItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
