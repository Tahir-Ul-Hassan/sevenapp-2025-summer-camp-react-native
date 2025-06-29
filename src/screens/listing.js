import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Listing() {
  const data = [1, 2, 3, 4, 5];

  return (
    <ScrollView>
      <View>
        {data.map((item, index) => (
          <Image
            key={index}
            style={styles.img}
            source={require("../../assets/image.png")}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
});
