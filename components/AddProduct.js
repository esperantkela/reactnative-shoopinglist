import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={product}
          placeholder="Nouveau produit"
          onChangeText={(val) => setProduct(val)}
          maxLength={9}
          secureTextEntry
        />
        <Button title="Valider" onPress={handleClick} />
      </View>
    </View>
  );
};

export default AddProduct;
