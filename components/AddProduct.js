import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";

import React, { useEffect } from "react";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  useEffect(() => {
    if (product.length > 1) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [product]);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={product}
          placeholder="Nouveau produit"
          onChangeText={(val) => setProduct(val)}
        />
        <Button title="Valider" onPress={handleClick} disabled={btnDisabled} />
      </View>
    </View>
  );
};

export default AddProduct;
