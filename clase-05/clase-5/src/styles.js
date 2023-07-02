import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  SafeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#E2E4F3",
    paddingTop: StatusBar.currentHeight + 15
  },
  listContainer: {
    marginTop: 25,
    marginHorizontal: 15
  },
  list: {
    gap: 15,
    paddingBottom: 20
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  },
  modalDetailContainer: {
    paddingVertical: 20
  },
  modalDetailMessage: {
    fontSize: 18,
    color: "#212121"
  },
  selectedTask: {
    fontSize: 22,
    color: "#212121",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20
  }
});
