import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./global.style";
import React from "react";

export default function ProductList({ name }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("cliqué ")}
      activeOpacity={0.2}
    >
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
