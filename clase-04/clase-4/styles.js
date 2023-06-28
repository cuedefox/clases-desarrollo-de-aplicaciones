import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    SafeArea: {
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#E2E4F3',
      paddingTop: StatusBar.currentHeight + 15
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
    },
    listContainer: {
      marginTop: 25,
      marginHorizontal: 15
    },
    containerItem: {
      justifyContent: 'space-between',
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: '#D4D7ED',
      paddingHorizontal: 10,
      borderRadius: 10,
      color: '#212121',
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
      	height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    listItem: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#212121'
    },
    list: {
      gap: 15,
      paddingBottom: 20
    },
    icon: {
      color: 'red',
      fontWeight: 'bold'
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
      paddingVertical: 20
    },
    modalTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10
    },
    modalDetailContainer: {
      paddingVertical: 20
    },
    modalDetailMessage: {
      fontSize: 18,
      color: '#212121'
    },
    selectedTask: {
      fontSize: 22,
      color: '#212121',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
    },
    modalButtonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      marginHorizontal: 20,
    }
  });
  