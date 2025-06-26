import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2022/12/29/13/18/winter-7684907_1280.jpg",
      }}
      style={styles.container}
    >
      <TextInput style={styles.input} placeholder="Enter your Email : " />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password : "
        secureTextEntry={true}
      />
      <View style={styles.Buttoncon}>
        <Button title="Login" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: "30%",
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#ffffffaa",
  },
  Buttoncon: {
    width: "100%",
    marginTop: 40,
  },
});
