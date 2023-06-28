import { View, TextInput, Button, SafeAreaView, Text, FlatList, Modal, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [borderColor, setBorderColor] = useState('#AA7DCE');
  const [selectedTask, setSelectedTask] = useState(null);
  const [visible, setVisible] = useState(false);
  const onHandleFocus = () => {
    setBorderColor('#424D9E');
  }
  const onHandleBlur = () => {
    setBorderColor('#AA7DCE')
  }
  const onHandleChangeText = (text) => {
    setTask(text);
  }
  const onHandleCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])
    setTask('');
  }
  const onHandleModal = (item) => {
    setSelectedTask(item);
    setVisible(true);
  }
  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
    setVisible(false);
  }
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.containerItem} onPress={() => onHandleModal(item)}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  )
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.input, {borderColor: borderColor}]} 
          placeholder='add new task' 
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor='#B7BCE1'
          selectionColor='#B7BCE1'
          placeholderTextColor='#9AA1D5'
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onChangeText={onHandleChangeText}
          value={task}
          />
          <Button disabled={task.length == 0} title='add' color={'#AA7DCE'} onPress={onHandleCreateTask} />
        </View>
        <FlatList 
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={tasks} 
          renderItem={renderItem} 
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={visible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title= 'cancel'
              color= 'red'
              onPress={() => setVisible(false)}
            />
            <Button 
              title= 'delete'
              color= 'green'
              onPress={() => onHandleDelete(selectedTask.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}