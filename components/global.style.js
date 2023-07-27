import { StyleSheet } from "react-native";

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
    borderBottomColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    marginBottom: 10,
  },
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "mediumseagreen",
    color: "#fff",
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
    backgroundColor: "#fff",
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
    backgroundColor: "lightseagreen",
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
    borderColor: "#fff",
    marginBottom: 20,
  },

  bgImg: {
    flex: 1,
  },
});

export { styles };
