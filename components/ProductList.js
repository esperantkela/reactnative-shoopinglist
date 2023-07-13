import { View, Text } from "react-native";
import React from "react";

export default function ProductList({name}) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
