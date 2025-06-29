import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 60,
  },
});

export { Button };
