import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function ProductList({ name }) {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("cliqué ")}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
