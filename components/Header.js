import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.logo}>My Shooping List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "darkred",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 30,
    paddingBottom: 15,
  },

  logo: {
    color: "white",
    fontSize: 30,
    padding: 9,
    fontWeight: "bold",
  },
});
