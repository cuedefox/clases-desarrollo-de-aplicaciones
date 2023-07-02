import { useState } from "react";
import {
  View,
  Button,
  SafeAreaView,
  Text,
  FlatList,
  Modal
} from "react-native";

import { InputTask, TaskItem } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [borderColor, setBorderColor] = useState("#AA7DCE");
  const [selectedTask, setSelectedTask] = useState(null);
  const [visible, setVisible] = useState(false);
  const onHandleFocus = () => {
    setBorderColor("#424D9E");
  };
  const onHandleBlur = () => {
    setBorderColor("#AA7DCE");
  };
  const onHandleChangeText = (text) => {
    setTask(text);
  };
  const onHandleCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ]);
    setTask("");
  };
  const onHandleModal = (item) => {
    setSelectedTask(item);
    setVisible(true);
  };
  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setVisible(false);
  };
  const renderItem = ({ item }) => (
    <TaskItem onHandleModal={onHandleModal} item={item} />
  );
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleCreateTask={onHandleCreateTask}
          onHandleFocus={onHandleFocus}
          task={task}
        />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={tasks}
          renderItem={renderItem}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>
              Are you sure to delete this item?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title="cancel"
              color="red"
              onPress={() => setVisible(false)}
            />
            <Button
              title="delete"
              color="green"
              onPress={() => onHandleDelete(selectedTask.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
