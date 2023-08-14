import { View, Modal } from "react-native";
import { styles } from "./global.style";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          inputValue={product}
          onChangeHandler={(val) => setProduct(val)}
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
