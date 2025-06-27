import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

export default function StatePractice() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>{password}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={setPassword}
      />
      <Button title="login" onPress={() => console.log("Login pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },
});
