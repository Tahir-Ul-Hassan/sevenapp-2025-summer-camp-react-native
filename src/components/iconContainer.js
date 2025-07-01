import React from "react";
import { View, StyleSheet } from "react-native";

export default ({ icon }) => <View style={styles.headerIcon}>{icon}</View>;

const styles = StyleSheet.create({
  headerIcon: {
    backgroundColor: "#F6F5F4",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
