import { View, Text, TextInput, Button, Modal } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

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
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
            Valider
          </ButtonComponent>
          <ButtonComponent
            onPressHandler={cancelNewProduct}
            style={styles.btnTomato}
          >
            Annuler
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

export default AddProduct;
