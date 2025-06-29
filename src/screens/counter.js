import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";

import { Button } from "../components/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  function onAddPressed() {
    setCount(count + 1);
  }

  function onMinusPressed() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Button
            title={"+"}
            onPress={onAddPressed}
            btnIcon={<Icon size={40} name="heart" color={"purple"} />}
          />
        </View>

        <Text style={styles.CounterText}>{count}</Text>
        <View>
          <Button
            title={"-"}
            onPress={onMinusPressed}
            btnIcon={<Icon size={40} name="home" color={"red"} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    gap: 30,
  },
  CounterText: {
    fontSize: 30,
  },
});
