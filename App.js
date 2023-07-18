import { useState } from "react";
import { styles } from "./components/global.style";
import { View, FlatList, Modal, Text, Pressable } from "react-native";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [Myproducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  const submitHandler = (product) => {
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      setShowModal(true);
    }
  };
  return (
    <View style={styles.container}>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Oups</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalBodyText}>
                Merci d'indiquer plus d'un seul caracère
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable
                style={styles.PressableBtnModal}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modaleBtn}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={Myproducts}
        renderItem={({ item }) => (
          <ProductList
            name={item.name}
            deleteProduct={deleteProduct}
            idString={item.key}
          />
        )}
      />
    </View>
  );
}
