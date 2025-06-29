import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";

export default function Listing() {
  const data = [1, 2, 3, 4, 5];

  return (
    <ScrollView>
      {data.map((item) => (
        <ImageBackground
          style={styles.img}
          source={require("../../assets/image.png")}
        >
          <Text style={styles.textStyle}>{item}</Text>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 360,
    height: 300,
  },
  textStyle: {
    fontSize: 40,
    color: "white",
  },
});
