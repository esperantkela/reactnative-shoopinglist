import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";

import React from "react";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={product}
          placeholder="Nouveau produit"
          onChangeText={(val) => setProduct(val)}
        />
        <Button
          title="Valider"
          onPress={() => submitHandler(product, setProduct)}
        />
      </View>
    </View>
  );
};

export default AddProduct;
