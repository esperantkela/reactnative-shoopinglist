import { View, Text, Pre, Pressable } from "react-native";
import { styles } from "./global.style";
import React from "react";

export default function ProductList({ name, deleteProduct, idString }) {
  return (
    <Pressable onPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
}
