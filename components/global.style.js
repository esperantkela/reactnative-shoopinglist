import { StyleSheet } from "react-native";
import Colors from "./../constants/colors";

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
  },
  inputContainer: {
    justifyContent: "center",
    padding: 24,
    flex: 1,
  },
  textInput: {
    padding: 5,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 15,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
  },
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "mediumseagreen",
    color: Colors.white,
    borderRadius: 6,
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    backgroundColor: Colors.white,
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },

  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },

  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },

  modalBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  modalBodyText: {
    fontSize: 17,
  },

  modalFooter: {
    width: "100%",
  },

  PressableBtnModal: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.info,
  },

  modaleBtn: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    padding: 16,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnBlue: {
    width: 150,
    borderRadius: 6,
    backgroundColor: "seagreen",
  },

  btnTomato: {
    width: 150,
    borderRadius: 6,
    backgroundColor: "tomato",
  },

  addProductBtn: {
    backgroundColor: "darkred",
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.white,
    marginBottom: 20,
  },

  bgImg: {
    flex: 1,
  },
});

export { styles };
