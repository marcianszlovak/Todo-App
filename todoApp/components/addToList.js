import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function addToList({ submitHandler }) {
  const [text, setText] = useState(""); // keeps track of what the user types into the input field
  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new item..."
        onChangeText={changeHandler}
      />
      <Button
        onPress
        {...() => submitHandler(text)}
        title="add item"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
