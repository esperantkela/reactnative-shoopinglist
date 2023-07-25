import { View, Text, TextInput, Button, Modal } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={product}
          placeholder="Nouveau produit"
          onChangeText={(val) => setProduct(val)}
          maxLength={9}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnBlue}>
            <Button title="Valider" onPress={handleClick} />
          </View>
          <View style={styles.btnTomato}>
            <Button title="Annuler" color="tomato" onPress={cancelNewProduct} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddProduct;
