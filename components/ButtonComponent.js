import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ButtonComponent = ({ children, onPressHandler, style }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={{ ...styles.btn, ...style }}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "grey",
    padding: 9,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});
