import { StyleSheet, Text, View, Button } from "react-native";
import React, { use, useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
export default function ConfettiButton() {
  const confettiRef = useRef();
  const boxRef = useRef();
  function onCheetahPressed() {
    if (confettiRef) {
      confettiRef.current.start();
    }
  }

  return (
    <View ref={boxRef}>
      <Button onPress={onCheetahPressed} title={"chetah"} />
      <ConfettiCannon ref={confettiRef} count={200} origin={{ x: -10, y: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
