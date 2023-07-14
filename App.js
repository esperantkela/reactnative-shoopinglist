import { useState, useEffect } from "react";
import { styles } from "./components/global.style";
import { Text, View, FlatList, Alert } from "react-native";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [Myproducts, setMyProducts] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (product.length > 1) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [product]);

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    setMyProducts((currentMyProducts) => [
      { key: idString, name: product },
      ...currentMyProducts,
    ]);
  };
  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} disabled={btnDisabled} />
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
