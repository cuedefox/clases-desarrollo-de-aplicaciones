import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    SafeArea: {
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#E2E4F3',
      paddingTop: StatusBar.currentHeight
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20
    },
    input: {
      flex: 0.95,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      color: '#212121'
    }
  });
  