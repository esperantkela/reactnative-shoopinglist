import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 60,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
    marginBottom: 10,
  },
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#ffb6c1",
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
    height: 250,
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
});

export { styles };
