import { View, StyleSheet } from "react-native";
export const iconContainer = ({ icon }) => {
  return <View style={styles.Container}>{icon}</View>;
};

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
