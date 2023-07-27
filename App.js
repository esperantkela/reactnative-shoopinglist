import { useState } from "react";
import { styles } from "./components/global.style";
import {
  View,
  FlatList,
  Modal,
  Text,
  Pressable,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import DismissKeyBoard from "./components/DismissKeyBoard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";

export default function App() {
  const [Myproducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  const submitHandler = (product) => {
    setDisplayModal(false);
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

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };
  return (
    <DismissKeyBoard>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/09/06/22/32/pattern-4457535_640.png",
        }}
        style={styles.bgImg}
      >
        <Header />

        <View style={styles.container}>
          <Modal
            visible={showModal}
            animationType="slide"
            onRequestClose={() => setShowModal(false)}
            transparent
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Oups</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image source={require("./assets/cross.png")} />
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
          <ButtonComponent
            onPressHandler={() => setDisplayModal(true)}
            style={styles.addProductBtn}
          >
            Nouveau produit
          </ButtonComponent>
          <AddProduct
            submitHandler={submitHandler}
            displayModal={displayModal}
            cancelNewProduct={cancelNewProduct}
          />
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
      </ImageBackground>
    </DismissKeyBoard>
  );
}
