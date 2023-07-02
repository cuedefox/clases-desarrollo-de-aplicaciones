import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onHandleModal, item }) => {
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => onHandleModal(item)}
    >
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
