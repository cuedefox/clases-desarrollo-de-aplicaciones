import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121"
  },
  containerItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#D4D7ED",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#212121",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  icon: {
    color: "red",
    fontWeight: "bold"
  }
});
