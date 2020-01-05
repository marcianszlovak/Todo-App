import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import { Header } from "./components/header";
import { todoItem } from "./components/listitems";
import { addToList } from "./components/addToList";
import { sandBox } from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do something", key: "1" },
    { text: "do something else", key: "2" },
    { text: "don't do that", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    
  } else {
    Alert.alert("Todos must be over 3 characters long.", [{
      text: "Understood", onPress: () => console.log("alert closed")
    }])
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <addToList submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <todoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
