import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";
import Header from "./components/header";
import ItemList from "./components/listItems";
import AddTolist from "./components/addTolist";
import { Background } from "./components/background.js";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do something", key: "1" },
    { text: "do something else", key: "2" },
    { text: "don't do this", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Please enter more than 3 characters",
        "Do not fear the shrouded path"[
          { text: "Understood", onPress: () => console.log("alert closed") }
        ]
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTolist submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ItemList item={item} pressHandler={pressHandler} />
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
    backgroundColor: "#fff"
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
